/* ========== 伦博教育C++编程 · 全站共享组件库 ========== */
'use strict';
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

/* 合并生成题库：66 手工精品题 + 460 生成训练题 = 526 题 */
if (window.GEN_EXERCISES) EXERCISES.push(...window.GEN_EXERCISES);
/* 合并 OJ 千题库：12 手工精品 + 988 生成变体 = 1000 题 */
if (window.GEN_KATAS) KATAS.push(...window.GEN_KATAS);
const TOTAL_QUIZ = EXERCISES.length;
const TOTAL_ALL = EXERCISES.length + KATAS.length;

/* ---------------- 游戏化状态 ---------------- */
const LEVELS = [
  { lv:1,  name:'青铜码农',        xp:0,     icon:'🥉' },
  { lv:2,  name:'白银剑客',        xp:100,   icon:'🥈' },
  { lv:3,  name:'黄金猎手',        xp:250,   icon:'🥇' },
  { lv:4,  name:'铂金法师',        xp:500,   icon:'🔮' },
  { lv:5,  name:'钻石战神',        xp:900,   icon:'💎' },
  { lv:6,  name:'星耀宗师',        xp:1300,  icon:'🌟' },
  { lv:7,  name:'传说 · AK CSP-S', xp:1500,  icon:'👑' },
  { lv:8,  name:'百战程序员',      xp:2200,  icon:'⚔️' },
  { lv:9,  name:'代码骑士团长',    xp:3200,  icon:'🛡️' },
  { lv:10, name:'省选之星',        xp:4600,  icon:'🚀' },
  { lv:11, name:'银河打表员',      xp:6500,  icon:'🌌' },
  { lv:12, name:'算法哲学家',      xp:9000,  icon:'🧠' },
  { lv:13, name:'NOI 预备役',      xp:12500, icon:'🏆' },
  { lv:14, name:'代码之神',        xp:16000, icon:'👑' },
];
const BADGES = [
  { id:'first',  icon:'🎯', name:'初试锋芒', desc:'答对第 1 道题',        check: s => Object.keys(s.done).length >= 1 },
  { id:'streak10',icon:'🔥', name:'十连绝世', desc:'连续答对 10 道题',     check: s => s.bestStreak >= 10 },
  { id:'s12',    icon:'📘', name:'语法大师', desc:'通关一二阶段全部习题', check: s => EXERCISES.filter(e=>e.stage==='s1'||e.stage==='s2').every(e=>s.done[e.id]) },
  { id:'s3',     icon:'⚔️', name:'算法新星', desc:'通关 CSP-J 阶段全部习题', check: s => EXERCISES.filter(e=>e.stage==='s3').every(e=>s.done[e.id]) },
  { id:'s4',     icon:'🏆', name:'竞赛大神', desc:'通关 CSP-S 阶段全部习题', check: s => EXERCISES.filter(e=>e.stage==='s4').every(e=>s.done[e.id]) },
  { id:'ac1',    icon:'💻', name:'首道 AC',  desc:'通过第一道编程实战题',  check: s => KATAS.some(k=>s.done[k.id]) },
  { id:'ac10',   icon:'🧗', name:'OJ 新手',  desc:'通过 10 道编程实战题',   check: s => KATAS.filter(k=>s.done[k.id]).length >= 10 },
  { id:'ac50',   icon:'🔥', name:'OJ 熟手',  desc:'通过 50 道编程实战题',   check: s => KATAS.filter(k=>s.done[k.id]).length >= 50 },
  { id:'ac100',  icon:'⚡', name:'百题 AC',  desc:'通过 100 道编程实战题',  check: s => KATAS.filter(k=>s.done[k.id]).length >= 100 },
  { id:'ac300',  icon:'💪', name:'三百斩',   desc:'通过 300 道编程实战题',  check: s => KATAS.filter(k=>s.done[k.id]).length >= 300 },
  { id:'ac500',  icon:'🌋', name:'五百封神', desc:'通过 500 道编程实战题',  check: s => KATAS.filter(k=>s.done[k.id]).length >= 500 },
  { id:'ac1000', icon:'🏅', name:'千题斩·传说', desc:'通过全部 1000 道编程实战题', check: s => KATAS.every(k=>s.done[k.id]) },
  { id:'read6',  icon:'📖', name:'博览群书', desc:'学完 6 章课程',        check: s => Object.keys(s.read).length >= 6 },
  { id:'read12', icon:'🎓', name:'学贯十二', desc:'学完全部 12 章课程',   check: s => Object.keys(s.read).length >= 12 },
  { id:'star5',  icon:'⭐', name:'五分熟',   desc:'攻克一道 ⭐⭐⭐⭐⭐ 难题', check: s => EXERCISES.some(e=>e.diff===5 && s.done[e.id]) },
  { id:'hundred',icon:'💯', name:'百题斩',   desc:'累计通关 100 道题',    check: s => Object.keys(s.done).length >= 100 },
];

let state = loadState();
function loadState(){
  try { const s = JSON.parse(localStorage.getItem('lunbo_cpp_v1')); if (s) return Object.assign({xp:0,done:{},read:{},streak:0,bestStreak:0,answered:0,correct:0,badges:[]}, s); } catch(e){}
  return { xp:0, done:{}, read:{}, streak:0, bestStreak:0, answered:0, correct:0, badges:[] };
}
function saveState(){ localStorage.setItem('lunbo_cpp_v1', JSON.stringify(state)); }
function levelOf(xp){ let cur = LEVELS[0]; for (const L of LEVELS) if (xp >= L.xp) cur = L; return cur; }
function nextLevel(xp){ for (const L of LEVELS) if (xp < L.xp) return L; return null; }

function toast(msg, ms=2200){
  let t = $('#toast');
  if (!t){ t = document.createElement('div'); t.id = 'toast'; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add('show');
  clearTimeout(t._tm); t._tm = setTimeout(()=>t.classList.remove('show'), ms);
}

function updateNavXP(){
  const L = levelOf(state.xp);
  const nl = $('#nav-level'), nx = $('#nav-xp-num');
  if (nl) nl.textContent = L.lv;
  if (nx) nx.textContent = state.xp + ' XP';
}

function checkBadges(){
  for (const b of BADGES){
    if (!state.badges.includes(b.id) && b.check(state)){
      state.badges.push(b.id); saveState();
      toast(`🏅 解锁徽章「${b.name}」！`); fireConfetti(90);
    }
  }
}

function awardXP(xp){
  const before = levelOf(state.xp).lv;
  state.xp += xp; saveState();
  const after = levelOf(state.xp).lv;
  toast(`+${xp} XP！`);
  if (after > before){
    const L = levelOf(state.xp);
    setTimeout(()=>{ toast(`🎉 升级！Lv.${after} ${L.icon} ${L.name}`, 3000); fireConfetti(160); }, 900);
  }
  updateNavXP();
}

/* ---------------- 代码高亮 ---------------- */
function hl(code){
  code = code.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const stash = [];
  code = code.replace(/(\/\/[^\n]*)|("(?:[^"\\]|\\.)*")/g, m => {
    stash.push(m.startsWith('//') ? `<span class="tok-c">${m}</span>` : `<span class="tok-s">${m}</span>`);
    return '\u0000' + (stash.length - 1) + '\u0000';
  });
  code = code.replace(/\b(#include|using|namespace|std|int|long|double|char|bool|void|return|if|else|for|while|do|break|continue|struct|const|auto|true|false|sort|vector|string|cout|cin|endl|queue|map|set|pair|max|min|abs|swap|sizeof|memset|priority_queue|greater|push_back|size|begin|end)\b/g, '<span class="tok-k">$1</span>');
  code = code.replace(/\b(\d+)\b/g, '<span class="tok-n">$1</span>');
  return code.replace(/\u0000(\d+)\u0000/g, (m, i) => stash[+i]);
}

/* ---------------- 彩带特效 ---------------- */
let confettiCv, cfx, confettiParts = [];
function fireConfetti(n = 80){
  if (!confettiCv){
    confettiCv = document.createElement('canvas');
    confettiCv.id = 'confetti';
    document.body.appendChild(confettiCv);
    cfx = confettiCv.getContext('2d');
  }
  confettiCv.width = innerWidth; confettiCv.height = innerHeight;
  const colors = ['#00e5ff','#7c4dff','#ffd54f','#00e676','#ff5252'];
  for (let i = 0; i < n; i++){
    confettiParts.push({
      x: innerWidth / 2 + (Math.random() - .5) * 240, y: innerHeight * .4,
      vx: (Math.random() - .5) * 13, vy: -Math.random() * 13 - 4,
      s: Math.random() * 7 + 3, c: colors[i % colors.length],
      r: Math.random() * 6.28, vr: (Math.random() - .5) * .3, life: 90
    });
  }
  if (!fireConfetti.running){ fireConfetti.running = true; confettiFrame(); }
}
function confettiFrame(){
  cfx.clearRect(0, 0, confettiCv.width, confettiCv.height);
  confettiParts = confettiParts.filter(p => p.life > 0 && p.y < innerHeight + 40);
  for (const p of confettiParts){
    p.x += p.vx; p.y += p.vy; p.vy += .32; p.r += p.vr; p.life--;
    cfx.save(); cfx.translate(p.x, p.y); cfx.rotate(p.r);
    cfx.fillStyle = p.c; cfx.globalAlpha = Math.min(1, p.life / 30);
    cfx.fillRect(-p.s/2, -p.s/2, p.s, p.s * .6); cfx.restore();
  }
  if (confettiParts.length) requestAnimationFrame(confettiFrame);
  else { fireConfetti.running = false; cfx.clearRect(0, 0, confettiCv.width, confettiCv.height); }
}

/* ---------------- 轻量代码雨背景（子页面用） ---------------- */
function initRain(){
  const cv = document.createElement('canvas');
  cv.id = 'matrix-rain';
  document.body.prepend(cv);
  const glow = document.createElement('div');
  glow.className = 'bg-glow';
  document.body.prepend(glow);
  const ctx = cv.getContext('2d');
  let W, H, cols, drops;
  const CHARS = '01<>{}[]();=+-*/#include<int>coutcinstl::';
  function resize(){
    W = cv.width = innerWidth; H = cv.height = innerHeight;
    cols = Math.floor(W / 16);
    drops = Array.from({length: cols}, () => Math.random() * H / 16);
  }
  resize(); addEventListener('resize', resize);
  (function frame(){
    ctx.fillStyle = 'rgba(10,14,26,.3)'; ctx.fillRect(0, 0, W, H);
    ctx.font = '13px JetBrains Mono';
    for (let i = 0; i < cols; i++){
      ctx.fillStyle = Math.random() < .06 ? '#00e5ff' : '#1b5e45';
      ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], i * 16, drops[i] * 16);
      if (drops[i] * 16 > H && Math.random() > .975) drops[i] = 0;
      drops[i]++;
    }
    requestAnimationFrame(frame);
  })();
}

/* ---------------- 共享导航 ---------------- */
const NAV_ITEMS = [
  ['index.html','首页'], ['path.html','学习路径'], ['courses.html','精品课程'],
  ['gym.html','题库闯关'], ['oj.html','编程实战'], ['solutions.html','题解中心'],
  ['playground.html','在线演示'], ['profile.html','我的成就'],
];
function renderNav(active){
  const nav = document.createElement('nav');
  nav.id = 'navbar';
  nav.innerHTML = `<div class="nav-inner">
    <a class="logo" href="index.html"><span class="logo-bolt">⚡</span> 伦博教育<span class="logo-accent">C++编程</span></a>
    <div class="nav-links" id="nav-links">
      ${NAV_ITEMS.map(([href, name]) => `<a href="${href}" class="nav-link ${href===active?'active':''}">${name}</a>`).join('')}
    </div>
    <div class="nav-xp" title="我的经验值">
      <span class="xp-badge">Lv.<b id="nav-level">1</b></span>
      <span class="xp-num" id="nav-xp-num">0 XP</span>
    </div>
    <button class="nav-toggle" id="nav-toggle">☰</button>
  </div>`;
  document.body.prepend(nav);
  $('#nav-toggle').onclick = () => $('#nav-links').classList.toggle('open');
  $$('.nav-link').forEach(a => a.addEventListener('click', () => $('#nav-links').classList.remove('open')));
  updateNavXP();
}

/* ---------------- 工具 ---------------- */
function getParam(name){ return new URLSearchParams(location.search).get(name); }
function diffStars(d){ return '⭐'.repeat(d); }
function stageName(id){ const s = STAGES.find(x => x.id === id); return s ? s.name.split(' · ')[1] : id; }
function stageColor(id){ const s = STAGES.find(x => x.id === id); return s ? s.color : '#00e5ff'; }

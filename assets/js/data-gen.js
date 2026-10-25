/* ========== 伦博教育C++编程 · 批量训练题生成器 ========== */
/* 种子确定性生成 460 道训练题：算术/循环/数组/字符串/判断/递推/位运算/复杂度/数位
   所有答案由程序精确计算，杜绝错题。与 66 道手工精品题合并后总题库 526 题。 */
(function(){
  function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;var t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;}}
  const rnd = mulberry32(20261025);
  const ri = (lo,hi) => lo + Math.floor(rnd() * (hi - lo + 1));
  const pick = arr => arr[Math.floor(rnd() * arr.length)];

  function opts4(correct, cands){
    const cs = String(correct), opts = [cs], seen = new Set([cs]);
    for (const c of cands){ const s = String(c); if (!seen.has(s)){ seen.add(s); opts.push(s); } if (opts.length === 4) break; }
    let pad = 3;
    while (opts.length < 4){ const s = cs + '±' + pad; if (!seen.has(s)){ seen.add(s); opts.push(s); } pad += 5; }
    for (let i = opts.length - 1; i > 0; i--){ const j = Math.floor(rnd() * (i + 1)); [opts[i], opts[j]] = [opts[j], opts[i]]; }
    return { options: opts, answer: opts.indexOf(cs) };
  }

  const GEN = [];
  let gid = 1;
  function add(stage, type, diff, xp, title, question, code, correct, cands, explanation){
    const o = opts4(correct, cands);
    GEN.push({ id:'g' + String(gid++).padStart(3,'0'), stage, type, diff, xp, title, question, code, options:o.options, answer:o.answer, explanation });
  }

  /* A. 算术输出（60 题） */
  for (let i = 0; i < 60; i++){
    const a = ri(2, 60), b = ri(2, 12), op = pick(['+','-','*','/','%']);
    let res;
    if (op === '+') res = a + b;
    else if (op === '-') res = a - b;
    else if (op === '*') res = a * b;
    else if (op === '/') res = Math.floor(a / b);
    else res = a % b;
    const opName = {'+':'加法','-':'减法','*':'乘法','/':'整数除法（舍去小数）','%':'取余数'}[op];
    add('s1','output',1,10,'算术特训 #' + (i+1),'程序输出什么？',
      `int a = ${a}, b = ${b};\ncout << a ${op} b;`,
      res, [a+b, a-b, a*b, Math.floor(a/b), a%b, res+1, res-1, res+2],
      `${a} ${op} ${b} = ${res}。${opName}，cout 直接输出计算结果。`);
  }

  /* B. 循环输出序列（40 题） */
  for (let i = 0; i < 40; i++){
    const s = ri(0, 3), step = pick([1,1,2]), e = ri(s + 3, Math.min(9, s + 6));
    let seq = [];
    for (let k = s; k < e; k += step) seq.push(k);
    const correct = seq.join('');
    const c1 = seq.map(x => x + 1).join(''), c2 = seq.slice(0, -1).join('') || '0', c3 = seq.concat([e]).join('');
    add('s1','output',2,15,'循环序列 #' + (i+1),'程序输出什么？（数字连续打印，无空格）',
      `for (int i = ${s}; i < ${e}; i += ${step})\n    cout << i;`,
      correct, [c1, c2, c3, seq.join(' ')],
      `i 从 ${s} 开始，每次 +${step}，满足 i < ${e} 时打印：${seq.join('、')}，连续输出即 ${correct}。`);
  }

  /* C. 循环求和（40 题） */
  for (let i = 0; i < 40; i++){
    const n = ri(4, 15), mode = pick(['sum','sq']);
    let res, code, exp;
    if (mode === 'sum'){
      res = n * (n + 1) / 2;
      code = `int sum = 0;\nfor (int i = 1; i <= ${n}; i++)\n    sum += i;\ncout << sum;`;
      exp = `1+2+…+${n} = ${n}×${n+1}÷2 = ${res}（等差数列求和公式）。`;
    } else {
      res = 0; for (let k = 1; k <= Math.min(n, 8); k++) res += k * k;
      const m = Math.min(n, 8);
      code = `int sum = 0;\nfor (int i = 1; i <= ${m}; i++)\n    sum += i * i;\ncout << sum;`;
      exp = `1²+2²+…+${m}² = ${res}。逐项累加即可验证。`;
    }
    add('s1','output',2,15,'累加特训 #' + (i+1),'程序输出什么？', code,
      res, [res + n, res - n, res + 1, res - 1, res * 2], exp);
  }

  /* D. 数组取值（50 题） */
  for (let i = 0; i < 50; i++){
    const arr = Array.from({length:5}, () => ri(1, 20));
    const x = ri(0, 3), y = ri(x, 4);
    const correct = arr[x] + arr[y];
    add('s2','output',2,15,'数组猎手 #' + (i+1),'程序输出什么？',
      `int a[5] = {${arr.join(', ')}};\ncout << a[${x}] + a[${y}];`,
      correct, [
        (arr[x+1] !== undefined ? arr[x+1] + arr[y] : correct + 3),
        (arr[y+1] !== undefined ? arr[x] + arr[y+1] : correct - 3),
        arr[x] * arr[y], correct + 1, correct - 1
      ],
      `下标从 0 开始：a[${x}]=${arr[x]}，a[${y}]=${arr[y]}，和为 ${correct}。`);
  }

  /* E. 字符串操作（40 题） */
  const WORDS = ['code','hello','bit','loop','algo','stack','queue','tree','graph','sort','lucas','lunbo','pixel','debug','vector','map'];
  for (let i = 0; i < 40; i++){
    const w1 = pick(WORDS), w2 = pick(WORDS);
    if (i % 2 === 0){
      const correct = (w1 + w2).length;
      add('s2','output',2,15,'字符串工坊 #' + (i+1),'程序输出什么？',
        `string s = "${w1}";\ns += "${w2}";\ncout << s.size();`,
        correct, [w1.length, w2.length, correct + 1, correct - 1],
        `s 变为 "${w1}${w2}"，长度为 ${w1.length}+${w2.length}=${correct}。`);
    } else {
      const idx = ri(0, w1.length - 1), correct = w1[idx];
      add('s2','output',2,15,'字符定位 #' + (i+1),'程序输出什么？',
        `string s = "${w1}";\ncout << s[${idx}];`,
        correct, [w1[(idx+1)%w1.length], w1[0], w1[w1.length-1], String(idx)],
        `字符串下标同样从 0 开始：s[${idx}] 是 "${w1}" 的第 ${idx+1} 个字符 '${correct}'。`);
    }
  }

  /* F. 语法概念判断（60 题） */
  const FACTS = [
    ['C++ 语句必须以分号结尾', true],
    ['cout 使用 >> 运算符输出', false],
    ['cin 使用 >> 运算符读入数据', true],
    ['int 类型可以存储小数', false],
    ['double 是浮点数类型', true],
    ['数组 int a[10] 的合法下标包含 10', false],
    ['C++ 数组下标从 0 开始', true],
    ['= 和 == 在 C++ 中含义相同', false],
    ['== 用于判断相等，= 用于赋值', true],
    ['long long 的范围比 int 大', true],
    ['main 函数是程序的入口', true],
    ['程序从最后一个函数开始执行', false],
    ['for 循环的三个部分用逗号分隔', false],
    ['for 循环的三个部分用分号分隔', true],
    ['while 循环可能一次都不执行', true],
    ['do-while 循环至少执行一次', true],
    ['break 用于跳出当前循环', true],
    ['continue 会直接结束整个循环', false],
    ['continue 跳过本次迭代进入下一次', true],
    ['string 类型可以直接用 + 拼接', true],
    ['sort 默认从大到小排序', false],
    ['sort 默认从小到大排序', true],
    ['vector 的长度是固定不变的', false],
    ['vector 可以用 push_back 追加元素', true],
    ['set 中的元素会自动去重', true],
    ['map 可以用任意类型的键索引值', true],
    ['递归函数可以没有出口条件', false],
    ['缺少出口的递归会导致爆栈', true],
    ['函数参数默认是引用传递', false],
    ['int &x 表示引用传参', true],
  ];
  for (let i = 0; i < 60; i++){
    const f = FACTS[i % FACTS.length];
    GEN.push({ id:'g' + String(gid++).padStart(3,'0'), stage:'s1', type:'judge', diff:1, xp:10,
      title:'概念速断 #' + (i+1), question:'判断正误：' + f[0], answer:f[1],
      explanation: f[1]
        ? '正确！「' + f[0] + '」是 C++ 的基本规则，记住它。'
        : '错误！「' + f[0] + '」并不成立——回到对应课程章节巩固这个知识点，它是竞赛基本功。' });
  }

  /* G. 递推求值（40 题） */
  for (let i = 0; i < 40; i++){
    const c = pick([1, 1, 2]), n = ri(5, 9);
    const f = [0, 1, 1];
    for (let k = 3; k <= n; k++) f[k] = f[k-1] + c * f[k-2];
    const correct = f[n];
    add('s3','output',3,25,'递推大师 #' + (i+1),'程序输出什么？',
      `long long f[20];\nf[1] = f[2] = 1;\nfor (int i = 3; i <= ${n}; i++)\n    f[i] = f[i-1] + ${c} * f[i-2];\ncout << f[${n}];`,
      correct, [f[n-1], f[n-1] + c * f[n-2] + (f[n-2]||1), correct + c, correct - 1, f[n-2]],
      `逐项递推：${f.slice(1, n+1).join(', ')}，所以 f[${n}]=${correct}。`);
  }

  /* H. 位运算（50 题） */
  for (let i = 0; i < 50; i++){
    const x = ri(3, 60), mode = pick(['shl','and','or','xor','low']);
    let correct, code, exp, cands;
    if (mode === 'shl'){
      const k = ri(1, 3); correct = x << k;
      code = `cout << (${x} << ${k});`;
      exp = `左移 ${k} 位等于乘 2 的 ${k} 次方：${x}×${1<<k}=${correct}。`;
      cands = [x << (k+1), x >> k, x * k, correct / 2];
    } else if (mode === 'and'){
      const y = ri(1, 30); correct = x & y;
      code = `cout << (${x} & ${y});`;
      exp = `按位与：${x}=${x.toString(2)}B，${y}=${y.toString(2)}B，同为 1 的位才得 1，结果 ${correct}。`;
      cands = [x | y, x ^ y, x + y];
    } else if (mode === 'or'){
      const y = ri(1, 30); correct = x | y;
      code = `cout << (${x} | ${y});`;
      exp = `按位或：任一位为 1 则得 1，${x} | ${y} = ${correct}。`;
      cands = [x & y, x ^ y, x + y];
    } else if (mode === 'xor'){
      const y = ri(1, 30); correct = x ^ y;
      code = `cout << (${x} ^ ${y});`;
      exp = `按位异或：两位不同得 1，${x} ^ ${y} = ${correct}。异或是 CSP-S 常客。`;
      cands = [x & y, x | y, x + y];
    } else {
      correct = x & -x;
      code = `cout << (${x} & -${x});`;
      exp = `x & (-x) 即 lowbit：取 ${x}（二进制 ${x.toString(2)}）最低位的 1，值为 ${correct}。树状数组核心！`;
      cands = [x & (x-1), x, correct * 2, 1];
    }
    add('s4','output',4,40,'位运算黑魔法 #' + (i+1),'程序输出什么？', code, correct, cands, exp);
  }

  /* I. 复杂度估算（30 题，判断） */
  const CN = [1000, 10000, 100000, 1000000];
  const CX = [['O(n)', n=>n], ['O(n log n)', n=>n*Math.ceil(Math.log2(n))], ['O(n²)', n=>n*n], ['O(2ⁿ)', n=>null]];
  for (let i = 0; i < 30; i++){
    const n = pick(CN), [name, fn] = pick(CX);
    const ops = fn(n);
    const pass = ops !== null && ops <= 1e8;
    GEN.push({ id:'g' + String(gid++).padStart(3,'0'), stage:'s3', type:'judge', diff:3, xp:25,
      title:'复杂度秒判 #' + (i+1),
      question:`判断正误：数据范围 n = ${n.toLocaleString()}，${name} 的算法可以在 1 秒时限内通过。`,
      answer: pass,
      explanation: ops === null
        ? `错误！O(2ⁿ) 是指数爆炸，n=30 就要 10 亿次运算，n=${n.toLocaleString()} 想都别想。`
        : `${pass ? '正确' : '错误'}！${name} 在 n=${n.toLocaleString()} 时约需 ${ops >= 1e8 ? (ops/1e8).toFixed(0) + '×10⁸' : ops.toExponential(1)} 次运算，1 秒上限约 10⁸ 次，${pass ? '可以通过' : '必然超时'}。` });
  }

  /* J. 数位操作（50 题） */
  for (let i = 0; i < 50; i++){
    const n = ri(102, 9876), mode = pick(['dsum','rev']);
    const digits = String(n).split('').map(Number);
    if (mode === 'dsum'){
      const correct = digits.reduce((a,b) => a + b, 0);
      add('s2','output',2,15,'数位拆解 #' + (i+1),'程序输出什么？',
        `int n = ${n}, s = 0;\nwhile (n > 0) {\n    s += n % 10;\n    n /= 10;\n}\ncout << s;`,
        correct, [digits.reduce((a,b)=>a*b,1), correct + digits[0], correct - 1, n % 100],
        `这是数位和模板：${digits.join(' + ')} = ${correct}。n%10 取末位，n/=10 去末位。`);
    } else {
      const correct = parseInt(String(n).split('').reverse().join(''), 10);
      add('s2','output',3,25,'数字反转 #' + (i+1),'程序输出什么？',
        `int n = ${n}, r = 0;\nwhile (n > 0) {\n    r = r * 10 + n % 10;\n    n /= 10;\n}\ncout << r;`,
        correct, [n, parseInt(String(n).split('').reverse().join(''), 10) + 1, digits.reduce((a,b)=>a+b,0), n % 1000],
        `反转模板：逐位取出末位拼到新数末尾，${n} 反转为 ${correct}。`);
    }
  }

  window.GEN_EXERCISES = GEN;
})();

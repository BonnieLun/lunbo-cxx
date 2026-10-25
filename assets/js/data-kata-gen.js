/* ========== 伦博教育C++编程 · OJ 千题库生成器 ==========
 * 12 大分类 · 58 种经典题型 · 988 道参数化变体 + 12 道手工精品 = 1000 题
 * 所有测试点答案由 JS 参考实现精确计算，种子固定 → 每次加载题目完全一致（AC 记录稳定）
 * 每题附 C++ 参考题解（solution），供「题解中心」模块展示
 */
(function(){
'use strict';

function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const R = mulberry32(20261025);
const ri = (lo,hi)=>lo+Math.floor(R()*(hi-lo+1));
const pick = a=>a[Math.floor(R()*a.length)];
const gcd2 = (a,b)=>b?gcd2(b,a%b):a;
const isPrime = n=>{ if(n<2)return false; if(n<4)return true; if(n%2===0)return false; for(let i=3;i*i<=n;i+=2) if(n%i===0) return false; return true; };
function powmod(a,b,m){ a=((a%m)+m)%m; let r=1%m; while(b>0){ if(b&1) r=r*a%m; a=a*a%m; b=Math.floor(b/2);} return r; }
const rArr=(n,lo,hi)=>Array.from({length:n},()=>ri(lo,hi));
const rStr=(n,ch)=>Array.from({length:n},()=>pick(ch)).join('');
const LC='abcdefghijklmnopqrstuvwxyz';

/* 12 大分类 */
const CATS=[
 {id:'seq',   name:'顺序结构',     icon:'📥', stage:'s1', desc:'输入、计算、输出——程序的基本功'},
 {id:'branch',name:'分支判断',     icon:'🔀', stage:'s1', desc:'if/else 条件分支的艺术'},
 {id:'loop',  name:'循环基础',     icon:'🔁', stage:'s2', desc:'for/while 批量处理数据'},
 {id:'array', name:'数组操作',     icon:'🗃️', stage:'s2', desc:'数组遍历、统计与查找'},
 {id:'string',name:'字符串处理',   icon:'🔤', stage:'s2', desc:'字符与 string 的经典操作'},
 {id:'math',  name:'数学与数论',   icon:'🔢', stage:'s3', desc:'GCD、素数、约数——竞赛数学基础'},
 {id:'sim',   name:'模拟与枚举',   icon:'🎲', stage:'s3', desc:'按题意模拟、枚举所有可能'},
 {id:'sort',  name:'排序与贪心',   icon:'📊', stage:'s3', desc:'sort 在手，贪心我有'},
 {id:'search',name:'二分与搜索',   icon:'🔍', stage:'s3', desc:'二分查找与 lower_bound'},
 {id:'recur', name:'递归与递推',   icon:'🌀', stage:'s4', desc:'斐波那契、爬楼梯与递推思维'},
 {id:'dp',    name:'动态规划',     icon:'🧮', stage:'s4', desc:'背包、LIS、最大子段和'},
 {id:'graph', name:'图论与数据结构',icon:'🕸️', stage:'s4', desc:'并查集、栈与图的度数'},
];
window.KATA_CATS = CATS;
const CAT_STAGE = {}; CATS.forEach(c=>CAT_STAGE[c.id]=c.stage);
const catName = id => (CATS.find(c=>c.id===id)||{name:id}).name;

const GEN=[]; let seqNo=0;
const STARTER='#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n    // 在这行下面写你的代码\n\n    return 0;\n}';
function P(cat,diff,title,o){
  seqNo++;
  GEN.push(Object.assign({
    id:'p'+String(seqNo).padStart(4,'0'), cat, stage:CAT_STAGE[cat],
    diff, xp:diff*5, title, starter:STARTER
  },o));
}
const mk=(statement,inFmt,outFmt,tests,solution,hint)=>({statement,inFmt,outFmt,samples:[tests[0]],tests,solution,hint});

/* ================= 一、顺序结构（60） ================= */
{ // 1. A+B ×15
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    long long a,b;\n    cin>>a>>b;\n    cout<<a+b<<endl;\n    return 0;\n}';
  for(let v=1;v<=15;v++){
    const ts=[]; for(let i=0;i<4;i++){ const a=ri(-1e9,1e9),b=ri(-1e9,1e9); ts.push({in:a+' '+b,out:String(a+b)}); }
    P('seq',1,'A+B 问题 · 强化'+String(v).padStart(2,'0'),mk(
      '输入两个整数 a 和 b，输出它们的和。OJ 入门口令题，确认你会读输入、写输出。',
      '一行两个整数 a b（-10⁹ ≤ a, b ≤ 10⁹）','一行一个整数：a + b',ts,sol,
      '范围接近 int 上限，开 long long 最稳。'));
  }
}
{ // 2. 矩形面积与周长 ×15
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    long long l,w;\n    cin>>l>>w;\n    cout<<l*w<<" "<<2*(l+w)<<endl;\n    return 0;\n}';
  for(let v=1;v<=15;v++){
    const ts=[]; for(let i=0;i<4;i++){ const l=ri(1,10000),w=ri(1,10000); ts.push({in:l+' '+w,out:(l*w)+' '+2*(l+w)}); }
    P('seq',1,'矩形面积与周长 · 训练'+String(v).padStart(2,'0'),mk(
      '给定矩形的长 l 和宽 w，输出它的面积和周长。',
      '一行两个整数 l w（1 ≤ l, w ≤ 10⁴）','一行两个整数：面积 周长（空格分隔）',ts,sol,
      '面积 = l×w，周长 = 2×(l+w)，先乘后加别搞反顺序。'));
  }
}
{ // 3. 摄氏转华氏 ×10（C 为 5 的倍数，保证整数）
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    long long c;\n    cin>>c;\n    cout<<c*9/5+32<<endl;\n    return 0;\n}';
  for(let v=1;v<=10;v++){
    const ts=[]; for(let i=0;i<4;i++){ const c=ri(-20,20)*5; ts.push({in:String(c),out:String(c*9/5+32)}); }
    P('seq',1,'摄氏转华氏 · 训练'+String(v).padStart(2,'0'),mk(
      '把摄氏温度 C 转换成华氏温度 F，公式：F = C × 9 / 5 + 32。保证 C 是 5 的倍数，结果为整数。',
      '一行一个整数 C（-100 ≤ C ≤ 100，且为 5 的倍数）','一行一个整数：F',ts,sol,
      '整数除法会截断，所以必须先乘 9 再除 5！写成 C/5*9+32 也对，但 C*9/5+32 最顺手。'));
  }
}
{ // 4. 三数平均（向下取整） ×10
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    long long a,b,c;\n    cin>>a>>b>>c;\n    cout<<(a+b+c)/3<<endl;\n    return 0;\n}';
  for(let v=1;v<=10;v++){
    const ts=[]; for(let i=0;i<4;i++){ const a=ri(0,100),b=ri(0,100),c=ri(0,100); ts.push({in:a+' '+b+' '+c,out:String(Math.floor((a+b+c)/3))}); }
    P('seq',1,'三人平均分 · 训练'+String(v).padStart(2,'0'),mk(
      '三位同学的分数分别为 a、b、c，输出他们平均分的整数部分（向下取整）。',
      '一行三个整数 a b c（0 ≤ a,b,c ≤ 100）','一行一个整数：平均分的整数部分',ts,sol,
      'C++ 整数除法自动向下取整（非负数时），直接 (a+b+c)/3 即可。'));
  }
}
{ // 5. 交换输出 ×10
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    long long a,b;\n    cin>>a>>b;\n    cout<<b<<" "<<a<<endl;\n    return 0;\n}';
  for(let v=1;v<=10;v++){
    const ts=[]; for(let i=0;i<4;i++){ const a=ri(-1000,1000),b=ri(-1000,1000); ts.push({in:a+' '+b,out:b+' '+a}); }
    P('seq',1,'交换位置 · 训练'+String(v).padStart(2,'0'),mk(
      '输入两个整数 a 和 b，按 b a 的顺序输出它们。',
      '一行两个整数 a b（|a|,|b| ≤ 1000）','一行两个整数：b a（空格分隔）',ts,sol,
      '最简单的"交换"：不需要真的 swap，输出换个顺序就行。'));
  }
}

/* ================= 二、分支判断（80） ================= */
{ // 6. 奇偶判断 ×15
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    long long n;\n    cin>>n;\n    cout<<(n%2==0?"EVEN":"ODD")<<endl;\n    return 0;\n}';
  for(let v=1;v<=15;v++){
    const ts=[]; for(let i=0;i<4;i++){ const n=ri(-1e9,1e9); ts.push({in:String(n),out:n%2===0?'EVEN':'ODD'}); }
    P('branch',1,'奇偶判断 · 强化'+String(v).padStart(2,'0'),mk(
      '给定一个整数 n，判断奇偶：偶数输出 EVEN，奇数输出 ODD。',
      '一行一个整数 n（|n| ≤ 10⁹）','EVEN 或 ODD',ts,sol,
      '小心负数：C++ 里 -3%2==-1 而不是 1，用 n%2==0 判偶数最安全。'));
  }
}
{ // 7. 三个数最大值 ×15
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    long long a,b,c;\n    cin>>a>>b>>c;\n    cout<<max({a,b,c})<<endl;\n    return 0;\n}';
  for(let v=1;v<=15;v++){
    const ts=[]; for(let i=0;i<4;i++){ const a=ri(-1e6,1e6),b=ri(-1e6,1e6),c=ri(-1e6,1e6); ts.push({in:a+' '+b+' '+c,out:String(Math.max(a,b,c))}); }
    P('branch',1,'三数取最大 · 训练'+String(v).padStart(2,'0'),mk(
      '输入三个整数，输出其中最大的一个。',
      '一行三个整数（|x| ≤ 10⁶）','一行一个整数：最大值',ts,sol,
      'C++11 起 max({a,b,c}) 支持初始化列表；或者两次 max 嵌套。'));
  }
}
{ // 8. 成绩等级 ×15
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int s; cin>>s;\n    char g;\n    if(s>=90) g=\'A\';\n    else if(s>=80) g=\'B\';\n    else if(s>=70) g=\'C\';\n    else if(s>=60) g=\'D\';\n    else g=\'F\';\n    cout<<g<<endl;\n    return 0;\n}';
  for(let v=1;v<=15;v++){
    const G=s=>s>=90?'A':s>=80?'B':s>=70?'C':s>=60?'D':'F';
    const ts=[]; for(let i=0;i<4;i++){ const s=ri(0,100); ts.push({in:String(s),out:G(s)}); }
    P('branch',1,'成绩等级评定 · 训练'+String(v).padStart(2,'0'),mk(
      '给定百分制成绩 s，输出等级：90 及以上 A，80-89 B，70-79 C，60-69 D，60 以下 F。',
      '一行一个整数 s（0 ≤ s ≤ 100）','一个大写字母：A / B / C / D / F',ts,sol,
      'else if 链从高分往低分判断，顺序不能乱。'));
  }
}
{ // 9. 闰年判断 ×15
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int y; cin>>y;\n    bool leap=(y%400==0)||(y%4==0&&y%100!=0);\n    cout<<(leap?"YES":"NO")<<endl;\n    return 0;\n}';
  const leap=y=>(y%400===0)||(y%4===0&&y%100!==0);
  for(let v=1;v<=15;v++){
    const ts=[]; for(let i=0;i<4;i++){ const y=ri(1900,2400); ts.push({in:String(y),out:leap(y)?'YES':'NO'}); }
    P('branch',1,'闰年判断 · 训练'+String(v).padStart(2,'0'),mk(
      '判断年份 y 是否为闰年：能被 400 整除，或能被 4 整除但不能被 100 整除。',
      '一行一个整数 y（1900 ≤ y ≤ 2400）','是闰年输出 YES，否则 NO',ts,sol,
      '四年一闰，百年不闰，四百年再闰。2000 是闰年，1900 不是！'));
  }
}
{ // 10. 三角形合法性 ×10
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    long long a,b,c;\n    cin>>a>>b>>c;\n    bool ok=(a+b>c)&&(a+c>b)&&(b+c>a);\n    cout<<(ok?"YES":"NO")<<endl;\n    return 0;\n}';
  for(let v=1;v<=10;v++){
    const ts=[]; for(let i=0;i<4;i++){ const a=ri(1,100),b=ri(1,100),c=ri(1,100); const ok=a+b>c&&a+c>b&&b+c>a; ts.push({in:a+' '+b+' '+c,out:ok?'YES':'NO'}); }
    P('branch',1,'三角形合法判定 · 训练'+String(v).padStart(2,'0'),mk(
      '给定三条边长，判断能否构成三角形（任意两边之和严格大于第三边）。',
      '一行三个整数 a b c（1 ≤ a,b,c ≤ 100）','能构成输出 YES，否则 NO',ts,sol,
      '三个条件都要判：a+b>c 且 a+c>b 且 b+c>a，等号不算（退化三角形）。'));
  }
}
{ // 11. 符号判断 ×10
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    long long n; cin>>n;\n    if(n>0) cout<<"POS"<<endl;\n    else if(n<0) cout<<"NEG"<<endl;\n    else cout<<"ZERO"<<endl;\n    return 0;\n}';
  for(let v=1;v<=10;v++){
    const ts=[]; for(let i=0;i<4;i++){ const n=ri(-1000,1000); ts.push({in:String(n),out:n>0?'POS':n<0?'NEG':'ZERO'}); }
    P('branch',1,'正负零判断 · 训练'+String(v).padStart(2,'0'),mk(
      '判断整数 n 的符号：正数输出 POS，负数输出 NEG，零输出 ZERO。',
      '一行一个整数 n（|n| ≤ 1000）','POS / NEG / ZERO',ts,sol,
      '别忘了 0 这个第三种情况——三分支结构的入门训练。'));
  }
}

/* ================= 三、循环基础（100） ================= */
{ // 12. 1..n 求和 ×20
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    long long n; cin>>n;\n    cout<<n*(n+1)/2<<endl;\n    return 0;\n}';
  for(let v=1;v<=20;v++){
    const ts=[]; for(let i=0;i<4;i++){ const n=ri(1,1000000); ts.push({in:String(n),out:String(n*(n+1)/2)}); }
    P('loop',2,'等差求和 1 到 n · 训练'+String(v).padStart(2,'0'),mk(
      '计算 1 + 2 + 3 + … + n 的和。',
      '一行一个整数 n（1 ≤ n ≤ 10⁶）','一行一个整数：总和',ts,sol,
      '可以用 for 循环练手，但记住高斯公式 n*(n+1)/2 更快——注意先乘后除且开 long long。'));
  }
}
{ // 13. n! mod 10007 ×20
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n; cin>>n;\n    long long r=1;\n    for(int i=2;i<=n;i++) r=r*i%10007;\n    cout<<r<<endl;\n    return 0;\n}';
  for(let v=1;v<=20;v++){
    const ts=[]; for(let i=0;i<4;i++){ const n=ri(1,2000); let r=1; for(let j=2;j<=n;j++) r=r*j%10007; ts.push({in:String(n),out:String(r)}); }
    P('loop',2,'阶乘取模 · 训练'+String(v).padStart(2,'0'),mk(
      '计算 n! 对 10007 取模的结果。n! 增长极快，必须边乘边取模。',
      '一行一个整数 n（1 ≤ n ≤ 2000）','一行一个整数：n! mod 10007',ts,sol,
      '每一步都 % 10007，long long 完全够用；不取模的话 21! 就溢出 long long 了！'));
  }
}
{ // 14. 数位和 ×20
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    string s; cin>>s;\n    long long sum=0;\n    for(char c:s) sum+=c-\'0\';\n    cout<<sum<<endl;\n    return 0;\n}';
  for(let v=1;v<=20;v++){
    const ts=[]; for(let i=0;i<4;i++){ const len=ri(1,15); const s=String(ri(1,9))+rStr(len-1,'0123456789'); let sum=0; for(const c of s) sum+=+c; ts.push({in:s,out:String(sum)}); }
    P('loop',2,'数位之和 · 训练'+String(v).padStart(2,'0'),mk(
      '给定一个非负整数 n，输出它十进制表示下各位数字之和。',
      '一行一个整数 n（0 ≤ n < 10¹⁵）','一行一个整数：各位数字之和',ts,sol,
      '两种写法：while(n){s+=n%10;n/=10} 或者当字符串读入逐位累加。后者不怕大数。'));
  }
}
{ // 15. 数位数 ×15
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    string s; cin>>s;\n    cout<<s.size()<<endl;\n    return 0;\n}';
  for(let v=1;v<=15;v++){
    const ts=[]; for(let i=0;i<4;i++){ const len=ri(1,15); const s=len===1?String(ri(0,9)):String(ri(1,9))+rStr(len-1,'0123456789'); ts.push({in:s,out:String(s.length)}); }
    P('loop',2,'数位数统计 · 训练'+String(v).padStart(2,'0'),mk(
      '给定一个非负整数 n，输出它的十进制位数。',
      '一行一个整数 n（0 ≤ n < 10¹⁵）','一行一个整数：位数',ts,sol,
      '注意 0 是 1 位数！用字符串读入直接 .size()，或 while 循环不断除 10 计数。'));
  }
}
{ // 16. a^b mod m（小数据） ×15
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    long long a,b,m;\n    cin>>a>>b>>m;\n    long long r=1%m;\n    for(long long i=0;i<b;i++) r=r*a%m;\n    cout<<r<<endl;\n    return 0;\n}';
  for(let v=1;v<=15;v++){
    const ts=[]; for(let i=0;i<4;i++){ const a=ri(2,50),b=ri(0,60),m=pick([97,997,1007,10007]); ts.push({in:a+' '+b+' '+m,out:String(powmod(a,b,m))}); }
    P('loop',2,'幂取模（循环版） · 训练'+String(v).padStart(2,'0'),mk(
      '计算 a 的 b 次方对 m 取模。本题数据较小，用循环逐次相乘取模即可。',
      '一行三个整数 a b m（2 ≤ a ≤ 50，0 ≤ b ≤ 60，m ∈ {97, 997, 1007, 10007}）','一行一个整数：a^b mod m',ts,sol,
      'b=0 时答案是 1%m。每乘一次就取模，防止溢出。学完快速幂记得回来秒杀它。'));
  }
}
{ // 17. 等差数列求和 ×10
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    long long a1,d,n;\n    cin>>a1>>d>>n;\n    cout<<n*a1+d*n*(n-1)/2<<endl;\n    return 0;\n}';
  for(let v=1;v<=10;v++){
    const ts=[]; for(let i=0;i<4;i++){ const a1=ri(-50,50),d=ri(-9,9),n=ri(1,1000); ts.push({in:a1+' '+d+' '+n,out:String(n*a1+d*n*(n-1)/2)}); }
    P('loop',2,'等差数列求和 · 训练'+String(v).padStart(2,'0'),mk(
      '首项 a₁、公差 d、项数 n 的等差数列，求前 n 项和。',
      '一行三个整数 a₁ d n（|a₁| ≤ 50，|d| ≤ 9，1 ≤ n ≤ 1000）','一行一个整数：前 n 项和',ts,sol,
      '公式 S = n·a₁ + d·n·(n-1)/2；也可以 for 循环逐项累加验证。'));
  }
}

/* ================= 四、数组操作（110） ================= */
{ // 18. 数组最大值 ×20
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n; cin>>n;\n    long long x,mx;\n    cin>>mx;\n    for(int i=1;i<n;i++){ cin>>x; mx=max(mx,x); }\n    cout<<mx<<endl;\n    return 0;\n}';
  for(let v=1;v<=20;v++){
    const ts=[]; for(let i=0;i<4;i++){ const n=ri(1,50),a=rArr(n,-1000,1000); ts.push({in:n+'\n'+a.join(' '),out:String(Math.max(...a))}); }
    P('array',2,'数组最大值 · 训练'+String(v).padStart(2,'0'),mk(
      '给出 n 个整数，输出最大值。',
      '第一行 n（1 ≤ n ≤ 50）；第二行 n 个整数（|x| ≤ 1000）','一行一个整数：最大值',ts,sol,
      '最大值初值设为第一个读入的数，别设 0——数据可能全负！'));
  }
}
{ // 19. 逆序输出 ×20
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n; cin>>n;\n    vector<long long> a(n);\n    for(auto&x:a) cin>>x;\n    for(int i=n-1;i>=0;i--) cout<<a[i]<<(i?" ":"");\n    cout<<endl;\n    return 0;\n}';
  for(let v=1;v<=20;v++){
    const ts=[]; for(let i=0;i<4;i++){ const n=ri(1,30),a=rArr(n,-100,100); ts.push({in:n+'\n'+a.join(' '),out:[...a].reverse().join(' ')}); }
    P('array',2,'数组逆序输出 · 训练'+String(v).padStart(2,'0'),mk(
      '读入 n 个整数，按相反顺序输出。',
      '第一行 n（1 ≤ n ≤ 30）；第二行 n 个整数','一行 n 个整数：逆序排列，空格分隔',ts,sol,
      '先全部读进数组，再从后往前输出。行末有没有空格都行，评测已忽略行尾空格。'));
  }
}
{ // 20. 大于平均值的个数 ×20
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n; cin>>n;\n    vector<long long> a(n);\n    long long sum=0;\n    for(auto&x:a){ cin>>x; sum+=x; }\n    int cnt=0;\n    for(auto x:a) if(x*n>sum) cnt++;\n    cout<<cnt<<endl;\n    return 0;\n}';
  for(let v=1;v<=20;v++){
    const ts=[]; for(let i=0;i<4;i++){ const n=ri(2,50),a=rArr(n,0,100); const sum=a.reduce((s,x)=>s+x,0); const cnt=a.filter(x=>x*n>sum).length; ts.push({in:n+'\n'+a.join(' '),out:String(cnt)}); }
    P('array',2,'超过平均分的人数 · 训练'+String(v).padStart(2,'0'),mk(
      'n 个同学的分数，统计严格大于平均分的人数。',
      '第一行 n（2 ≤ n ≤ 50）；第二行 n 个整数（0 ~ 100）','一行一个整数：超过平均分的人数',ts,sol,
      '平均分可能不是整数！别用 double 比大小，交叉相乘：x*n > sum 更精准。'));
  }
}
{ // 21. 偶数个数 ×20
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n; cin>>n;\n    long long x; int cnt=0;\n    for(int i=0;i<n;i++){ cin>>x; if(x%2==0) cnt++; }\n    cout<<cnt<<endl;\n    return 0;\n}';
  for(let v=1;v<=20;v++){
    const ts=[]; for(let i=0;i<4;i++){ const n=ri(1,50),a=rArr(n,-1000,1000); ts.push({in:n+'\n'+a.join(' '),out:String(a.filter(x=>x%2===0).length)}); }
    P('array',2,'偶数计数器 · 训练'+String(v).padStart(2,'0'),mk(
      'n 个整数中，有多少个偶数？（0 也是偶数；负偶数同样算）',
      '第一行 n（1 ≤ n ≤ 50）；第二行 n 个整数','一行一个整数：偶数个数',ts,sol,
      'x%2==0 判偶数对负数也成立（-4%2==0），放心用。'));
  }
}
{ // 22. 首次出现位置 ×15
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n; long long x;\n    cin>>n;\n    vector<long long> a(n);\n    for(auto&v:a) cin>>v;\n    cin>>x;\n    int pos=-1;\n    for(int i=0;i<n;i++) if(a[i]==x){ pos=i+1; break; }\n    cout<<pos<<endl;\n    return 0;\n}';
  for(let v=1;v<=15;v++){
    const ts=[]; for(let i=0;i<4;i++){ const n=ri(5,40),a=rArr(n,1,60); const x=R()<0.7?pick(a):ri(61,99); ts.push({in:n+'\n'+a.join(' ')+'\n'+x,out:String(a.indexOf(x)+1||-1)}); }
    P('array',2,'查找首次出现位置 · 训练'+String(v).padStart(2,'0'),mk(
      '在 n 个整数中查找 x 第一次出现的位置（从 1 开始编号），不存在输出 -1。',
      '第一行 n；第二行 n 个整数；第三行一个整数 x','一行一个整数：位置或 -1',ts,sol,
      '顺序扫描，找到立刻 break。找到的位置是 i+1（题目从 1 编号）。'));
  }
}
{ // 23. 最小值及其位置 ×15
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n; cin>>n;\n    vector<long long> a(n);\n    for(auto&x:a) cin>>x;\n    int p=0;\n    for(int i=1;i<n;i++) if(a[i]<a[p]) p=i;\n    cout<<a[p]<<" "<<p+1<<endl;\n    return 0;\n}';
  for(let v=1;v<=15;v++){
    const ts=[]; for(let i=0;i<4;i++){ const n=ri(2,40),a=rArr(n,-500,500); let p=0; for(let i=1;i<n;i++) if(a[i]<a[p]) p=i; ts.push({in:n+'\n'+a.join(' '),out:a[p]+' '+(p+1)}); }
    P('array',2,'最小值与它的位置 · 训练'+String(v).padStart(2,'0'),mk(
      'n 个整数中，输出最小值和它第一次出现的位置（从 1 编号）。',
      '第一行 n（2 ≤ n ≤ 40）；第二行 n 个整数','一行两个整数：最小值 位置',ts,sol,
      '用 < 严格小于更新，并列时自然保留第一次出现的位置。'));
  }
}

/* ================= 五、字符串处理（90） ================= */
{ // 24. 回文判定 ×20
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    string s; cin>>s;\n    int i=0,j=s.size()-1;\n    bool ok=true;\n    while(i<j){ if(s[i]!=s[j]){ ok=false; break; } i++; j--; }\n    cout<<(ok?"YES":"NO")<<endl;\n    return 0;\n}';
  const isPal=s=>s===[...s].reverse().join('');
  for(let v=1;v<=20;v++){
    const ts=[]; for(let i=0;i<4;i++){ const len=ri(1,15); let s; if(R()<0.5){ const h=rStr(Math.ceil(len/2),LC); s=h+[...h.slice(0,Math.floor(len/2))].reverse().join(''); } else s=rStr(len,LC); ts.push({in:s,out:isPal(s)?'YES':'NO'}); }
    P('string',2,'回文串判定 · 训练'+String(v).padStart(2,'0'),mk(
      '判断一个只含小写字母的字符串是否为回文（正读反读相同）。',
      '一行一个字符串 s（长度 ≤ 15）','是回文输出 YES，否则 NO',ts,sol,
      '双指针 i、j 从两端向中间夹击，任何一处不等即 NO。'));
  }
}
{ // 25. 元音个数 ×20
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    string s; cin>>s;\n    int cnt=0;\n    for(char c:s) if(string("aeiou").find(c)!=string::npos) cnt++;\n    cout<<cnt<<endl;\n    return 0;\n}';
  for(let v=1;v<=20;v++){
    const ts=[]; for(let i=0;i<4;i++){ const s=rStr(ri(1,30),LC); ts.push({in:s,out:String([...s].filter(c=>'aeiou'.includes(c)).length)}); }
    P('string',2,'元音字母计数 · 训练'+String(v).padStart(2,'0'),mk(
      '统计字符串中元音字母（a e i o u）的个数。',
      '一行一个只含小写字母的字符串（长度 ≤ 30）','一行一个整数：元音个数',ts,sol,
      '逐个字符检查是否在 "aeiou" 中。'));
  }
}
{ // 26. 字符串逆序 ×20
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    string s; cin>>s;\n    reverse(s.begin(),s.end());\n    cout<<s<<endl;\n    return 0;\n}';
  for(let v=1;v<=20;v++){
    const ts=[]; for(let i=0;i<4;i++){ const s=rStr(ri(1,25),LC+'0123456789'); ts.push({in:s,out:[...s].reverse().join('')}); }
    P('string',2,'字符串逆序 · 训练'+String(v).padStart(2,'0'),mk(
      '把输入的字符串翻转后输出。',
      '一行一个字符串 s（长度 ≤ 25，含小写字母和数字）','一行一个字符串：s 的逆序',ts,sol,
      'STL 一行搞定：reverse(s.begin(), s.end())；手写双指针交换也一样。'));
  }
}
{ // 27. 转大写 ×15
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    string s; cin>>s;\n    for(char&c:s) if(c>=\'a\'&&c<=\'z\') c=c-\'a\'+\'A\';\n    cout<<s<<endl;\n    return 0;\n}';
  for(let v=1;v<=15;v++){
    const ts=[]; for(let i=0;i<4;i++){ const s=rStr(ri(1,25),LC+'0123456789'); ts.push({in:s,out:s.toUpperCase()}); }
    P('string',2,'全部转大写 · 训练'+String(v).padStart(2,'0'),mk(
      '把字符串中的小写字母全部转为大写，其他字符不变。',
      '一行一个字符串（长度 ≤ 25，含小写字母和数字）','一行一个字符串：转换后的结果',ts,sol,
      'ASCII 技巧：c - \'a\' + \'A\'；或者 c -= 32。数字不受影响。'));
  }
}
{ // 28. 数字字符和 ×15
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    string s; cin>>s;\n    int sum=0;\n    for(char c:s) if(c>=\'0\'&&c<=\'9\') sum+=c-\'0\';\n    cout<<sum<<endl;\n    return 0;\n}';
  for(let v=1;v<=15;v++){
    const ts=[]; for(let i=0;i<4;i++){ const s=rStr(ri(1,30),LC+'0123456789'); let sum=0; for(const c of s) if(c>='0'&&c<='9') sum+=+c; ts.push({in:s,out:String(sum)}); }
    P('string',2,'字符串里的数字和 · 训练'+String(v).padStart(2,'0'),mk(
      '字符串中混有字母和数字，求其中所有数字字符代表的数值之和。',
      '一行一个字符串（长度 ≤ 30）','一行一个整数：数字字符之和',ts,sol,
      '判数字：\'0\' <= c && c <= \'9\'；数值是 c - \'0\'，不是 c 本身！'));
  }
}

/* ================= 六、数学与数论（110） ================= */
{ // 29. GCD ×20
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    long long a,b;\n    cin>>a>>b;\n    cout<<__gcd(a,b)<<endl;\n    return 0;\n}';
  for(let v=1;v<=20;v++){
    const ts=[]; for(let i=0;i<4;i++){ const a=ri(1,1e9),b=ri(1,1e9); ts.push({in:a+' '+b,out:String(gcd2(a,b))}); }
    P('math',3,'最大公约数 GCD · 训练'+String(v).padStart(2,'0'),mk(
      '求两个正整数的最大公约数。',
      '一行两个整数 a b（1 ≤ a,b ≤ 10⁹）','一行一个整数：gcd(a, b)',ts,sol,
      '辗转相除法：while(b){a%=b;swap(a,b)}。C++17 可直接 __gcd(a,b)。'));
  }
}
{ // 30. LCM ×15
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    long long a,b;\n    cin>>a>>b;\n    cout<<a/__gcd(a,b)*b<<endl;\n    return 0;\n}';
  for(let v=1;v<=15;v++){
    const ts=[]; for(let i=0;i<4;i++){ const a=ri(1,1e5),b=ri(1,1e5); ts.push({in:a+' '+b,out:String(a/gcd2(a,b)*b)}); }
    P('math',3,'最小公倍数 LCM · 训练'+String(v).padStart(2,'0'),mk(
      '求两个正整数的最小公倍数。',
      '一行两个整数 a b（1 ≤ a,b ≤ 10⁵）','一行一个整数：lcm(a, b)',ts,sol,
      'lcm = a/gcd*b——先除后乘！a*b/gcd 可能中途溢出。'));
  }
}
{ // 31. 素数判定 ×20
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nbool isPrime(long long n){\n    if(n<2) return false;\n    for(long long i=2;i*i<=n;i++) if(n%i==0) return false;\n    return true;\n}\nint main(){\n    long long n; cin>>n;\n    cout<<(isPrime(n)?"YES":"NO")<<endl;\n    return 0;\n}';
  for(let v=1;v<=20;v++){
    const ts=[]; for(let i=0;i<4;i++){ const n=R()<0.4?pick([2,3,5,7,11,97,991,9973,999983,999999937]):ri(1,1e9); ts.push({in:String(n),out:isPrime(n)?'YES':'NO'}); }
    P('math',3,'素数判定 · 训练'+String(v).padStart(2,'0'),mk(
      '判断一个整数 n 是否为素数。',
      '一行一个整数 n（1 ≤ n ≤ 10⁹）','是素数输出 YES，否则 NO',ts,sol,
      '试除到 √n 即可；循环条件写 i*i<=n 注意 i 开 long long 防溢出。'));
  }
}
{ // 32. 素数计数 ×20
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n; cin>>n;\n    vector<bool> c(n+1,false);\n    int cnt=0;\n    for(int i=2;i<=n;i++){\n        if(!c[i]){ cnt++; for(int j=2*i;j<=n;j+=i) c[j]=true; }\n    }\n    cout<<cnt<<endl;\n    return 0;\n}';
  for(let v=1;v<=20;v++){
    const ts=[]; for(let i=0;i<4;i++){ const n=ri(2,3000); const c=new Array(n+1).fill(false); let cnt=0; for(let j=2;j<=n;j++){ if(!c[j]){ cnt++; for(let m=2*j;m<=n;m+=j) c[m]=true; } } ts.push({in:String(n),out:String(cnt)}); }
    P('math',3,'素数计数器 · 训练'+String(v).padStart(2,'0'),mk(
      '统计 2 到 n 之间（含）有多少个素数。',
      '一行一个整数 n（2 ≤ n ≤ 3000）','一行一个整数：素数个数',ts,sol,
      '埃氏筛：标记每个素数的倍数。n=3000 时逐个判定也行，但筛法是竞赛标配。'));
  }
}
{ // 33. 约数个数 ×15
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    long long n; cin>>n;\n    long long cnt=0;\n    for(long long i=1;i*i<=n;i++) if(n%i==0) cnt+=(i*i==n?1:2);\n    cout<<cnt<<endl;\n    return 0;\n}';
  const dcount=n=>{ let c=0; for(let i=1;i*i<=n;i++) if(n%i===0) c+=(i*i===n?1:2); return c; };
  for(let v=1;v<=15;v++){
    const ts=[]; for(let i=0;i<4;i++){ const n=ri(1,1e6); ts.push({in:String(n),out:String(dcount(n))}); }
    P('math',3,'约数个数 · 训练'+String(v).padStart(2,'0'),mk(
      '求正整数 n 的约数个数。',
      '一行一个整数 n（1 ≤ n ≤ 10⁶）','一行一个整数：约数个数',ts,sol,
      '约数成对出现：枚举到 √n，每找到一个 i 就有 i 和 n/i 两个——完全平方数只算一个！'));
  }
}
{ // 34. 反转数字 ×10
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    long long n,r=0;\n    cin>>n;\n    while(n>0){ r=r*10+n%10; n/=10; }\n    cout<<r<<endl;\n    return 0;\n}';
  for(let v=1;v<=10;v++){
    const ts=[]; for(let i=0;i<4;i++){ const n=ri(0,1e9); let r=0,x=n; while(x>0){ r=r*10+x%10; x=Math.floor(x/10); } ts.push({in:String(n),out:String(r)}); }
    P('math',3,'数字反转 · 训练'+String(v).padStart(2,'0'),mk(
      '把非负整数 n 的十进制位反转后输出（前导零自然丢弃，如 1200 → 21）。',
      '一行一个整数 n（0 ≤ n ≤ 10⁹）','一行一个整数：反转后的数',ts,sol,
      'while(n){r=r*10+n%10;n/=10} 前导零自动消失。n=0 时答案是 0。'));
  }
}
{ // 35. n! 末尾零 ×10
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    long long n; cin>>n;\n    long long z=0;\n    while(n){ n/=5; z+=n; }\n    cout<<z<<endl;\n    return 0;\n}';
  for(let v=1;v<=10;v++){
    const ts=[]; for(let i=0;i<4;i++){ const n=ri(1,1e6); let z=0,x=n; while(x>0){ x=Math.floor(x/5); z+=x; } ts.push({in:String(n),out:String(z)}); }
    P('math',3,'阶乘末尾的零 · 训练'+String(v).padStart(2,'0'),mk(
      'n! 的十进制表示末尾有多少个连续的 0？',
      '一行一个整数 n（1 ≤ n ≤ 10⁶）','一行一个整数：末尾零的个数',ts,sol,
      '末尾零 = 因子 10 的个数 = min(因子2, 因子5) 的个数 = 因子 5 的个数：n/5 + n/25 + n/125 + …'));
  }
}

/* ================= 七、模拟与枚举（80） ================= */
{ // 36. 鸡兔同笼 ×20
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    long long h,l;\n    cin>>h>>l;\n    long long c=(4*h-l)/2;\n    long long r=h-c;\n    cout<<c<<" "<<r<<endl;\n    return 0;\n}';
  for(let v=1;v<=20;v++){
    const ts=[]; for(let i=0;i<4;i++){ let c=ri(0,40),r=ri(0,40); if(c+r===0) c=1; ts.push({in:(c+r)+' '+(2*c+4*r),out:c+' '+r}); }
    P('sim',3,'鸡兔同笼 · 训练'+String(v).padStart(2,'0'),mk(
      '笼子里有鸡和兔共 h 个头、l 条腿，问鸡和兔各多少只？（保证有唯一非负整数解）',
      '一行两个整数 h l（1 ≤ h ≤ 80，腿数保证合法）','一行两个整数：鸡数 兔数',ts,sol,
      '设鸡 c 兔 r：c+r=h，2c+4r=l。解得 c=(4h-l)/2，r=h-c。'));
  }
}
{ // 37. 水仙花数计数 ×15
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int a,b;\n    cin>>a>>b;\n    int cnt=0;\n    for(int i=a;i<=b;i++){\n        int x=i,s=0;\n        while(x){ int d=x%10; s+=d*d*d; x/=10; }\n        if(s==i) cnt++;\n    }\n    cout<<cnt<<endl;\n    return 0;\n}';
  const NAR=[153,370,371,407];
  for(let v=1;v<=15;v++){
    const ts=[]; for(let i=0;i<4;i++){ const a=ri(100,900),b=ri(a,999); ts.push({in:a+' '+b,out:String(NAR.filter(x=>x>=a&&x<=b).length)}); }
    P('sim',3,'水仙花数计数 · 训练'+String(v).padStart(2,'0'),mk(
      '水仙花数：各位数字立方和等于自身的三位数（如 153 = 1³+5³+3³）。统计区间 [a,b] 内有几个。',
      '一行两个整数 a b（100 ≤ a ≤ b ≤ 999）','一行一个整数：区间内水仙花数个数',ts,sol,
      '三位数水仙花只有 4 个：153、370、371、407。逐个枚举验证即可。'));
  }
}
{ // 38. Collatz 步数 ×20
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    long long n; cin>>n;\n    long long steps=0;\n    while(n!=1){ n=(n%2==0)?n/2:3*n+1; steps++; }\n    cout<<steps<<endl;\n    return 0;\n}';
  const colSteps=n=>{ let s=0; while(n!==1){ n=n%2===0?n/2:3*n+1; s++; } return s; };
  for(let v=1;v<=20;v++){
    const ts=[]; for(let i=0;i<4;i++){ const n=ri(1,100000); ts.push({in:String(n),out:String(colSteps(n))}); }
    P('sim',3,'冰雹猜想步数 · 训练'+String(v).padStart(2,'0'),mk(
      'Collatz 猜想（冰雹猜想）：偶数除以 2，奇数乘 3 加 1。输出 n 经过多少步变成 1。',
      '一行一个整数 n（1 ≤ n ≤ 10⁵）','一行一个整数：步数',ts,sol,
      '中间结果会远超 n（10⁵ 以内峰值约 2.9×10⁹），必须开 long long！n=1 时 0 步。'));
  }
}
{ // 39. 成绩统计 ×15
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n; cin>>n;\n    long long x,mx=LLONG_MIN,mn=LLONG_MAX,sum=0;\n    for(int i=0;i<n;i++){ cin>>x; mx=max(mx,x); mn=min(mn,x); sum+=x; }\n    cout<<mx<<" "<<mn<<" "<<sum/n<<endl;\n    return 0;\n}';
  for(let v=1;v<=15;v++){
    const ts=[]; for(let i=0;i<4;i++){ const n=ri(3,50),a=rArr(n,0,100); ts.push({in:n+'\n'+a.join(' '),out:Math.max(...a)+' '+Math.min(...a)+' '+Math.floor(a.reduce((s,x)=>s+x,0)/n)}); }
    P('sim',3,'班级成绩统计 · 训练'+String(v).padStart(2,'0'),mk(
      '给出 n 个同学的成绩，输出最高分、最低分和平均分的整数部分。',
      '第一行 n（3 ≤ n ≤ 50）；第二行 n 个整数（0 ~ 100）','一行三个整数：最高分 最低分 平均分（向下取整）',ts,sol,
      '一遍循环同时维护 max、min、sum。平均分用整数除法向下取整。'));
  }
}
{ // 40. 一年中的第几天 ×10
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int y,m,d;\n    cin>>y>>m>>d;\n    int days[]={0,31,28,31,30,31,30,31,31,30,31,30,31};\n    bool leap=(y%400==0)||(y%4==0&&y%100!=0);\n    int ans=d;\n    for(int i=1;i<m;i++) ans+=days[i];\n    if(leap&&m>2) ans++;\n    cout<<ans<<endl;\n    return 0;\n}';
  const DIM=[0,31,28,31,30,31,30,31,31,30,31,30,31];
  const leap=y=>(y%400===0)||(y%4===0&&y%100!==0);
  for(let v=1;v<=10;v++){
    const ts=[]; for(let i=0;i<4;i++){ const y=ri(2000,2024),m=ri(1,12); const dim=m===2?(leap(y)?29:28):DIM[m]; const d=ri(1,dim); let ans=d; for(let j=1;j<m;j++) ans+=DIM[j]; if(leap(y)&&m>2) ans++; ts.push({in:y+' '+m+' '+d,out:String(ans)}); }
    P('sim',3,'这是一年的第几天 · 训练'+String(v).padStart(2,'0'),mk(
      '给定日期 y 年 m 月 d 日，输出它是这一年的第几天。',
      '一行三个整数 y m d（2000 ≤ y ≤ 2024，日期保证合法）','一行一个整数：第几天',ts,sol,
      '月份天数打表 [31,28,31,...]，闰年且月份大于 2 时加 1。'));
  }
}

/* ================= 八、排序与贪心（70） ================= */
{ // 41. 排序输出 ×20
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n; cin>>n;\n    vector<long long> a(n);\n    for(auto&x:a) cin>>x;\n    sort(a.begin(),a.end());\n    for(int i=0;i<n;i++) cout<<a[i]<<(i+1<n?" ":"");\n    cout<<endl;\n    return 0;\n}';
  for(let v=1;v<=20;v++){
    const ts=[]; for(let i=0;i<4;i++){ const n=ri(2,30),a=rArr(n,-999,999); ts.push({in:n+'\n'+a.join(' '),out:[...a].sort((x,y)=>x-y).join(' ')}); }
    P('sort',3,'从小到大排序 · 训练'+String(v).padStart(2,'0'),mk(
      '把 n 个整数从小到大排序后输出。',
      '第一行 n（2 ≤ n ≤ 30）；第二行 n 个整数','一行 n 个整数：升序排列，空格分隔',ts,sol,
      'sort(a.begin(), a.end()) 一行搞定；想练手可以写冒泡/选择排序。'));
  }
}
{ // 42. 第 k 大 ×20
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n,k;\n    cin>>n>>k;\n    vector<long long> a(n);\n    for(auto&x:a) cin>>x;\n    sort(a.rbegin(),a.rend());\n    cout<<a[k-1]<<endl;\n    return 0;\n}';
  for(let v=1;v<=20;v++){
    const ts=[]; for(let i=0;i<4;i++){ const n=ri(3,30),k=ri(1,n),a=rArr(n,-100,100); const s=[...a].sort((x,y)=>y-x); ts.push({in:n+' '+k+'\n'+a.join(' '),out:String(s[k-1])}); }
    P('sort',3,'第 K 大的数 · 训练'+String(v).padStart(2,'0'),mk(
      'n 个整数中，第 k 大的数是多少？（允许重复，按排序后位置计算）',
      '第一行 n k（1 ≤ k ≤ n ≤ 30）；第二行 n 个整数','一行一个整数：第 k 大的数',ts,sol,
      '从大到小排序后取下标 k-1。sort 降序写法：sort(a.rbegin(), a.rend())。'));
  }
}
{ // 43. 中位数 ×15
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n; cin>>n;\n    vector<long long> a(n);\n    for(auto&x:a) cin>>x;\n    sort(a.begin(),a.end());\n    cout<<a[n/2]<<endl;\n    return 0;\n}';
  for(let v=1;v<=15;v++){
    const ts=[]; for(let i=0;i<4;i++){ const n=ri(1,25)*2-1,a=rArr(n,-500,500); const s=[...a].sort((x,y)=>x-y); ts.push({in:n+'\n'+a.join(' '),out:String(s[Math.floor(n/2)])}); }
    P('sort',3,'中位数 · 训练'+String(v).padStart(2,'0'),mk(
      'n 为奇数，求 n 个整数的中位数（排序后正中间的那个）。',
      '第一行 n（1 ≤ n ≤ 49，奇数）；第二行 n 个整数','一行一个整数：中位数',ts,sol,
      '排序后取下标 n/2（0 开始编号正好是中位）。'));
  }
}
{ // 44. 排队打水（贪心） ×15
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n; cin>>n;\n    vector<long long> t(n);\n    for(auto&x:t) cin>>x;\n    sort(t.begin(),t.end());\n    long long ans=0;\n    for(int i=0;i<n;i++) ans+=t[i]*(n-1-i);\n    cout<<ans<<endl;\n    return 0;\n}';
  for(let v=1;v<=15;v++){
    const ts=[]; for(let i=0;i<4;i++){ const n=ri(2,20),t=rArr(n,1,100); const s=[...t].sort((a,b)=>a-b); let ans=0; for(let i=0;i<n;i++) ans+=s[i]*(n-1-i); ts.push({in:n+'\n'+t.join(' '),out:String(ans)}); }
    P('sort',3,'排队打水（贪心） · 训练'+String(v).padStart(2,'0'),mk(
      'n 个人排队打水，第 i 个人打水需要 t[i] 分钟。如何安排顺序使所有人的等待时间之和最小？输出这个最小总和。（某人的等待时间 = 排在他前面所有人的打水时间之和，不含自己）',
      '第一行 n（2 ≤ n ≤ 20）；第二行 n 个整数 t[i]（1 ~ 100）','一行一个整数：最小等待时间总和',ts,sol,
      '经典贪心：用时短的先打。排序后总等待 = Σ t[i]×(n-1-i)。'));
  }
}

/* ================= 九、二分与搜索（60） ================= */
{ // 45. 第一个 ≥ x ×25
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n; long long x;\n    cin>>n;\n    vector<long long> a(n);\n    for(auto&v:a) cin>>v;\n    cin>>x;\n    int p=lower_bound(a.begin(),a.end(),x)-a.begin();\n    cout<<(p==n?n+1:p+1)<<endl;\n    return 0;\n}';
  for(let v=1;v<=25;v++){
    const ts=[]; for(let i=0;i<4;i++){ const n=ri(5,30),a=rArr(n,1,100).sort((x,y)=>x-y); const x=ri(a[0]-5>0?a[0]-5:1,a[n-1]+5); let p=0; while(p<n&&a[p]<x) p++; ts.push({in:n+'\n'+a.join(' ')+'\n'+x,out:String(p===n?n+1:p+1)}); }
    P('search',3,'二分查找：第一个 ≥ x · 训练'+String(v).padStart(2,'0'),mk(
      '给定升序数组（可能有重复元素）和 x，找第一个大于等于 x 的元素位置（1 开始编号）；不存在输出 n+1。',
      '第一行 n；第二行 n 个升序整数；第三行 x','一行一个整数：位置或 n+1',ts,sol,
      '手写二分或 lower_bound 均可。注意答案是下标 +1。'));
  }
}
{ // 46. 整数平方根 ×20
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    long long n; cin>>n;\n    long long r=sqrt((long double)n);\n    while((r+1)*(r+1)<=n) r++;\n    while(r*r>n) r--;\n    cout<<r<<endl;\n    return 0;\n}';
  const isqrt=n=>{ let r=Math.floor(Math.sqrt(n)); while((r+1)*(r+1)<=n) r++; while(r*r>n) r--; return r; };
  for(let v=1;v<=20;v++){
    const ts=[]; for(let i=0;i<4;i++){ const n=ri(0,1e14); ts.push({in:String(n),out:String(isqrt(n))}); }
    P('search',3,'整数平方根 · 训练'+String(v).padStart(2,'0'),mk(
      '求 ⌊√n⌋，即最大的满足 r² ≤ n 的非负整数 r。',
      '一行一个整数 n（0 ≤ n ≤ 10¹⁴）','一行一个整数：⌊√n⌋',ts,sol,
      'sqrt 浮点有误差，求出后要用 while 微调；也可以直接二分答案。n=0 时答案是 0。'));
  }
}
{ // 47. 统计出现次数 ×15
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n; long long x;\n    cin>>n;\n    vector<long long> a(n);\n    for(auto&v:a) cin>>v;\n    cin>>x;\n    cout<<(upper_bound(a.begin(),a.end(),x)-lower_bound(a.begin(),a.end(),x))<<endl;\n    return 0;\n}';
  for(let v=1;v<=15;v++){
    const ts=[]; for(let i=0;i<4;i++){ const n=ri(5,30),a=rArr(n,1,40).sort((x,y)=>x-y); const x=R()<0.7?pick(a):ri(41,50); ts.push({in:n+'\n'+a.join(' ')+'\n'+x,out:String(a.filter(v2=>v2===x).length)}); }
    P('search',3,'统计 x 出现次数 · 训练'+String(v).padStart(2,'0'),mk(
      '升序数组中，x 出现了多少次？',
      '第一行 n；第二行 n 个升序整数；第三行 x','一行一个整数：出现次数（可为 0）',ts,sol,
      'upper_bound - lower_bound 就是次数；顺序扫描也行，但想想为什么有序时二分更快。'));
  }
}

/* ================= 十、递归与递推（60） ================= */
{ // 48. 斐波那契 mod 10007 ×25
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n; cin>>n;\n    long long a=1,b=1;\n    if(n<=2){ cout<<1<<endl; return 0; }\n    for(int i=3;i<=n;i++){ long long c=(a+b)%10007; a=b; b=c; }\n    cout<<b<<endl;\n    return 0;\n}';
  const fib=n=>{ let a=1,b=1; if(n<=2) return 1; for(let i=3;i<=n;i++){ const c=(a+b)%10007; a=b; b=c; } return b; };
  for(let v=1;v<=25;v++){
    const ts=[]; for(let i=0;i<4;i++){ const n=ri(1,5000); ts.push({in:String(n),out:String(fib(n))}); }
    P('recur',4,'斐波那契第 n 项 · 训练'+String(v).padStart(2,'0'),mk(
      '斐波那契数列 f(1)=f(2)=1，f(n)=f(n-1)+f(n-2)。输出 f(n) mod 10007。',
      '一行一个整数 n（1 ≤ n ≤ 5000）','一行一个整数：f(n) mod 10007',ts,sol,
      '递推滚动数组，边加边取模。递归写法会指数爆炸，千万别！'));
  }
}
{ // 49. 爬楼梯 ×20
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n; cin>>n;\n    long long a=1,b=1;\n    for(int i=2;i<=n;i++){ long long c=(a+b)%1000003; a=b; b=c; }\n    cout<<(n==1?1:b)%1000003<<endl;\n    return 0;\n}';
  const climb=n=>{ let a=1,b=1; if(n===1) return 1; for(let i=2;i<=n;i++){ const c=(a+b)%1000003; a=b; b=c; } return b; };
  for(let v=1;v<=20;v++){
    const ts=[]; for(let i=0;i<4;i++){ const n=ri(1,5000); ts.push({in:String(n),out:String(climb(n))}); }
    P('recur',4,'爬楼梯方案数 · 训练'+String(v).padStart(2,'0'),mk(
      'n 级台阶，每次可以爬 1 级或 2 级，有多少种不同的爬法？答案对 1000003 取模。',
      '一行一个整数 n（1 ≤ n ≤ 5000）','一行一个整数：方案数 mod 1000003',ts,sol,
      'f(n)=f(n-1)+f(n-2)，初始 f(1)=1，f(2)=2。本质就是移位斐波那契。'));
  }
}
{ // 50. 汉诺塔步数 ×15
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nlong long qpow(long long a,long long b,long long m){\n    long long r=1%m; a%=m;\n    while(b){ if(b&1) r=r*a%m; a=a*a%m; b>>=1; }\n    return r;\n}\nint main(){\n    long long n; cin>>n;\n    cout<<(qpow(2,n,10007)-1+10007)%10007<<endl;\n    return 0;\n}';
  for(let v=1;v<=15;v++){
    const ts=[]; for(let i=0;i<4;i++){ const n=ri(1,100000); ts.push({in:String(n),out:String((powmod(2,n,10007)-1+10007)%10007)}); }
    P('recur',4,'汉诺塔最少步数 · 训练'+String(v).padStart(2,'0'),mk(
      'n 个盘子的汉诺塔，最少需要移动 (2ⁿ - 1) 步。输出步数对 10007 取模的结果。',
      '一行一个整数 n（1 ≤ n ≤ 10⁵）','一行一个整数：(2ⁿ - 1) mod 10007',ts,sol,
      'n 高达 10⁵，必须快速幂！递推式 h(n)=2·h(n-1)+1 展开即 2ⁿ-1。'));
  }
}

/* ================= 十一、动态规划（88） ================= */
{ // 51. 01 背包 ×25
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n,V;\n    cin>>n>>V;\n    vector<int> f(V+1,0);\n    for(int i=0;i<n;i++){\n        int w,v;\n        cin>>w>>v;\n        for(int j=V;j>=w;j--) f[j]=max(f[j],f[j-w]+v);\n    }\n    cout<<f[V]<<endl;\n    return 0;\n}';
  const knap=(V,items)=>{ const f=new Array(V+1).fill(0); for(const [w,v] of items) for(let j=V;j>=w;j--) f[j]=Math.max(f[j],f[j-w]+v); return f[V]; };
  for(let v=1;v<=25;v++){
    const ts=[]; for(let i=0;i<4;i++){ const n=ri(2,12),V=ri(5,40); const items=rArr(n,1,15).map(w=>[w,ri(1,30)]); ts.push({in:n+' '+V+'\n'+items.map(x=>x.join(' ')).join('\n'),out:String(knap(V,items))}); }
    P('dp',4,'01 背包 · 训练'+String(v).padStart(2,'0'),mk(
      '背包容量 V，n 件物品各有重量 w 和价值 v，每件最多选一次。求能装下的最大总价值。',
      '第一行 n V（2 ≤ n ≤ 12，5 ≤ V ≤ 40）；接下来 n 行每行 w v','一行一个整数：最大总价值',ts,sol,
      '一维 DP 核心：for 物品 → for j 从 V 倒序到 w：f[j]=max(f[j],f[j-w]+v)。倒序防重复选取！'));
  }
}
{ // 52. LIS ×23
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n; cin>>n;\n    vector<int> a(n);\n    for(auto&x:a) cin>>x;\n    vector<int> f(n,1);\n    int ans=1;\n    for(int i=0;i<n;i++){\n        for(int j=0;j<i;j++) if(a[j]<a[i]) f[i]=max(f[i],f[j]+1);\n        ans=max(ans,f[i]);\n    }\n    cout<<ans<<endl;\n    return 0;\n}';
  const lis=a=>{ const n=a.length,f=new Array(n).fill(1); let ans=1; for(let i=0;i<n;i++){ for(let j=0;j<i;j++) if(a[j]<a[i]) f[i]=Math.max(f[i],f[j]+1); ans=Math.max(ans,f[i]); } return ans; };
  for(let v=1;v<=23;v++){
    const ts=[]; for(let i=0;i<4;i++){ const n=ri(3,40),a=rArr(n,1,200); ts.push({in:n+'\n'+a.join(' '),out:String(lis(a))}); }
    P('dp',4,'最长上升子序列 · 训练'+String(v).padStart(2,'0'),mk(
      '求序列的最长严格上升子序列（LIS）的长度。子序列不要求连续，但要保持原顺序。',
      '第一行 n（3 ≤ n ≤ 40）；第二行 n 个整数（1 ~ 200）','一行一个整数：LIS 长度',ts,sol,
      'O(n²) DP：f[i] = 以 i 结尾的最长上升长度，枚举前一个 j < i 且 a[j] < a[i]。'));
  }
}
{ // 53. 最大子段和 ×25
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n; cin>>n;\n    long long x,cur,ans;\n    cin>>x; cur=ans=x;\n    for(int i=1;i<n;i++){\n        cin>>x;\n        cur=max(x,cur+x);\n        ans=max(ans,cur);\n    }\n    cout<<ans<<endl;\n    return 0;\n}';
  const kadane=a=>{ let cur=a[0],ans=a[0]; for(let i=1;i<a.length;i++){ cur=Math.max(a[i],cur+a[i]); ans=Math.max(ans,cur); } return ans; };
  for(let v=1;v<=25;v++){
    const ts=[]; for(let i=0;i<4;i++){ const n=ri(2,60),a=rArr(n,-50,50); ts.push({in:n+'\n'+a.join(' '),out:String(kadane(a))}); }
    P('dp',4,'最大子段和 · 训练'+String(v).padStart(2,'0'),mk(
      '求序列中连续子段和的最大值（子段至少含一个元素，允许全负时取最大的单个元素）。',
      '第一行 n（2 ≤ n ≤ 60）；第二行 n 个整数（-50 ~ 50）','一行一个整数：最大子段和',ts,sol,
      'Kadane：cur = max(x, cur+x)，ans 随时更新。初值设为第一个元素（全负数据会坑到设 0 的人）。'));
  }
}
{ // 54. 网格路径数 ×15
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int m,n;\n    cin>>m>>n;\n    vector<vector<long long>> f(m+1,vector<long long>(n+1,0));\n    for(int i=1;i<=m;i++) f[i][1]=1;\n    for(int j=1;j<=n;j++) f[1][j]=1;\n    for(int i=2;i<=m;i++) for(int j=2;j<=n;j++) f[i][j]=f[i-1][j]+f[i][j-1];\n    cout<<f[m][n]<<endl;\n    return 0;\n}';
  const paths=(m,n)=>{ const f=Array.from({length:m+1},()=>new Array(n+1).fill(0)); for(let i=1;i<=m;i++) f[i][1]=1; for(let j=1;j<=n;j++) f[1][j]=1; for(let i=2;i<=m;i++) for(let j=2;j<=n;j++) f[i][j]=f[i-1][j]+f[i][j-1]; return f[m][n]; };
  for(let v=1;v<=15;v++){
    const ts=[]; for(let i=0;i<4;i++){ const m=ri(1,12),n=ri(1,12); ts.push({in:m+' '+n,out:String(paths(m,n))}); }
    P('dp',4,'网格路径计数 · 训练'+String(v).padStart(2,'0'),mk(
      'm 行 n 列网格，从左上角走到右下角，每步只能向右或向下，有多少种走法？',
      '一行两个整数 m n（1 ≤ m,n ≤ 12）','一行一个整数：走法总数',ts,sol,
      'DP：f[i][j]=f[i-1][j]+f[i][j-1]，边界全为 1。也可以组合数 C(m+n-2, m-1) 验证。'));
  }
}

/* ================= 十二、图论与数据结构（80） ================= */
{ // 55. 并查集连通块 ×25
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nvector<int> fa;\nint find(int x){ return fa[x]==x?x:fa[x]=find(fa[x]); }\nint main(){\n    int n,m;\n    cin>>n>>m;\n    fa.resize(n+1);\n    iota(fa.begin(),fa.end(),0);\n    int cnt=n;\n    for(int i=0;i<m;i++){\n        int u,v;\n        cin>>u>>v;\n        int x=find(u),y=find(v);\n        if(x!=y){ fa[x]=y; cnt--; }\n    }\n    cout<<cnt<<endl;\n    return 0;\n}';
  const comps=(n,edges)=>{ const fa=Array.from({length:n+1},(_,i)=>i); const find=x=>fa[x]===x?x:fa[x]=find(fa[x]); let cnt=n; for(const [u,v] of edges){ const x=find(u),y=find(v); if(x!==y){ fa[x]=y; cnt--; } } return cnt; };
  for(let v=1;v<=25;v++){
    const ts=[]; for(let i=0;i<4;i++){ const n=ri(2,50),m=ri(0,Math.min(15,n*(n-1)/2)); const seen=new Set(),edges=[]; while(edges.length<m){ const u=ri(1,n),w=ri(1,n); if(u!==w){ const key=Math.min(u,w)+'_'+Math.max(u,w); if(!seen.has(key)){ seen.add(key); edges.push([u,w]); } } } ts.push({in:n+' '+edges.length+(edges.length?'\n'+edges.map(e=>e.join(' ')).join('\n'):''),out:String(comps(n,edges))}); }
    P('graph',4,'连通块计数（并查集） · 训练'+String(v).padStart(2,'0'),mk(
      'n 个节点，m 次合并操作，每次合并两个节点所在集合。求最终连通块数量。',
      '第一行 n m（2 ≤ n ≤ 50，0 ≤ m ≤ 15）；接下来 m 行每行 u v','一行一个整数：连通块数量',ts,sol,
      '并查集：初始 cnt=n，find(u)≠find(v) 就合并且 cnt--。别忘路径压缩。'));
  }
}
{ // 56. 括号匹配 ×30
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    string s; cin>>s;\n    stack<char> st;\n    bool ok=true;\n    for(char c:s){\n        if(c==\'(\'||c==\'[\'||c==\'{\') st.push(c);\n        else{\n            if(st.empty()){ ok=false; break; }\n            char t=st.top(); st.pop();\n            if((c==\')\'&&t!=\'(\')||(c==\']\'&&t!=\'[\')||(c==\'}\'&&t!=\'{\')){ ok=false; break; }\n        }\n    }\n    if(!st.empty()) ok=false;\n    cout<<(ok?"YES":"NO")<<endl;\n    return 0;\n}';
  const match=s=>{ const st=[]; const mp={')':'(',']':'[','}':'{'}; for(const c of s){ if('([{'.includes(c)) st.push(c); else{ if(!st.length||st[st.length-1]!==mp[c]) return false; st.pop(); } } return st.length===0; };
  const balanced=n=>{ let s=''; for(let i=0;i<n;i++){ const p=pick(['()','[]','{}']); const pos=ri(0,s.length); s=s.slice(0,pos)+p+s.slice(pos); } return s; };
  for(let v=1;v<=30;v++){
    const ts=[]; for(let i=0;i<4;i++){ let s; if(R()<0.5) s=balanced(ri(1,12)); else s=rStr(ri(2,24),'()[]{}'); ts.push({in:s,out:match(s)?'YES':'NO'}); }
    P('graph',4,'括号匹配（栈） · 训练'+String(v).padStart(2,'0'),mk(
      '判断只含 ()[]{} 的字符串括号是否完全匹配（正确嵌套）。',
      '一行一个括号字符串（长度 ≤ 24）','匹配输出 YES，否则 NO',ts,sol,
      '栈经典应用：左括号入栈，右括号检查栈顶是否配对，最后栈必须为空。'));
  }
}
{ // 57. 度数最大节点 ×25
  const sol='#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n,m;\n    cin>>n>>m;\n    vector<int> deg(n+1,0);\n    for(int i=0;i<m;i++){\n        int u,v;\n        cin>>u>>v;\n        deg[u]++; deg[v]++;\n    }\n    int p=1;\n    for(int i=2;i<=n;i++) if(deg[i]>deg[p]) p=i;\n    cout<<p<<" "<<deg[p]<<endl;\n    return 0;\n}';
  for(let v=1;v<=25;v++){
    const ts=[]; for(let i=0;i<4;i++){ const n=ri(2,30),m=ri(1,Math.min(60,n*(n-1)/2)); const seen=new Set(),edges=[]; while(edges.length<m){ const u=ri(1,n),w=ri(1,n); if(u!==w){ const key=Math.min(u,w)+'_'+Math.max(u,w); if(!seen.has(key)){ seen.add(key); edges.push([u,w]); } } } const deg=new Array(n+1).fill(0); edges.forEach(([u,w])=>{deg[u]++;deg[w]++;}); let p=1; for(let i=2;i<=n;i++) if(deg[i]>deg[p]) p=i; ts.push({in:n+' '+edges.length+'\n'+edges.map(e=>e.join(' ')).join('\n'),out:p+' '+deg[p]}); }
    P('graph',4,'度数最大的节点 · 训练'+String(v).padStart(2,'0'),mk(
      'n 个节点 m 条边的无向图（无重边无自环），输出度数最大的节点编号（并列取编号最小者）及其度数。',
      '第一行 n m；接下来 m 行每行 u v（1 ≤ u,v ≤ n）','一行两个整数：节点编号 度数',ts,sol,
      '度数 = 与该节点相连的边数。用 > 严格大于更新答案，并列时自然保留小编号。'));
  }
}

/* ================= 12 道手工精品题：补充分类与标准题解 ================= */
const HAND_CAT={k01:'seq',k02:'branch',k03:'array',k04:'string',k05:'sort',k06:'recur',k07:'math',k08:'dp',k09:'search',k10:'dp',k11:'math',k12:'graph'};
const HAND_SOL={
k01:'#include <iostream>\nusing namespace std;\nint main(){\n    long long a,b;\n    cin>>a>>b;\n    cout<<a+b<<endl;\n    return 0;\n}',
k02:'#include <iostream>\nusing namespace std;\nint main(){\n    long long n;\n    cin>>n;\n    cout<<(n%2==0?"EVEN":"ODD")<<endl;\n    return 0;\n}',
k03:'#include <iostream>\nusing namespace std;\nint main(){\n    int n;\n    cin>>n;\n    long long x,mx;\n    cin>>mx;\n    for(int i=1;i<n;i++){ cin>>x; mx=max(mx,x); }\n    cout<<mx<<endl;\n    return 0;\n}',
k04:'#include <iostream>\n#include <string>\nusing namespace std;\nint main(){\n    string s;\n    cin>>s;\n    int i=0,j=s.size()-1;\n    while(i<j){ if(s[i]!=s[j]){ cout<<"NO"<<endl; return 0; } i++; j--; }\n    cout<<"YES"<<endl;\n    return 0;\n}',
k05:'#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n,k;\n    cin>>n>>k;\n    vector<int> a(n);\n    for(auto&x:a) cin>>x;\n    sort(a.begin(),a.end());\n    cout<<a[k-1]<<endl;\n    return 0;\n}',
k06:'#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n; cin>>n;\n    long long a=1,b=1;\n    if(n<=2){ cout<<1<<endl; return 0; }\n    for(int i=3;i<=n;i++){ long long c=(a+b)%10007; a=b; b=c; }\n    cout<<b<<endl;\n    return 0;\n}',
k07:'#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n; cin>>n;\n    vector<bool> c(n+1,false);\n    int cnt=0;\n    for(int i=2;i<=n;i++) if(!c[i]){ cnt++; for(int j=2*i;j<=n;j+=i) c[j]=true; }\n    cout<<cnt<<endl;\n    return 0;\n}',
k08:'#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n; cin>>n;\n    long long x,cur,ans;\n    cin>>x; cur=ans=x;\n    for(int i=1;i<n;i++){ cin>>x; cur=max(x,cur+x); ans=max(ans,cur); }\n    cout<<ans<<endl;\n    return 0;\n}',
k09:'#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n; long long x;\n    cin>>n;\n    vector<long long> a(n);\n    for(auto&v:a) cin>>v;\n    cin>>x;\n    int p=lower_bound(a.begin(),a.end(),x)-a.begin();\n    cout<<(p==n?n+1:p+1)<<endl;\n    return 0;\n}',
k10:'#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n,V;\n    cin>>n>>V;\n    vector<int> f(V+1,0);\n    for(int i=0;i<n;i++){\n        int w,v;\n        cin>>w>>v;\n        for(int j=V;j>=w;j--) f[j]=max(f[j],f[j-w]+v);\n    }\n    cout<<f[V]<<endl;\n    return 0;\n}',
k11:'#include <iostream>\nusing namespace std;\nint main(){\n    long long a,b,p;\n    cin>>a>>b>>p;\n    long long r=1%p; a%=p;\n    while(b){ if(b&1) r=r*a%p; a=a*a%p; b>>=1; }\n    cout<<r<<endl;\n    return 0;\n}',
k12:'#include <bits/stdc++.h>\nusing namespace std;\nvector<int> fa;\nint find(int x){ return fa[x]==x?x:fa[x]=find(fa[x]); }\nint main(){\n    int n,m;\n    cin>>n>>m;\n    fa.resize(n+1);\n    iota(fa.begin(),fa.end(),0);\n    int cnt=n;\n    for(int i=0;i<m;i++){\n        int u,v;\n        cin>>u>>v;\n        int x=find(u),y=find(v);\n        if(x!=y){ fa[x]=y; cnt--; }\n    }\n    cout<<cnt<<endl;\n    return 0;\n}'
};
if (typeof KATAS!=='undefined') KATAS.forEach(k=>{ k.cat=HAND_CAT[k.id]||'math'; if(!k.solution) k.solution=HAND_SOL[k.id]||''; });

window.GEN_KATAS=GEN;
})();

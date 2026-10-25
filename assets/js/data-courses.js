/* ========== 伦博教育C++编程 · 课程数据 ========== */
/* 4 大阶段 × 12 章节：零基础入门 → 语法筑基 → CSP-J 算法 → CSP-S 进阶 */

const STAGES = [
  { id:'s1', name:'第一阶段 · 零基础入门', color:'#00e676',
    desc:'认识编程、装好环境、写出人生第一个程序。目标：能独立读写顺序、分支、循环结构的小程序。',
    tags:['开发环境','输入输出','变量','分支循环'] },
  { id:'s2', name:'第二阶段 · 语法筑基', color:'#00e5ff',
    desc:'数组、字符串、函数、结构体、STL 一网打尽。目标：语法无死角，200 行内程序信手拈来。',
    tags:['数组字符串','函数递归','结构体','STL'] },
  { id:'s3', name:'第三阶段 · CSP-J 算法', color:'#7c4dff',
    desc:'枚举、模拟、排序、二分、贪心、搜索、递推与入门 DP。目标：CSP-J 一等奖水平。',
    tags:['枚举模拟','二分贪心','DFS/BFS','线性DP','背包'] },
  { id:'s4', name:'第四阶段 · CSP-S 进阶', color:'#ffd54f',
    desc:'图论、高级数据结构、进阶 DP、数论与组合数学。目标：CSP-S 高分、冲击省选。',
    tags:['图论','最短路','并查集','树状数组','进阶DP','数论'] },
];

const COURSES = [
/* ================= 第一阶段 ================= */
{
  id:'c01', stage:'s1', icon:'🚀', title:'第1章 · 你好，C++ 世界',
  desc:'什么是编程、安装 Dev-C++ / 使用在线编译器、写出第一个 Hello World。',
  minutes:20,
  content:`
<h3>1.1 编程是什么？</h3>
<p>编程就是用计算机听得懂的语言，告诉它「先做什么、再做什么」。C++ 是信息学竞赛（CSP-J/S、NOIP、NOI）<b>唯一指定语言</b>——速度快、功能强，学会它，竞赛的大门就打开了。</p>
<h3>1.2 准备开发环境（三选一）</h3>
<ul>
<li><b>在线编译器</b>（最快上手）：打开浏览器搜索 "OnlineGDB" 或 "洛谷 IDE"，无需安装。</li>
<li><b>Dev-C++</b>：轻量经典，适合 Windows 新手。</li>
<li><b>VS Code + g++</b>：专业选手标配，竞赛集训常用。</li>
</ul>
<h3>1.3 第一个程序</h3>
<pre>#include &lt;iostream&gt;
using namespace std;

int main() {
    cout &lt;&lt; "Hello, 伦博教育!" &lt;&lt; endl;
    return 0;
}</pre>
<ul>
<li><code class="inl">#include &lt;iostream&gt;</code>：引入输入输出工具箱。</li>
<li><code class="inl">int main()</code>：程序的入口，一切从这里开始。</li>
<li><code class="inl">cout &lt;&lt;</code>：把内容「倒」到屏幕上。</li>
<li>每条语句以 <code class="inl">;</code> 结尾，就像中文的句号。</li>
</ul>
<div class="warn">⚠️ 新手三大经典错误：漏写分号、中文符号（；（）""）混入代码、main 拼成 mian。编译报错先查这三样！</div>
<h3>1.4 本章要点</h3>
<ul><li>程序 = 精确指令序列；编译器 = 翻译官。</li><li>会写、会编译、会运行 Hello World。</li><li>学会看报错信息的第一行。</li></ul>`
},
{
  id:'c02', stage:'s1', icon:'📦', title:'第2章 · 变量与数据类型',
  desc:'变量是装数据的盒子：int / double / char / bool / long long，还有输入 cin 的用法。',
  minutes:30,
  content:`
<h3>2.1 变量：给数据一个家</h3>
<pre>int age = 12;        // 整数
double pi = 3.14159; // 小数（浮点数）
char grade = 'A';    // 单个字符
bool passed = true;  // 真 / 假</pre>
<h3>2.2 竞赛最常用的类型</h3>
<table>
<tr><th>类型</th><th>范围（约）</th><th>用途</th></tr>
<tr><td>int</td><td>±21 亿</td><td>计数、下标</td></tr>
<tr><td>long long</td><td>±9×10¹⁸</td><td>大数、防溢出</td></tr>
<tr><td>double</td><td>15~16 位有效数字</td><td>小数计算</td></tr>
<tr><td>char / string</td><td>—</td><td>字符 / 文本</td></tr>
</table>
<div class="warn">⚠️ <b>十年 OI 一场空，不开 long long 见祖宗</b>：两个 int 相乘结果可能超过 21 亿，溢出后答案错误且很难查！涉及乘法、累加大数时一律用 long long。</div>
<h3>2.3 输入：cin</h3>
<pre>int a, b;
cin &gt;&gt; a &gt;&gt; b;          // 输入两个整数
cout &lt;&lt; a + b &lt;&lt; endl; // 输出它们的和</pre>
<p>注意方向：<code class="inl">cout &lt;&lt;</code> 是输出（箭头朝外），<code class="inl">cin &gt;&gt;</code> 是输入（箭头朝里）。</p>
<h3>2.4 赋值不是等于</h3>
<p><code class="inl">a = a + 1;</code> 的含义：把 a 原来的值加 1 后再装回 a。<code class="inl">=</code> 是「装进盒子」，判断相等要用 <code class="inl">==</code>。</p>
<div class="tip">💡 竞赛加速技巧：在 main 开头加 <code class="inl">ios::sync_with_stdio(false); cin.tie(nullptr);</code>，cin/cout 速度立刻起飞，大数据输入不超时。</div>`
},
{
  id:'c03', stage:'s1', icon:'🔀', title:'第3章 · 分支与循环',
  desc:'if/else 让程序会做选择，for/while 让程序不怕重复——计算机最擅长的两件事。',
  minutes:40,
  content:`
<h3>3.1 if 分支：程序的选择题</h3>
<pre>int score;
cin &gt;&gt; score;
if (score &gt;= 90)      cout &lt;&lt; "优秀";
else if (score &gt;= 60) cout &lt;&lt; "及格";
else                  cout &lt;&lt; "加油";</pre>
<h3>3.2 for 循环：数清楚再动手</h3>
<pre>// 计算 1+2+...+100
int sum = 0;
for (int i = 1; i &lt;= 100; i++) {
    sum += i;
}
cout &lt;&lt; sum;  // 5050</pre>
<p>for 三要素：<b>起点</b>（i=1）、<b>终点条件</b>（i&lt;=100）、<b>步进</b>（i++）。</p>
<h3>3.3 while 循环：条件不明时用</h3>
<pre>// 不断读入直到 0 为止（竞赛常见输入格式）
int x;
while (cin &gt;&gt; x &amp;&amp; x != 0) {
    cout &lt;&lt; x * 2 &lt;&lt; "\\n";
}</pre>
<h3>3.4 双重循环与打印图形</h3>
<pre>// 打印 n 行直角三角形
for (int i = 1; i &lt;= n; i++) {
    for (int j = 1; j &lt;= i; j++) cout &lt;&lt; '*';
    cout &lt;&lt; "\\n";
}</pre>
<div class="tip">💡 调试神器：在循环里加一句 <code class="inl">cout &lt;&lt; "i=" &lt;&lt; i &lt;&lt; endl;</code>，程序跑到哪一步一目了然。</div>
<div class="warn">⚠️ 死循环 = 程序卡死。检查：循环变量有没有正确更新？条件是不是永远为真？</div>
<h3>3.5 本章通关标准</h3>
<ul><li>能写：求和、阶乘、判断素数、打印九九乘法表。</li><li>理解 break（跳出循环）与 continue（跳过本次）。</li></ul>`
},
/* ================= 第二阶段 ================= */
{
  id:'c04', stage:'s2', icon:'🧮', title:'第4章 · 数组与字符串',
  desc:'数组是批量存储的利器，string 让文本处理变简单，下标从 0 开始是铁律。',
  minutes:45,
  content:`
<h3>4.1 数组：一排编号的盒子</h3>
<pre>int a[105];           // 定义能装 105 个 int 的数组
a[0] = 10; a[1] = 20; // 下标从 0 开始！
int n; cin &gt;&gt; n;
for (int i = 0; i &lt; n; i++) cin &gt;&gt; a[i];  // 读入 n 个数</pre>
<div class="warn">⚠️ 数组越界是竞赛头号隐形杀手：<code class="inl">int a[100]</code> 的合法下标是 <b>0~99</b>。开数组习惯多开 5~10 个位置（如 a[105]）。</div>
<h3>4.2 常用数组操作模板</h3>
<pre>// 找最大值
int mx = a[0];
for (int i = 1; i &lt; n; i++) mx = max(mx, a[i]);

// 逆序输出
for (int i = n - 1; i &gt;= 0; i--) cout &lt;&lt; a[i] &lt;&lt; ' ';</pre>
<h3>4.3 string：会魔法的字符串</h3>
<pre>string s;
cin &gt;&gt; s;              // 读入一个单词
getline(cin, s);       // 读入一整行（含空格）
cout &lt;&lt; s.size();      // 长度
s += "abc";            // 拼接
sort(s.begin(), s.end()); // 字符排序</pre>
<h3>4.4 二维数组：地图与棋盘</h3>
<pre>int g[105][105];       // 105×105 的网格
for (int i = 1; i &lt;= n; i++)
    for (int j = 1; j &lt;= m; j++)
        cin &gt;&gt; g[i][j];</pre>
<div class="tip">💡 二维数组常用 1 开始的下标，四周一圈天然是 0，做「迷宫/地图」题时省去边界判断，这是竞赛老手习惯。</div>`
},
{
  id:'c05', stage:'s2', icon:'🧩', title:'第5章 · 函数与递归',
  desc:'把重复代码装进函数；递归是函数自己调用自己——分治思想的大门。',
  minutes:45,
  content:`
<h3>5.1 函数：代码的积木</h3>
<pre>int gcd(int a, int b) {   // 最大公约数（辗转相除）
    return b == 0 ? a : gcd(b, a % b);
}
int main() {
    cout &lt;&lt; gcd(12, 18);  // 6
}</pre>
<h3>5.2 参数传递：值传递 vs 引用</h3>
<pre>void f1(int x)  { x = 100; }   // 改不动外面的变量
void f2(int &amp;x) { x = 100; }   // 加 &amp; 引用，直接改原件</pre>
<h3>5.3 递归：自己调用自己</h3>
<pre>long long fact(int n) {          // n 的阶乘
    if (n &lt;= 1) return 1;        // 出口：必须有！
    return n * fact(n - 1);      // 缩小问题规模
}</pre>
<p>递归三要素：<b>出口条件</b>、<b>问题缩小</b>、<b>自我调用</b>。缺了出口就是无限递归，直接爆栈（RE）。</p>
<h3>5.4 经典递归：斐波那契与汉诺塔</h3>
<pre>int fib(int n) {
    if (n &lt;= 2) return 1;
    return fib(n - 1) + fib(n - 2);   // 会重复计算，第10章用DP优化
}</pre>
<div class="tip">💡 理解递归的最佳姿势：画「递归树」，把每次调用当成一个节点展开。调试时打印函数入口参数，观察调用顺序。</div>`
},
{
  id:'c06', stage:'s2', icon:'🧰', title:'第6章 · 结构体与 STL 神器',
  desc:'struct 打包数据，vector/map/set/sort 是竞赛四大法宝，学会立省一半代码量。',
  minutes:50,
  content:`
<h3>6.1 结构体：自定义数据类型</h3>
<pre>struct Student {
    string name;
    int score;
};
Student stu[105];
// 按分数从高到低排序
sort(stu, stu + n, [](Student a, Student b) {
    return a.score &gt; b.score;
});</pre>
<h3>6.2 sort：一行搞定排序</h3>
<pre>sort(a, a + n);                    // 从小到大
sort(a, a + n, greater&lt;int&gt;());    // 从大到小
// 自定义比较：按绝对值
sort(a, a + n, [](int x, int y){ return abs(x) &lt; abs(y); });</pre>
<h3>6.3 vector：会变长的数组</h3>
<pre>vector&lt;int&gt; v;
v.push_back(5);        // 尾部插入
v.size();              // 当前长度
sort(v.begin(), v.end());
for (int x : v) cout &lt;&lt; x &lt;&lt; ' ';   // 遍历</pre>
<h3>6.4 map / set：自动有序的魔法容器</h3>
<pre>map&lt;string,int&gt; cnt;      // 统计单词出现次数
string w;
while (cin &gt;&gt; w) cnt[w]++;

set&lt;int&gt; s;               // 自动去重 + 排序
s.insert(3); s.insert(1); s.insert(3);
// s = {1, 3}</pre>
<div class="tip">💡 竞赛提速口诀：要排序用 <code class="inl">sort</code>，要去重用 <code class="inl">set</code>，要计数用 <code class="inl">map</code>，要动态数组用 <code class="inl">vector</code>。stack/queue/priority_queue 到图论章节再封神。</div>
<div class="warn">⚠️ 使用 STL 别忘头文件 <code class="inl">#include &lt;bits/stdc++.h&gt;</code>——竞赛万能头文件，一个顶全部。</div>`
},
/* ================= 第三阶段 ================= */
{
  id:'c07', stage:'s3', icon:'🔍', title:'第7章 · 枚举、模拟与排序',
  desc:'CSP-J 第一道大题的基本功：把所有可能列出来（枚举）、按题意一步步做（模拟）。',
  minutes:50,
  content:`
<h3>7.1 枚举：暴力也是一种智慧</h3>
<p>数据范围小（n ≤ 10⁴）时，直接枚举所有情况往往就是正解！关键是<b>不重不漏</b>。</p>
<pre>// 百钱买百鸡：枚举公鸡 i、母鸡 j，小鸡自动确定
for (int i = 0; i &lt;= 20; i++)
    for (int j = 0; j &lt;= 33; j++) {
        int k = 100 - i - j;
        if (5*i + 3*j + k/3.0 == 100 &amp;&amp; k % 3 == 0)
            printf("%d %d %d\\n", i, j, k);
    }</pre>
<h3>7.2 模拟：读懂题意照做</h3>
<p>模拟题占 CSP-J 半壁江山。秘诀：<b>先拿样例手工推一遍，把过程翻译成代码</b>。常见类型：日期处理、字符串变换、约瑟夫环、螺旋矩阵。</p>
<h3>7.3 排序的应用</h3>
<pre>// 成绩排名：先按总分降序，同分按学号升序
sort(stu, stu + n, [](Student a, Student b) {
    if (a.total != b.total) return a.total &gt; b.total;
    return a.id &lt; b.id;
});</pre>
<h3>7.4 时间复杂度入门</h3>
<table>
<tr><th>复杂度</th><th>n=10⁵ 是否可行</th><th>常见场景</th></tr>
<tr><td>O(n²)</td><td>❌ 约 10¹⁰ 次，超时</td><td>双重枚举，只适合 n≤1000</td></tr>
<tr><td>O(n log n)</td><td>✅ 秒过</td><td>sort、set/map</td></tr>
<tr><td>O(n)</td><td>✅ 飞快</td><td>一遍扫描</td></tr>
</table>
<div class="tip">💡 估算口诀：1 秒约能跑 10⁸ 次基本运算。拿到题先看数据范围，反推允许的复杂度，再选算法。</div>`
},
{
  id:'c08', stage:'s3', icon:'✂️', title:'第8章 · 二分、贪心与高精度',
  desc:'二分答案是把 O(n) 变 O(log n) 的神技；贪心选对策略一步登天；大数用高精度。',
  minutes:55,
  content:`
<h3>8.1 二分查找</h3>
<pre>// 在有序数组 a[0..n-1] 中找第一个 &gt;= x 的位置
int lo = 0, hi = n;          // [lo, hi)
while (lo &lt; hi) {
    int mid = (lo + hi) / 2;
    if (a[mid] &gt;= x) hi = mid;
    else lo = mid + 1;
}
// lo 即答案</pre>
<h3>8.2 二分答案（CSP 高频考点）</h3>
<p>当「答案单调可判定」时（如：最大化最小距离、最小化最大值），对<b>答案</b>二分，写一个 check(mid) 判定可行性。经典题：跳石头、砍树、分书。</p>
<h3>8.3 贪心：每一步选当前最优</h3>
<pre>// 区间调度：选最多个互不重叠的活动
// 按结束时间排序，能选就选
sort(act, act + n, [](Act a, Act b){ return a.ed &lt; b.ed; });
int cnt = 0, last = -1;
for (auto &amp;a : act)
    if (a.st &gt;= last) { cnt++; last = a.ed; }</pre>
<div class="warn">⚠️ 贪心必须证明（或强直觉 + 对拍验证）。选错策略的例子：硬币面额 {1,3,4} 凑 6，贪心拿 4 会剩 2 凑不出，而 3+3 才是正解。</div>
<h3>8.4 高精度：超过 long long 的运算</h3>
<p>用数组逐位模拟竖式计算（加减乘）。CSP-J 偶有压轴，掌握加法与乘法模板即可。</p>`
},
{
  id:'c09', stage:'s3', icon:'🌳', title:'第9章 · 深度优先与广度优先搜索',
  desc:'DFS 走到底再回头，BFS 一层层扩散——迷宫、连通块、全排列的灵魂算法。',
  minutes:60,
  content:`
<h3>9.1 DFS：一条道走到黑</h3>
<pre>// 全排列：输出 1~n 的所有排列
int n = 4, path[10];
bool used[10] = {0};
void dfs(int step) {
    if (step &gt; n) {                      // 出口
        for (int i = 1; i &lt;= n; i++) cout &lt;&lt; path[i] &lt;&lt; ' ';
        cout &lt;&lt; "\\n"; return;
    }
    for (int i = 1; i &lt;= n; i++)
        if (!used[i]) {
            used[i] = true; path[step] = i;
            dfs(step + 1);
            used[i] = false;             // 回溯：恢复现场
        }
}</pre>
<h3>9.2 BFS：水波纹扩散，求最短步数</h3>
<pre>// 迷宫最短路径：S 到 T 最少走几步
queue&lt;pair&lt;int,int&gt;&gt; q;
q.push({sx, sy});
int dx[] = {1,-1,0,0}, dy[] = {0,0,1,-1};
while (!q.empty()) {
    auto [x, y] = q.front(); q.pop();
    for (int d = 0; d &lt; 4; d++) {
        int nx = x+dx[d], ny = y+dy[d];
        if (可走 &amp;&amp; 没访问过) {
            dist[nx][ny] = dist[x][y] + 1;
            q.push({nx, ny});
        }
    }
}</pre>
<h3>9.3 怎么选？</h3>
<table>
<tr><th>场景</th><th>选择</th></tr>
<tr><td>求所有方案 / 排列组合</td><td>DFS + 回溯</td></tr>
<tr><td>最少步数 / 最短距离（无权图）</td><td>BFS</td></tr>
<tr><td>连通块计数（洪水填充）</td><td>DFS/BFS 均可</td></tr>
</table>
<div class="tip">💡 剪枝是 DFS 的灵魂：发现当前路不可能更优就提前 return，常把超时代码救回来。</div>`
},
{
  id:'c10', stage:'s3', icon:'🎒', title:'第10章 · 动态规划入门：线性DP与背包',
  desc:'DP 是 CSP-J 压轴之王：状态、转移、初始化三件套，背包问题是最好的老师。',
  minutes:70,
  content:`
<h3>10.1 DP 思想：记住算过的答案</h3>
<pre>// 斐波那契：递归 O(2ⁿ) → 递推 O(n)
long long f[100];
f[1] = f[2] = 1;
for (int i = 3; i &lt;= n; i++) f[i] = f[i-1] + f[i-2];</pre>
<p>DP 三问：<b>状态是什么</b>（f[i] 表示啥）、<b>怎么转移</b>（从哪些旧状态算出来）、<b>边界初始化</b>。</p>
<h3>10.2 线性 DP 经典：数字三角形 / 最长上升子序列</h3>
<pre>// LIS：最长上升子序列 O(n²)
for (int i = 0; i &lt; n; i++) {
    f[i] = 1;
    for (int j = 0; j &lt; i; j++)
        if (a[j] &lt; a[i]) f[i] = max(f[i], f[j] + 1);
}</pre>
<h3>10.3 0/1 背包（必背模板）</h3>
<pre>// 容量 V，n 件物品（重量 w，价值 v），每件最多选 1 次
for (int i = 1; i &lt;= n; i++)
    for (int j = V; j &gt;= w[i]; j--)      // 倒序！
        f[j] = max(f[j], f[j - w[i]] + v[i]);
cout &lt;&lt; f[V];</pre>
<div class="warn">⚠️ 0/1 背包内层必须<b>从大到小</b>遍历容量，否则一件物品会被重复选（变成完全背包）。</div>
<h3>10.4 完全背包</h3>
<pre>// 每件物品无限次选：内层改为正序
for (int i = 1; i &lt;= n; i++)
    for (int j = w[i]; j &lt;= V; j++)      // 正序
        f[j] = max(f[j], f[j - w[i]] + v[i]);</pre>
<div class="tip">💡 DP 学不会？刷题顺序：爬楼梯 → 数字三角形 → 最长上升子序列 → 0/1背包 → 完全背包 → 最长公共子序列。每题手写状态转移表。</div>`
},
/* ================= 第四阶段 ================= */
{
  id:'c11', stage:'s4', icon:'🕸️', title:'第11章 · 图论：最短路、生成树与拓扑排序',
  desc:'CSP-S 分水岭：邻接表存图、Dijkstra、Floyd、Kruskal、拓扑排序一个不能少。',
  minutes:80,
  content:`
<h3>11.1 存图：邻接表（vector 版）</h3>
<pre>vector&lt;int&gt; g[100005];       // g[u] 存 u 的所有邻居
void addEdge(int u, int v) { // 无向图加边
    g[u].push_back(v);
    g[v].push_back(u);
}</pre>
<h3>11.2 最短路三剑客</h3>
<table>
<tr><th>算法</th><th>复杂度</th><th>适用</th></tr>
<tr><td>Floyd</td><td>O(n³)</td><td>n≤400，任意两点间最短路</td></tr>
<tr><td>Dijkstra + 堆</td><td>O(m log n)</td><td>非负权边，单源最短路（首选）</td></tr>
<tr><td>SPFA / Bellman-Ford</td><td>O(nm)</td><td>含负权边、判负环</td></tr>
</table>
<pre>// Dijkstra（堆优化，必背）
priority_queue&lt;pair&lt;int,int&gt;, vector&lt;pair&lt;int,int&gt;&gt;, greater&lt;&gt;&gt; pq;
memset(dis, 0x3f, sizeof dis);
dis[s] = 0; pq.push({0, s});
while (!pq.empty()) {
    auto [d, u] = pq.top(); pq.pop();
    if (d &gt; dis[u]) continue;
    for (auto [v, w] : g[u])          // g 存 {邻居, 边权}
        if (dis[v] &gt; dis[u] + w) {
            dis[v] = dis[u] + w;
            pq.push({dis[v], v});
        }
}</pre>
<h3>11.3 最小生成树 Kruskal</h3>
<pre>// 边按权排序 + 并查集判环
sort(e, e + m);                 // 按边权升序
for (auto [w, u, v] : e)
    if (find(u) != find(v)) {   // 不在同一连通块
        unite(u, v); ans += w;
    }</pre>
<h3>11.4 拓扑排序</h3>
<p>入度为 0 的点入队，逐个弹出并删除其出边——得到 DAG 的一种合法执行顺序，还能判环（输出点数 &lt; n 则有环）。</p>`
},
{
  id:'c12', stage:'s4', icon:'🏆', title:'第12章 · CSP-S 冲刺：高级数据结构与进阶DP',
  desc:'并查集、树状数组、快速幂、区间DP——拿高分最后一块拼图，附考场策略。',
  minutes:90,
  content:`
<h3>12.1 并查集：连通性神器</h3>
<pre>int fa[100005];
int find(int x) { return fa[x] == x ? x : fa[x] = find(fa[x]); } // 路径压缩
void unite(int x, int y) { fa[find(x)] = find(y); }
// 初始化：for (i) fa[i] = i;</pre>
<h3>12.2 树状数组：区间求和 O(log n)</h3>
<pre>int c[100005];
int lowbit(int x) { return x &amp; -x; }
void add(int i, int v) { for (; i &lt;= n; i += lowbit(i)) c[i] += v; }
int ask(int i) { int s = 0; for (; i; i -= lowbit(i)) s += c[i]; return s; }
// 区间 [l, r] 求和 = ask(r) - ask(l - 1)</pre>
<h3>12.3 快速幂：O(log n) 算 aᵇ mod p</h3>
<pre>long long qpow(long long a, long long b, long long p) {
    long long res = 1 % p;
    while (b) {
        if (b &amp; 1) res = res * a % p;
        a = a * a % p;
        b &gt;&gt;= 1;
    }
    return res;
}</pre>
<h3>12.4 区间 DP 模板（石子合并）</h3>
<pre>for (int len = 2; len &lt;= n; len++)          // 枚举区间长度
    for (int l = 1; l + len - 1 &lt;= n; l++) {
        int r = l + len - 1;
        for (int k = l; k &lt; r; k++)         // 枚举分割点
            f[l][r] = min(f[l][r], f[l][k] + f[k+1][r] + sum(l, r));
    }</pre>
<h3>12.5 考场策略（血泪经验）</h3>
<ul>
<li><b>先易后难</b>：T1 签到题 30 分钟内拿下，每题先写暴力保底部分分。</li>
<li><b>对拍</b>：暴力程序 vs 优化程序跑随机数据对拍，查错神器。</li>
<li><b>文件读写</b>：正式赛用 <code class="inl">freopen("xxx.in","r",stdin);</code> 与 <code class="inl">freopen("xxx.out","w",stdout);</code>，文件名错一个字符 = 0 分！</li>
<li><b>最后 10 分钟</b>：检查文件名、long long、数组大小、边界 n=1。</li>
</ul>
<div class="tip">💡 刷题路线：洛谷「入门→普及→提高」题单各 100 题 + 近 5 年 CSP-J/S 真题全真模拟，稳定 300+ 不是梦。</div>`
}
];

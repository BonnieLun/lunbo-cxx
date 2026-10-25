/* ========== 伦博教育C++编程 · 编程实战 OJ 题库 ========== */
/* 每题含：题面、输入输出格式、样例、评测测试点、起始代码模板、参考解法提示 */

const KATAS = [
{
  id:'k01', stage:'s1', diff:1, xp:20, title:'A+B 问题（OJ 入门口令）',
  statement:'输入两个整数 a 和 b，输出它们的和。这是每个 OJ 的第一题，用来确认你会读输入、写输出。',
  inFmt:'一行两个整数 a b（-10⁹ ≤ a, b ≤ 10⁹）',
  outFmt:'一行一个整数：a + b',
  samples:[{in:'3 5', out:'8'}],
  tests:[{in:'3 5',out:'8'},{in:'-100 100',out:'0'},{in:'999999999 1',out:'1000000000'},{in:'-7 -8',out:'-15'}],
  starter:`#include <iostream>
using namespace std;

int main() {
    long long a, b;
    cin >> a >> b;
    // 在这行下面写你的代码

    return 0;
}`,
  hint:'注意范围接近 int 上限，开 long long 最稳。'
},
{
  id:'k02', stage:'s1', diff:1, xp:20, title:'奇偶判断',
  statement:'给定一个整数 n，判断它是奇数还是偶数。',
  inFmt:'一行一个整数 n（|n| ≤ 10⁹）',
  outFmt:'偶数输出 EVEN，奇数输出 ODD',
  samples:[{in:'7', out:'ODD'}],
  tests:[{in:'7',out:'ODD'},{in:'0',out:'EVEN'},{in:'-3',out:'ODD'},{in:'1000000000',out:'EVEN'}],
  starter:`#include <iostream>
using namespace std;

int main() {
    long long n;
    cin >> n;
    // 在这行下面写你的代码

    return 0;
}`,
  hint:'n % 2 == 0 是偶数。小心负数：C++ 里 -3 % 2 == -1，用 n % 2 != 0 判奇数更稳。'
},
{
  id:'k03', stage:'s1', diff:2, xp:30, title:'最大值猎手',
  statement:'给出 n 个整数，输出其中最大的一个。',
  inFmt:'第一行一个整数 n（1 ≤ n ≤ 1000）；第二行 n 个整数',
  outFmt:'一行一个整数：最大值',
  samples:[{in:'5\n3 9 2 7 5', out:'9'}],
  tests:[{in:'5\n3 9 2 7 5',out:'9'},{in:'1\n-42',out:'-42'},{in:'4\n-5 -1 -9 -3',out:'-1'},{in:'6\n8 8 8 8 8 8',out:'8'}],
  starter:`#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    // 读入 n 个数并找出最大值

    return 0;
}`,
  hint:'最大值初值不要设成 0！数据可能全是负数。应设为第一个读入的数。'
},
{
  id:'k04', stage:'s2', diff:2, xp:30, title:'回文串判定',
  statement:'给定一个只含小写字母的字符串，判断它是否正着读和倒着读完全一样（回文）。',
  inFmt:'一行一个字符串 s（长度 ≤ 1000）',
  outFmt:'是回文输出 YES，否则输出 NO',
  samples:[{in:'level', out:'YES'}],
  tests:[{in:'level',out:'YES'},{in:'hello',out:'NO'},{in:'a',out:'YES'},{in:'abba',out:'YES'},{in:'abcbaX',out:'NO'}],
  starter:`#include <iostream>
#include <string>
using namespace std;

int main() {
    string s;
    cin >> s;
    // 在这行下面写你的代码

    return 0;
}`,
  hint:'双指针：i 从头、j 从尾，向中间夹击比较，任何一处不等即 NO。'
},
{
  id:'k05', stage:'s2', diff:2, xp:30, title:'第 K 小整数',
  statement:'给出 n 个整数，输出其中第 k 小的数（从小到大排序后的第 k 个）。',
  inFmt:'第一行 n 和 k（1 ≤ k ≤ n ≤ 10⁵）；第二行 n 个整数',
  outFmt:'一行一个整数：第 k 小的值',
  samples:[{in:'5 2\n5 1 4 2 3', out:'2'}],
  tests:[{in:'5 2\n5 1 4 2 3',out:'2'},{in:'3 3\n7 7 7',out:'7'},{in:'4 1\n9 5 6 8',out:'5'},{in:'6 6\n1 2 3 4 5 6',out:'6'}],
  starter:`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> a(n);
    for (auto &x : a) cin >> x;
    // 在这行下面写你的代码

    return 0;
}`,
  hint:'sort(a.begin(), a.end()) 后输出 a[k-1]，注意下标从 0 开始。'
},
{
  id:'k06', stage:'s2', diff:3, xp:40, title:'斐波那契第 N 项',
  statement:'斐波那契数列 f(1)=f(2)=1，f(n)=f(n-1)+f(n-2)。求第 n 项。',
  inFmt:'一行一个整数 n（1 ≤ n ≤ 60）',
  outFmt:'一行一个整数：f(n)',
  samples:[{in:'10', out:'55'}],
  tests:[{in:'10',out:'55'},{in:'1',out:'1'},{in:'2',out:'1'},{in:'60',out:'1548008755920'}],
  starter:`#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    // 在这行下面写你的代码

    return 0;
}`,
  hint:'n=60 时结果超过 10¹²，必须 long long！用递推不要裸递归（递归会算 2⁶⁰ 次）。'
},
{
  id:'k07', stage:'s3', diff:3, xp:40, title:'素数计数器',
  statement:'统计不超过 n 的素数有多少个。',
  inFmt:'一行一个整数 n（2 ≤ n ≤ 10⁶）',
  outFmt:'一行一个整数：≤ n 的素数个数',
  samples:[{in:'10', out:'4'}],
  tests:[{in:'10',out:'4'},{in:'2',out:'1'},{in:'100',out:'25'},{in:'1000000',out:'78498'}],
  starter:`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    // 在这行下面写你的代码

    return 0;
}`,
  hint:'n=10⁶ 用埃氏筛：bool 数组标记，从 i*i 开始划掉 i 的倍数，O(n log log n) 秒过。'
},
{
  id:'k08', stage:'s3', diff:3, xp:40, title:'最大子段和',
  statement:'给定一个整数序列（可能有负数），求连续子序列和的最大值。',
  inFmt:'第一行 n（1 ≤ n ≤ 10⁵）；第二行 n 个整数（|a| ≤ 10⁴）',
  outFmt:'一行一个整数：最大子段和',
  samples:[{in:'6\n-2 11 -4 13 -5 -2', out:'20'}],
  tests:[{in:'6\n-2 11 -4 13 -5 -2',out:'20'},{in:'3\n-1 -2 -3',out:'-1'},{in:'4\n1 2 3 4',out:'10'},{in:'5\n5 -8 3 4 -1',out:'7'}],
  starter:`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<long long> a(n);
    for (auto &x : a) cin >> x;
    // 在这行下面写你的代码

    return 0;
}`,
  hint:'经典 DP：f = 以当前元素结尾的最大和 = max(a[i], f + a[i])，答案取历史最大。全负数据是坑：答案应是最大那个负数。'
},
{
  id:'k09', stage:'s3', diff:3, xp:40, title:'二分查找：第一个 ≥ x',
  statement:'给定升序数组和查询值 x，输出第一个大于等于 x 的元素下标（从 0 开始）；若不存在输出 -1。',
  inFmt:'第一行 n 和 x（1 ≤ n ≤ 10⁵）；第二行 n 个升序整数',
  outFmt:'一行一个整数：下标或 -1',
  samples:[{in:'5 6\n1 3 5 7 9', out:'3'}],
  tests:[{in:'5 6\n1 3 5 7 9',out:'3'},{in:'5 5\n1 3 5 7 9',out:'2'},{in:'5 10\n1 3 5 7 9',out:'-1'},{in:'5 0\n1 3 5 7 9',out:'0'}],
  starter:`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, x;
    cin >> n >> x;
    vector<int> a(n);
    for (auto &v : a) cin >> v;
    // 在这行下面写你的代码

    return 0;
}`,
  hint:'二分模板：lo=0, hi=n，区间 [lo, hi)，a[mid] >= x 则 hi=mid 否则 lo=mid+1；最后 lo==n 说明不存在。'
},
{
  id:'k10', stage:'s3', diff:4, xp:50, title:'0/1 背包（竞赛必考）',
  statement:'有容量为 V 的背包和 n 件物品，每件物品有重量 w 和价值 v，每件最多选一次。求能装下的最大总价值。',
  inFmt:'第一行 n 和 V（1 ≤ n ≤ 100，1 ≤ V ≤ 1000）；接下来 n 行每行 w v',
  outFmt:'一行一个整数：最大总价值',
  samples:[{in:'3 5\n2 3\n3 4\n4 5', out:'7'}],
  tests:[{in:'3 5\n2 3\n3 4\n4 5',out:'7'},{in:'1 1\n2 100',out:'0'},{in:'4 10\n5 10\n4 40\n3 30\n2 20',out:'60'},{in:'2 3\n1 1\n1 1',out:'2'}],
  starter:`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, V;
    cin >> n >> V;
    // 在这行下面写你的代码

    return 0;
}`,
  hint:'一维 DP：for 物品 → for j 从 V 倒序到 w：f[j] = max(f[j], f[j-w]+v)。倒序！倒序！倒序！'
},
{
  id:'k11', stage:'s4', diff:4, xp:50, title:'快速幂取模',
  statement:'计算 a 的 b 次方对 p 取模的结果。',
  inFmt:'一行三个整数 a b p（1 ≤ a, p ≤ 10⁹，0 ≤ b ≤ 10¹⁸）',
  outFmt:'一行一个整数：a^b mod p',
  samples:[{in:'2 10 1000', out:'24'}],
  tests:[{in:'2 10 1000',out:'24'},{in:'3 0 7',out:'1'},{in:'999999999 999999999 998244353',out:'167271633'},{in:'5 1000000000000000000 1000000007',out:'693007144'}],
  starter:`#include <iostream>
using namespace std;

int main() {
    long long a, b, p;
    cin >> a >> b >> p;
    // 在这行下面写你的代码

    return 0;
}`,
  hint:'b 高达 10¹⁸，暴力循环没戏。快速幂：b 为奇则 res=res*a%p，然后 a=a*a%p，b>>=1。循环约 60 次搞定。'
},
{
  id:'k12', stage:'s4', diff:4, xp:50, title:'连通块计数（并查集）',
  statement:'n 个节点，m 次合并操作（每次把两个节点所在集合合并）。求所有操作完成后，图中有多少个连通块。',
  inFmt:'第一行 n 和 m（1 ≤ n ≤ 10⁵，0 ≤ m ≤ 2×10⁵）；接下来 m 行每行 u v（1 ≤ u,v ≤ n）',
  outFmt:'一行一个整数：连通块数量',
  samples:[{in:'5 2\n1 2\n3 4', out:'3'}],
  tests:[{in:'5 2\n1 2\n3 4',out:'3'},{in:'3 0',out:'3'},{in:'4 3\n1 2\n2 3\n3 4',out:'1'},{in:'6 3\n1 2\n2 3\n1 3',out:'4'}],
  starter:`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, m;
    cin >> n >> m;
    // 在这行下面写你的代码

    return 0;
}`,
  hint:'并查集：初始每个点自成一块（cnt=n），每次 find(u)!=find(v) 就合并且 cnt--。记得路径压缩！'
}
];

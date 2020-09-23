let n = 5

for (let i = 1; i <= n; i++) {
    let str = ''
    str = ' '.repeat(i - 1) + '#'.repeat(n - i + 1)+ '#'.repeat(n - i)
    console.log(str);
}
for (let j = 1; j <= n; j++) {
    let str = ''
    str = ' '.repeat(n - j) + '#'.repeat(j)+ '#'.repeat(j - 1)
    console.log(str);
}
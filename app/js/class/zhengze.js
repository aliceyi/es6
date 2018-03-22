
{
    let regex = new RegExp('xyz', 'i')
    let regex2 = new RegExp(/xyz/i)
    console.log(regex.test('xyz123'),regex2.test('xyz123'));

    // 构造函数发生变化， 第二个参数覆盖第一个参数
    let regex3 = new RegExp(/xyz/i, 'i')
    console.log('flag',regex3.flags);
}
{
    // y 修饰符 匹配的下一个字符开始
    let s = 'bbb_bb_b'
    let a1 = /b+/g
    let a2 = /b+/y
    console.log('a1.exac(s)',a1.exec(s),a2.exec(s))
    console.log('a1.exac(s)',a1.exec(s),a2.exec(s))

    console.log('a1.sticky',a1.sticky, a2.sticky);
    
}

{
    // 大于两个字节的字符必须加上 u
    let s = '𠮷'

    console.log('test', /^.$/.test(s))
    console.log('test-1', /^.$/u.test(s));
    console.log('test-2', /𠮷{2}/.test('𠮷'));
    console.log('test-4', /𠮷{2}/u.test('𠮷𠮷'));

    // s 修饰符的作用 ，判断 换行 的点的判断
}
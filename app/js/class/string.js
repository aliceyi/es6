{
    console.log('a', `\u0061`);
    console.log('s',`\u20BB7`); // 超过了2个字节 oxFFFF ，不能识别多余两个字节

    console.log('s',`\u{20BB7}`); // 超过了2个字节处理方法

}

{
    // 2个字节一个长度， 2 个长度 = 4个字节
    const s = '𠮷'
    console.log('s.length',s.length);

    console.log('0',s.charAt(0));
    console.log('1',s.charAt(1));
    console.log('at0',s.charCodeAt(0));
    console.log('at1',s.charCodeAt(1));
    
    const s2 = '𠮷a'
    console.log('s2.length',s2.length);
    console.log('code0',s2.codePointAt(0));
    console.log('code0',s2.codePointAt(0).toString(16));
    console.log('code1',s2.codePointAt(1));
    console.log('code2',s2.codePointAt(2));
}

{
    console.log('string.fromCharCode("0x20bb7")',String.fromCharCode("ox20bb7"));
    console.log('String.fromCodePoint("0x20bb7")',String.fromCodePoint("0x20bb7"));
    
    const str = '\u{20bb7}'
}

{
    const str = '\u{20bb7}'
    for(let i=0;i<str.length;i++){
        console.log('es5',str[i]);
    }
    for(let code of str){
        console.log('es6',code);
    }
}

{
    let str = 'string'
    console.log('str.includes("r")',str.includes("r"));
    console.log('str.startWith("str")',str.startsWith("str"));
    console.log('str.endsWith("ng")',str.endsWith("ng"));
}
{
    let str = 'abc'
    console.log('str.repeat(2)',str.repeat(2));
}

{
    // 模版
    let name = "list"
    let info = 'hello world'
    let m = `i am ${name}, ${info}`
}
{
    // 字符补白
    console.log('1.padStart(2,"0")', '1'.padStart(2,'0'));
    console.log('1.padStart(2,"0")', '1'.padEnd(2,'0'));
}

{
    // 标签模版 过滤html 字符串 xss 攻击 ， 处理多语言时 
    let user = {
        name: 'list',
        info: 'hello world'
    }
    console.log('abc`i am ${user.name},${user.info}`',abc`i am ${user.name},${user.info}`);
    

    function abc(s,v1,v2){
        console.log(s,v1,v2);
        return s+v1+v2
    }
}

{
    // raw 对所有 \n 进行转义  \\n
    console.log(String.raw`Hi\n${1+2}`)
    console.log(`Hi\n${1+2}`)
    
}
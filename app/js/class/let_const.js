

// 1. let 块级作用域在 {} 内
// 2. es6 强制开启 use strict 模式, 若是对象没有定义会抛出异常 ReferenceError: i is not defined 而不是 undefined
// 3. let 不能重复定义 如： let a=1; let a=2; 
function test() {
    for(let i=1; i<3;i++){
        console.log(i)
    }
    // console.log(i) ReferenceError: i is not defined
}
test();

// 1. const 定义的常量是不能修改的
// 2. const 有作用域的概念
// 3. const 声明的时候必须付值
// 4. const 变量赋值一个 {} 可以修改的原因是 {} 是引用类型 const k = {} k 指向指针，指针不变的，但是 {} 本身是可以改变的。 
function last() {
    const PI = 3.1415;
    // PI = 8; SyntaxError : "PI" is read-only
    const k = {
        a: 1
    }
    k.b = 3;
    console.log(PI, k);
}
last();
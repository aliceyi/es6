// 参数默认值 rest 参数 扩展运算符 箭头函数 this 绑定  尾调用

{
    function test(x, y = 'wrold',c) {
        console.log('x,y',x,y,c);
    }
    test('hello')
    test('hello', 'kill','ddd')
}

{
    // 作用域 , 若是函数参数中定义则作用域只属于这个函数体，若是没有则会向上级寻找
    let x ='test'
    function test2(x,y = x){
        console.log('作用域',x,y);
    }
    test2('kill')
}

{
    // 在不确认有多少参数的时候，rest 则将参数转成数组
    function test3(...arg){
        for (let v of arg) {
            console.log('rest',v);
        }
    }
    test3(1,2,3,4,'a')
}

{
    // 扩展运算符
    console.log('...[1,2,3]',...[1,2,3]);
}

{
    let arrow = v => v*2
    let arrow2 = () => 3
    console.log('arrow(3)',arrow(3));
    console.log('arrow2()',arrow2());
    // 注意this 绑定
}
{
    //尾调用 提升性能 函数嵌套，依赖调用，可以写成尾调用的形式
    function tail (x) {
        console.log('x',x);
        
    }
    function fx(x) {
        return tail(x)
    }
    fx(123)
}
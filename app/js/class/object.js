// 简洁表示法， 属性表达式 扩展运算符 新增方法

{
    // 简洁表示法
    let o = 1
    let k = 2
    let es5 = {
        o: o,
        k: k
    }
    let es6 = {
        o, 
        k
    }
    console.log('es5, es6',es5, es6);
    
    let es5_fun = {
        hello: function() {
            console.log('hello');
            
        }
    }
    let es6_fun = {
        hello() {
            console.log('hello es6');
        }
    }
    console.log('es5(), es6()',es5_fun.hello(), es6_fun.hello());
}

{
    //属性表达式
    let a ='b'
    let es5_obj = {
        a: 'c',
        b: a
    }

    let es6_obj = {
        [a]: 'c'
    }
    console.log('es5_obj,es6_obj',es5_obj,es6_obj);
}

{
    //新增方法
    console.log('Object',Object.is('abc','abc'), 'abc' === 'abc');
    console.log('Object.is',Object.is([], []), []===[]);
    
    // coby 的coby 有限制，浅复制， 只coby 自身的属性， 继承 之类的 不会coby

    console.log('Object.assign()',Object.assign({a:'a'}, {b:'b'}));
    
    let ts = {k: 123, o: 456}
    for(let [key, value] of Object.entries(ts)){
        console.log('[key,value]',[key,value]);
    }

}
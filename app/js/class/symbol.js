// 概念 数据类型提供独一无二的值
// 作用
{
    // symbol 声明
    let a1 = Symbol();
    let a2 = Symbol();
    console.log('a1===a2',a1===a2);
    // symbol 同一个变量， 参数是key 值
    let a3 = Symbol.for('a3')
    let a4 = Symbol.for('a3')
    console.log('a3===a4',a3===a4);
}
{
    let a1 = Symbol.for('abc')
    let obj = {
        [a1]: '123',
        abc: 345,
        c: 456
    }
    console.log('obj',obj);
    
    // for in or of 取不到 symbol 值

    for (let [key, value] of Object.entries(obj)) {
        console.log('[key,value]',[key,value]);
    }
    // 只能取 sysbel 值
    Object.getOwnPropertySymbols(obj).forEach( item => {
        console.log('obj[item]',obj[item]);
        
    })
    Reflect.ownKeys(obj).forEach (item => {
        console.log('reflect', item, obj[item]);
    })
    
    

}
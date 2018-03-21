// 数据类型 数组， 对象，字符串，布尔值， 函数参数 ，数值 解构
// {}应用作用域块进行变量隔离
// 解构： 等号左边的结构 和 等号右边的结构保持一致
{
    let a,b,rest;
    [a,b] = [1,2];
    console.log('a=',a,'b=',b);
}
{
    let a,b,rest;
    [a,b,...rest] = [1,2,3,4,5,6];
    console.log('a=',a,'b=',b, 'rest=',rest);
}
{
    let a,b;
    ({a,b}= {a:1,b:2})
    console.log('a=',a,'b=',b);
}
{
    // 解构没有配对成功的话为 undefind , 可以设置默认值
    let a,b,rest,c;
    [a,b,c=3] = [1,2];
    console.log('a=',a,'b=',b, 'c=',c);
}
{
    // a b 两个值交换
    let a =1;
    let b =2;
    [a,b] =[b,a]
    console.log('a=',a,'b=',b);
}
{
    // 函数解构负值
    function f() {
        return [1,2]
    }
    let a,b;
    [a,b] = f();
    console.log('a=',a,'b=',b);
}

{
    // 函数解构负值,只关注 1，4 
    function f() {
        return [1,2,3,4,5]
    }
    let a,b;
    [a,,,b] = f();
    console.log('a=',a,'b=',b);
}
{
    // 函数解构负值,不确定返回参数长度是多少，只关注第一个，其他的放到数组中
    function f() {
        return [1,2,3,4,5]
    }
    let a,b;
    [a,,...b] = f();
    console.log('a=',a,'b=',b);
}
{
    let o = {p:41, q:true}
    let {p,q} = o
     console.log('p=',p,'q=',q);
}
{
    let metaData = {
        title: 'abc',
        test: [
            {title: 'test1', desc: 'desc1'},
            {title: 'test2', desc: 'desc2'}
        ]
    }
    let {title:esTitle,test:[{title:cnTitle},{title:snTitle}]} = metaData
    console.log('title=',esTitle,'title=',cnTitle,'title=',snTitle);
    
}
{
    //解决异步编程 generator 基本概念
    let tell = function* () {
        yield 'a';
        yield 'b'
        return 'c'
    }
    let k = tell()
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
}
{
    // 使用 generator 也可以建立 iterator object
    let obj = {}
    obj[Symbol.iterator] = function* () {
        yield 1
        yield 2
        yield 3
    }
    for(let key of obj){
        console.log('key',key);
        
    }
}
{
    // 状态基
    let state = function* (){
        while(1){
            yield 'A'
            yield 'B'
            yield 'C'
        }
    }
    let status = state()
    console.log('status.next()',status.next());
    console.log('status.next()',status.next());
    console.log('status.next()',status.next());

}
{
    //抽奖次数的限制, 不要放在全局变量
    let draw = function(count) {
        //具体抽奖流程
        console.info(`剩余${count}次`)
    }
    let residue = function* (count){
        while(count >0){
            count --
            yield draw(count)
        }
    }
    let star = residue(5)
    
    let btn = document.createElement('button')
    btn.id ='start'
    btn.textContent = '抽奖'
    document.body.appendChild(btn)
    document.getElementById('start').addEventListener('click', () => {
        star.next()
    },false)

}
{
    // 长轮询 or websock 浏览器兼容性不好
    let ajax = function* (){
        yield new Promise((resive, reject) => {
            // 发送请求
            setTimeout(() => {
                resive({code:0});
            },200)
        })
    }
    let pull = function () {
        let generator = ajax()
        let step = generator.next()
        step.value.then((d) => {
            if(d.code != 0){
                setTimeout(() => {
                    console.log('wait','wait');
                    pull()
                },1000)
            }else {
                console.log('d',d);
            }
        })
    }
    pull()

}
{
    // let state = async function (){
    //     while(1){
    //         await 'A'
    //         await 'B'
    //         await 'C'
    //     }
    // }
    // let status = state()
    // console.log('status.next()',status.next());
    // console.log('status.next()',status.next());
    // console.log('status.next()',status.next());
}
{
    // next yield * 的语法

     
}
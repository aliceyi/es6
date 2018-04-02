{
    // 函数，修改行为，修改类的行为
    let readonly = function (target, name, descriptor) {
        descriptor.writable = false
        return descriptor
    }
    
    class Test {
        // @readonly
        time() {
           return'2018-3-3'
            
        }
        
    }
    let test = new Test()
    console.log('test.time()',test.time());
}
{
    let typeName = function(target, name, descriptor){
        target.myname ='hello'
    }
    // @typeName
    class Test{

    }
    console.log('Test.name',Test.name);
    // 第三方库修饰器js库 core-decorators 
}
{
    // 日志，埋点
    let log = (type) => {
        return function(target,name,descriptor){
            let src_method = descriptor.value;
            descriptor.value = (...arg) => {
                src_method.apply(target,arg)
                console.log(`log ${type}`)
            }
        }
    }

    class AD {
        // @log('show')
        show() {
            console.log('ad show',show);
        }
        // @log('click')
        click() {
            console.log('ad click',click);
        }
    }
    let ad = new AD()
    ad.show()
    ad.click()
}

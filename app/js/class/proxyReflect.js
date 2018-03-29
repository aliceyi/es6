{
    // proxy 代理 && reflect 对象的反射
    //供应商
    let obj = {
        time: '2018-03-22',
        name: 'net',
        _r: 123
    }

    //代理对象
    let monitor = new Proxy(obj, {
        // 拦截对象属性的读取
        get(target, key){
            return target[key].replace('2018', '2019')
        },
        // 拦截对象属性的设置
        set(target, key, value){
            if (key === 'name') {
                return target[key] = value
            } else {
                return target[key]
            }
        },
        // 拦截 key in object 操作
        has(target, key){
            if (key === 'name') {
                return target[key]
            } else {
                return false
            }
        },
        // 拦截 delete
        deleteProperty(target, key){
            if (key.indexOf('_') >= -1) {
                delete target[key]
                return true
            } else {
                return target[key]
            }
        },
        // 拦截 Object.keys Object.getOwnPropertySymbols Object.getOwnPropertyName
        ownKeys(target) {
            return Object.keys(target).filter(item => item!= 'time')
        }
    })

    //用户访问 monitor ， monitor 通过 proxy 传递给 供应商
   console.log('monitor.time', monitor.time);
   monitor.time = '2018'
   monitor.name = 'nnnnnn'
   console.log('monitor.time',monitor.time, monitor.name);
   
   console.log('has', 'name' in monitor, 'time' in monitor)

   delete monitor.time
   console.log('delete', monitor);

//    delete monitor._r
//    console.log('delete', monitor);

   console.log('ownkeys',Object.keys(monitor));
   
   
}

{
    let obj = {
        time: '2018-03-22',
        name: 'net',
        _r: 123
    }

    console.log('Reflect.get',Reflect.get(obj, 'time'));

    Reflect.set(obj, 'name', 'test net')

    console.log('obj',obj);
    
    console.log('Reflect.has',Reflect.has(obj, 'name'));
    
}

{
    // 项目中如何使用 数据类型校验 和业务解耦 

    function validator(target, validator) {
        return new Proxy(target, {
            _validator: validator,
            set(target,key, value, proxy) {
                if(target.hasOwnProperty(key)) {
                    let va = this._validator[key]
                    if(!!va(value)) {
                        return Reflect.set(target, key, value, proxy)
                    } else {
                        throw Errow(`can not set ${key} to ${value}`)
                    }
                }else{
                    throw Errow(`${key} 不存在`)
                }
            }
        })
    }

    const personValidators = {
        name(val) {
            return typeof val === 'string'
        },
        age(val) {
            return typeof age === 'number' && val > 18
        }
    }

    class Person {
        constructor(name, age){
            this.name = name
            this.age = age
            return validator(this, personValidators)
        }
    }

    const person = new Person('lilei', 30)
    console.log('person',person);
    person.name = 11
    console.log('person2',person);
}
// 基本语法， 类的继承， 静态方法， 静态属性， getter ，setter

{
    //类的基本定义和生成实类
    class Perent {
        // 构造函数
        constructor(name='alice') {
            this.name = name;
        }
    }
    let perent = new Perent('bob')

    console.log('perent',perent);
    
}

{
    //类的继承
    class Perent {
        // 构造函数
        constructor(name='alice') {
            this.name = name;
        }
    }
    class Child extends Perent {
        
    }

    console.log('new child()',new Child());
    
}

{
    //类的继承
    class Perent {
        // 构造函数
        constructor(name='alice') {
            this.name = name;
        }
    }
    class Child extends Perent {
        constructor(name="child"){
            // this 需要放在 super 之后， super 一定放在构造函数 第一行。
            super(name)
            this.type = 'child'
        }
    }

    console.log('new child()',new Child());
    
}
{
    // 类中到 getter && setter
    class Perent {
        // 构造函数
        constructor(name='alice') {
            this.name = name;
        }
        get longName() {
            return `smis ${this.name}`
        }
        set longName(value){
            this.name = value
        }
    }
    let v = new Perent()
    console.log('v.longName()',v.longName);
    v.longName = 'hihi'
    console.log('v.longName',v.longName);
    
    
}

{
    //静态方法 通过类来调用

    class Perent {
        // 构造函数
        constructor(name='alice') {
            this.name = name;
        }
        static tell(){
            console.log('tell');
        }
    }
    
    Perent.tell()

}

{
    //静态属性 还么有实现, 直接在类上定义属性

    class Perent {
        // 构造函数
        constructor(name='alice') {
            this.name = name;
        }
        static tell(){
            console.log('tell');
        }
        
    }

    Perent.type = 'test'
    

    console.log('Perent.type',Perent.type);
    

}
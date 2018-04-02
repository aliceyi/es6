import { log } from "util";

// 什么是异步， 作用和基本用法

{
    // 异步执行顺序
    let ajax = function(callback){
        console.log('执行');
        
        setTimeout(function(){
            callback && callback.call()
        },1000)
    }
    ajax(function(){
        console.log('timeout1');
    })
}

{
    let ajax = function() {
        console.log('执行2')
        return new Promise(function(resolve, reject) {
            setTimeout(function(){
                resolve()
            },1000)
        })
    }
    ajax().then(function(){
        console.log('promise','timeout2');
        
    })
}

{
    let ajax = function() {
        console.log('执行3')
        return new Promise(function(resolve, reject) {
            setTimeout(function(){
                resolve()
            },1000)
        })
    }
    ajax().then(function(){
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve()
            },2000)
        })
    }).then(() => {
        console.log('timeout3');
        
    })
}

{
    // catch
    let ajax = function(num) {
        console.log('执行4')
        return new Promise(function(resolve, reject) {
            setTimeout(function(){
                if (num >5) {
                    resolve()
                } else {
                    throw Error('执行错误')
                }
            },3000)
        })
    }
    ajax(6).then(() => {
        console.log('timeout4');
    }).catch((err) => {
        console.log('catch',err);
    })

    ajax(3).then(() => {
        console.log('timeout4');
    }).catch((err) => {
        console.log('catch',err);
    })

}

{
    // 所有的图片加载完再加载到页面
    function loadImg(src){
        return new Promise((resolve, reject) => {
            let img = document.createElement('img')
            img.src = src
            img.onload = function(){
                resolve(img)
            }
            img.onerror = function(err) {
                reject(err)
            }
        })
    }
    function showImgs(imgs){
        imgs.forEach(img => {
            document.body.appendChild(img)
        });
    }

    Promise.all([
        loadImg('https://source.tutorabc.com.cn/Ext/mtl_thumb/111135.jpg'),
        loadImg('https://source.tutorabc.com.cn/Ext/mtl_thumb/104186.jpg'),
        
    ]).then(showImgs)
}

{
    // 有一个图片加载完再加载到页面
    function loadImg(src){
        return new Promise((resolve, reject) => {
            let img = document.createElement('img')
            img.src = src
            img.onload = function(){
                resolve(img)
            }
            img.onerror = function(err) {
                reject(err)
            }
        })
    }
    function showImgs(imgs) {
        let p  = document.createElement('p')
        p.appendChild(imgs)
        document.body.appendChild(p)
    }
    Promise.race(
        [
            loadImg('https://source.tutorabc.com.cn/Ext/mtl_thumb/111135.jpg'),
            loadImg('https://source.tutorabc.com.cn/Ext/mtl_thumb/104186.jpg'),
            
        ]
    ).then(showImgs)
}
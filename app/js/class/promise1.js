{
    let promise = function(){
        console.log('执行1');
       
        return new Promise( (reslove, reject)=> {
            setTimeout(() =>{
                reslove()
            },1000)
        })
    }
    promise().then(() =>{
        console.log('timeout');
    })
}
{
    let promise = function(num){
        console.log('执行2');
       
        return new Promise( (reslove, reject)=> {
           if(num >5) {
            reslove()
           }else {
               throw Error(`出错呀 num > ${num}`)
           }
        })
    }
    promise(6).then(() =>{
        console.log('timeout1');
    }).catch((err) => {
        console.log(err);
    })
}

{
    // promise all
    let promise = function(src){
        console.log('执行3');
        return new Promise( (reslove, reject)=> {
            let img = document.createElement('img')
            img.src = src
            img.onload = () => {
                reslove(img)
            }
            img.onerror = () => {
                throw Error('图片加载失败')
            }
        })
    }
    let showImgs = (imgs) => {
        imgs.forEach(img => {
            document.body.appendChild(img)
        });
    }

    Promise.all([
        promise('https://ohhkwhqxa.qnssl.com/20160407/fbc192ee3421a247557b7cb2d6ca1984e521f5df.JPG?imageView2/2/w/300/h/192'),
        promise('https://ohhkwhqxa.qnssl.com/20160407/fbc192ee3421a247557b7cb2d6ca1984e521f5df.JPG?imageView2/2/w/300/h/192')
    ]).then(showImgs)
    .catch((err) => {
        console.log(err);
    })
}

{
    let promise = function(src){
        console.log('执行4')
        return new Promise( (reslove, reject) => {
            let img = document.createElement('img')
            img.src= src
            img.onload = () => {
                reslove(img)
            }
            img.onerror = () => {
                throw Error('图片加载失败')
            }
        })
    }

    let showImgs = (img) => {
        let p = document.createElement('p')
        p.appendChild(img)
        document.body.appendChild(p)
    }

    Promise.race([
        promise('https://ohhkwhqxa.qnssl.com/20160407/fbc192ee3421a247557b7cb2d6ca1984e521f5df.JPG?imageView2/2/w/300/h/192'),
        promise('https://ohhkwhqxa.qnssl.com/20160407/fbc192ee3421a247557b7cb2d6ca1984e521f5df.JPG?imageView2/2/w/300/h/192')
    ])
    .then(showImgs)
    .catch((err) => {
        console.log(err);
    })

}
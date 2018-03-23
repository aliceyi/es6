{
    let arr = Array.of(3,4,5,6,22)
    console.log('arr',arr);
    
    let empty = Array.of()
    console.log('empty',empty);
    
}

{
    let p = document.querySelectorAll('p')
    let parr = Array.from(p)
    parr.forEach(function(item){
        console.log('item.textContent',item.textContent);
    })
    console.log('Array.from',Array.from([1,3,5],function(item) {return item*2}));
}

{
    console.log('fill-7',[1, 'a', undefined].fill(7));
    console.log('fill,pos', ['a', 'b', 'c'].fill(7,1,3));
    
}

{
    for (let index of [1,'c', 'ks'].keys()) {
        console.log('keys',index);
    }
    for (let value of [1,'c', 'ks'].values()) {
        console.log('keys',value);
    }
    for (let [index, value] of [1,'c', 'ks'].entries()) {
        console.log('keys',index,value);
    }
}
{
    console.log('[1,2,3,4,5]',[1,2,3,4,5].copyWithin(0,3,4));
    
}
{
    // find 只找出第一个
    console.log('[1,2,3,4,5,6]',[1,2,3,4,5,6].find(function(item) {
        return item >3
    }));

    console.log('[1,2,3,4,5,6]',[1,2,3,4,5,6].findIndex(function(item) {
        return item >3
    }));
    
}

{
    console.log('number',[1,2,NaN].includes(3));
    
}
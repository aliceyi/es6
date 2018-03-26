// set ,weakSet 
// map weakMap  

{
    let list = new Set();
    list.add(5)
    list.add(7)
    console.log('list.size',list.size);
    
}

{
    let arr = [1,2,3,4,5]
    let list = new Set(arr)
    console.log('list.size',list.size);
    
}
{
    //set 元素必须是唯一的, 可以利用 set 去重, 但不会做强制数据类型转化。
    let list = new Set();
    list.add(1)
    list.add(2)
    list.add(1)
    console.log('list',list);

    let  arr = [1,3,4,3,4,2, '2']
    let list2 = new Set(arr)
    console.log('list2',list2);
}
{
    let arr = ['add', 'delete', 'clear', 'has']
    let list = new Set(arr)
    console.log('list.has("add")',list.has("add"));
    console.log('list.has("add")',list.delete("add"), list);
    list.clear()
    console.log('list',list);
}

{
    // set loop
    let arr = ['add', 'delete', 'clear', 'has']
    let list = new Set(arr)
    for(let key of list.keys()){
        console.log('key',key);
        
    }
    for(let value of list.values()){
        console.log('value',value);
        
    }
    for(let value of list){
        console.log('value',value);
        
    }
    for (let [key, value] of list.entries()){
        console.log('key,value',key,value);
        
    }
    list.forEach(item => console.log('item',item) )

}

{
    // 没有 size clear 方法，  不能遍历, 只能设置对象
    let weaklist = new WeakSet()
    let arg = {}

    weaklist.add(arg)
    console.log('weaklist',weaklist);
    
}

{
    // map.set 设置值
    let map = new Map()
    let arr = ['123']
    map.set(arr,456)
    console.log('map,map.get(arr)',map,map.get(arr));
    
}

{
    let map = new Map([['a',123],['b',456]])
    console.log('map',map);
    console.log('map.size',map.size);
    console.log('delete',map.delete('a'),map)
    console.log('clear',map.clear(),map)
}

{
    // 可以接受的key 必须是对象
    let weakmap = new WeakMap()
    let o = {}
    weakmap.set(o, 123)
    console.log('weakmap.get(o)',weakmap.get(o));
    
}
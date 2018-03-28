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

{
    // 数据结构横向对比。 增 删 改 查
    let map = new Map()
    let array = []
    // 增
    map.set('t',1)
    array.push({t:1});
    console.info('map-array-add', map, array)

    // 查
    let map_exist = map.has('t')
    let array_exist = array.find(item => item.t)
    console.info('map-array-find', map_exist, array_exist)

    // 改
    map.set('t', 2)
    array.forEach((item,index) => {
        return item.t ? item.t = 2 : item;
    })
    console.info('map-array-modify', map, array)

    // 删
    map.delete('t')
    let index = array.findIndex(item => item.t)
    array.splice(index,1)
    console.info('map-array-empty', map, array)
}

{
    // set he array 对比
    let set = new Set()
    let array = []
    set.add({t:1})
    array.push({t:1});
    console.info('set-array-add', set, array)

    // 查
    let set_exist = set.has({t:1})
    let array_exist = array.find(item => item.t)
    console.info('set-array-find', set_exist, array_exist)

    // 改
    set.forEach(item => item.t ? item.t =2 : '')
    array.forEach(item => item.t ? item.t =2 : '')
    console.info('set-array-modify', set, array)

    // 删
    set.forEach( item  => item.t ? set.delete(item) : '')
    let index = array.findIndex(item => item.t)
    array.splice(index,1)
    console.info('set-array-empty', set, array)
}

{
    // 优先使用 map ，唯一性要求比较高用 set ，放弃 array && object 来做数据存储类型。
    // map set object 对比
    let item = {t:1}
    let map = new Map()
    let set = new Set()
    let obj = {}

    //增
    map.set('t',1)
    set.add(item)
    obj['t'] = 1
    console.info('map-set-obj', obj, map ,set)

    //查
    console.info(
        {
            map_exist: map.has('s'),
            set_exist: set.has(item),
            obj_exist: 't' in obj
        }
    )

    // 改
    map.set('t', 2)
    item.t =2
    obj['t'] = 2
    console.info('map-set-obj-modify', obj, map ,set)

    //删
    map.delete('t')
    set.delete(item)
    delete obj['t']
    console.info('map-set-obj-empty', obj, map ,set)
}
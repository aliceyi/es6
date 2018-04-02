// 什么是iterator  基本用法  for of

{
    let arr = ['hello', 'world']
    let map = arr[Symbol.iterator]()
    console.log(map.next());
    console.log(map.next());
    console.log(map.next());

}
{
    // 自定义
    let obj = {
        start: [1,3,2],
        end: [7,9,8],
        [Symbol.iterator](){
            let self = this
            let index = 0
            let arr = self.start.concat(self.end)
            let len = arr.length
            return {
                next() {
                    if(index<len){
                        return {
                            value: arr[index++],
                            done: false
                        }
                    }else {
                        return{
                            value: arr[index++],
                            done: true
                        }
                    }
                }
            }

        }
    }
    for(let key of obj){
        console.log(key)
    }
}

{
    let obj = {
        start: [1,3,4],
        end: [5,6,7]
    }
    let arr = obj.start.concat(obj.end)
    console.log(arr);
    for(let key of arr) {
        console.log(key);
    }
}
// 什么是iterator  基本用法  for of

{
    let arr = ['hello', 'world']
    let map = arr[Symbol.iterator]()
    console.log(map.next());
    console.log(map.next());
    console.log(map.next());

}
{
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
                            done: true
                        }
                    }else {
                        return{
                            value: arr[index++],
                            done: false
                        }
                    }
                }
            }

        }
    }
    console.log('======asdfsda', obj);
    for(let key of obj){
        console.log(key)
    }

}
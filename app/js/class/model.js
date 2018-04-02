
 // import export
// export let A = 123
// export function test() {
//     console.log('test');
    
// }
// export class Hello {
//     test(){
//         console.log('class test');
//     }
// }

let A = 123
let test = () => {
    console.log('test');
}
class Hello {
    test() {
        console.log('class test')
    }
}
export default {
    A,
    test,
    Hello
}
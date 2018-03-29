import 'babel-polyfill';
import letConst from './class/class'

class Test {
    constructor() {
        this.a ='hellossssaaa'
    }
}

let test = new Test();

document.body.innerHTML = test.a
import 'babel-polyfill';
import letConst from './class/let_const'

class Test {
    constructor() {
        this.a ='hellossssaaa'
    }
}

let test = new Test();

document.body.innerHTML = test.a
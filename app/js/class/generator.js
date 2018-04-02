{
    let tell = function* () {
        yield 'a';
        yield 'b'
        return 'c'
    }
    let k = tell()
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
}
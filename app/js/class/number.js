{
    console.log('0B1110010',0B1110010);
    console.log('0o767',0o767);
}
{
    // 无尽
   console.log('15', Number.isFinite(15));
   console.log('NaN', Number.isFinite(NaN));
   console.log('1/0', Number.isFinite(1/0));
   console.log('Number.isNaN(NaN)',Number.isNaN(NaN));
   console.log('Number.isNaN(0)',Number.isNaN(0));
}

{
    // 判断是否整数
    console.log('Number.isInteger(25)',Number.isInteger(25));
    console.log('Number.isInteger(25.0)',Number.isInteger(25.0));
    console.log('Number.isInteger(25.1)',Number.isInteger(25.1));
    console.log('Number.isInteger("25")',Number.isInteger("25"));
}

{
    // 数的最大上限
    console.log('Number.MAX_SAFE_INTEGER',Number.MAX_SAFE_INTEGER);
    // 数的最小上限
    console.log('Number.MIN_SAFE_INTEGER',Number.MIN_SAFE_INTEGER);
    // 数是否是安全的
    console.log('Number.isSafeInteger(10)',Number.isSafeInteger(10));
    console.log('Number.isSafeInteger("a")',Number.isSafeInteger("a"));
}
{
    // 判断带小数的整数部分
    console.log('Math.trunc(4.1)',Math.trunc(4.1));
    console.log('Math.trunc(4.9)',Math.trunc(4.9));
}

{
    // 判断是否是数字，正负数
    console.log('Math.sign(-5)',Math.sign(-5));
    console.log('Math.sign(0)',Math.sign(0));
    console.log('Math.sign(5)',Math.sign(5));
    console.log('Math.sign("50")',Math.sign("50"));
    console.log('Math.sign("asdfb")',Math.sign("asdfb"));
}

{
    // 立方根， 三角函数， 对数
    console.log('-1',Math.cbrt(-1));
    console.log('8',Math.cbrt(8));
}
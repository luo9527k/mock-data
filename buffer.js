// buffer 与字符串的转换
// const buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);

// console.log(buf_4.toString()); //默认utf-8

// []
// const buf = Buffer.from('hello');
// console.log(buf[0].toString(2));
// console.log(buf)
// buf[0] = 95;
// console.log(buf.toString()) //_ello

//溢出
// const buf = Buffer.from('world');
// buf[0] = 361;

//中文
// const buf = Buffer.from('你好');
// buf[0] = 361;
// console.log(buf);

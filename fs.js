//导入fs模块
const fs = require('fs');

//写入文件
// fs.writeFile('./test.txt', '这是嘛呀', (err) => {
//   if (err) {
//     console.log('失败');
//     return;
//   }
//   console.log('成功');
// });

//同步写入文件
// fs.writeFileSync('./test.txt', 'rootbody');

//追加appendFile
// fs.appendFile('./text.txt', ',这些都是嘛呀', (err) => {
//   if (err) {
//     console.log('写入失败');
//   } else {
//     console.log('写入成功');
//   }
// });

// 同步写入
fs.appendFileSync('./text.txt', ',\r\n嗨嗨嗨');

fs.writeFile('./text.txt', '六六六', { flag: 'a' }, (err) => {
  if (err) {
    console.log('error');
  } else {
    console.log('sucess');
  }
});

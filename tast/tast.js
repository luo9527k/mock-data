// 导入fs模块写入文件
const fs = require('fs');

// fs.writeFile('./Tast.txt', '嗨嗨嗨', (err) => {
//   if (err) {
//     console.log('error');
//     return;
//   }
//   console.log('susses');
// });

// fs.writeFileSync('./Tast.txt', '哟哟哟', (err) => {
//   if (err) {
//     console.log('error');
//   } else {
//     console.log('succes');
//   }
// });

fs.appendFile('./Tast.txt', '歪歪歪', (err) => {
  if (err) {
    console.log('c');
  } else {
    console.log('s');
  }
});

fs.appendFileSync('./Tast.txt', 'Shannon'); //同步追加

fs.writeFile('./Tast.txt', 'TAST', { flag: 'a' }, (err) => {
  if (err) {
    console.log('败');
  } else {
    console.log('成');
  }
});

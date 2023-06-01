//导入fs
const fs = require('fs');

//创建流式写入对象
const ws = fs.createWriteStream('./root.txt');

//write
ws.write('梅花香自苦寒来， 腊月寒冬不打慌');
ws.write('红烧肉、麻辣烫， 美食丰盛任你尝');
ws.write('春天来临花开放， 阳光明媚人心畅');
ws.write('口水流淌不停歇， 美好生活不打烊');

//关闭通道
ws.close();

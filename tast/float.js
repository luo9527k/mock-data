const fs = require('fs');

const tw = fs.createWriteStream('./root.txt');

tw.write('这是嘛呀');
tw.write('确实');

//导入mock
const Mock = require('mockjs');

const data = Mock.mock({
  //生成的随机数组中包含5-10 个元素
  'list|5-10': [
    //数组中的元素是一个对象
    { 'id|+1': 0 },
  ],
});

console.log(data);

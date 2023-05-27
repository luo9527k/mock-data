/*
  随机生成一些简单的数据类型
*/

const Mock = require('mockjs');

const data = Mock.mock({
  'number|1-90': 0, //从0开始随机生成1-90的数值
  'b|3': '$', //打印3个$
  'c|3-5': '&', //打印3-5个&
  a: true, //打印/返回的a永远为true
  'b|1-2': true, //返回布尔值
});

console.log(data);

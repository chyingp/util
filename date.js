/**
 * @author 程序猿小卡
 * @date 2014.03.25
 * @fileoverview date的一些小记录
*/
(function(){

// 初始化方法
var d = new Date();  // 根据当前时间创建Date实例
d = new Date(date.getTime() - 1000);  // 根据传入的毫秒...
d = new Date(2014, 2, 25);  // 根据传入的年、月、日...，具体为 new Date(年, 月, 日 [, 时, 分, 秒, 毫秒 ])
                               // 可参考https://developer.mozilla.org/zh-CN/docs/JavaScript/Reference/Global_Objects/Date

// 从Date 实例上获取各种信息
console.log(d - 0);  // 输出毫秒
console.log(d.getTime());  // 输出毫秒

var year = d.getFullYear(); // 输出完整年份，如2014
var month = d.getMonth();  // 输出月份（2），从0开始计数，0代表1月，1代表2月...
var date = d.getDate(); // 输出当前日期（25），从1开始计数,
var day = d.getDay(); // 获取当前星期几（2），从0开始计数，0为星期天，1为星期一。。。wtf！！


})();

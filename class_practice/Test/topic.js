var month;
var date;
const LimitDate=31;
do{
month = prompt("請輸入月份", "01");
}while(month>12||month<0);
do{
date = prompt("請輸入日期", "01");
}while(date>31||date<0);

var topic = [
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "條件判斷"
];

var startDate = new Date();
function setMonthAndDay(startMonth, startDay) {
    //一次設定好月份與日期
    startDate.setMonth(startMonth - 1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(month,date);

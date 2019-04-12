var clock = new Vue({
    el:'#clock',
    data:{
        time: '',
        date: ''
    },
})

var week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
var timerID = setInterval(updateTime,1000);
updateTime();

function updateTime(){
    var dateBefore = new Date();
    clock.time =
        zeroPadding(dateBefore.getHours(),2) + ':' +
        zeroPadding(dateBefore.getMinutes(),2) + ':' +
        zeroPadding(dateBefore.getSeconds(),2);
    clock.date =
        zeroPadding(dateBefore.getFullYear(),4) + '-' +
        zeroPadding(dateBefore.getMonth()+1,2) + '-' +
        zeroPadding(dateBefore.getDate(),2) + ' ' +
        week[dateBefore.getDay()]; //要素番号が返ってくる
};

//秒数など1桁になる時に見栄えが悪いのでゼロを前につける
function zeroPadding(num,digit){
    var zero = '';
    for(var i = 0; i < digit; i++){
        zero += '0';
    }
    //ここで桁数分取り除く
    return(zero + num).slice(-digit);
}


const time=document.querySelector('#time');
const timeFormat = document.querySelector('#timeformat');

const showTime=()=>{
    let data =new Date();

    let hr=data.getHours();
    let min=data.getMinutes();
    let sec=data.getSeconds();

    hr=hr<10 ?`0${hr}`: hr;
    min=min<10?`0${min}`:min;
    sec=sec<10?`0${sec}`:sec;

    time.innerHTML=`${hr} : ${min} :${sec}`;
    
    timeFormat.innerHTML= hr>12 ?"PM"  : "AM";
}


document.addEventListener('DOMContentLoaded',()=>{
    setInterval(showTime, 1000);
});
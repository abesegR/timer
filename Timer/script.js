const countTimer = document.querySelector('.js-timer');
const stopBtn = document.querySelector('.js-stop');
const startBtn = document.querySelector('.js-start');
const resetBtn = document.querySelector('.js-reset');


let timer = 0;
let intervalTimer;

let count = 0;

function BtnStart(){
    console.log("Button start function initialized");
    count++;
    if(count<2){
        intervalTimer = setInterval(()=>{
            timer++;
            countTimer.innerHTML = timer;
        },1000);
    }else{
        console.log("Multi-clicks error")
    }
}

function BtnStop(){ 
    clearInterval(intervalTimer);
    console.log("Button stop function initialized");
}

function BtnReset(){
    console.log("Button reset function initialized");
    countTimer.innerHTML = 0;
    timer = 0;
}


stopBtn.addEventListener('click',BtnStop);
startBtn.addEventListener('click',BtnStart);
resetBtn.addEventListener('click',BtnReset);





        








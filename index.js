let timeleft = document.getElementById('time-left');
let scoreElement = document.getElementById('score');

let score = 0;
var timer;
let counter=10;
function begin(){
    clearInterval(timer);
    counter=10;
    timeleft.innerHTML=counter;
    score = 0;
    scoreElement.innerHTML=score;
    let list=document.getElementsByClassName("mole");
    list[0].addEventListener('click',scorefn);
    timer = setInterval(()=>{
        counter--;
        timeleft.innerHTML=counter;
        changeMolePos();
        if(counter==0){
            clearInterval(timer);
            let list = document.getElementsByClassName("mole");
            list[0].removeEventListener('click',scorefn);
        }
    },1000);
}

function reset(){
    clearInterval(timer);
    counter=10;
    timeleft.innerHTML=counter;
    score = 0;
    scoreElement.innerHTML=score;
}

function getRandomVal(){
    return Math.floor(Math.random()*9)+1;
}
function changeMolePos(){
    let list = document.getElementsByClassName("mole");
    list[0].removeEventListener('click',scorefn);
    list[0].classList.remove("mole");
    document.getElementById(getRandomVal()).classList.add("mole");
    list=document.getElementsByClassName("mole");
    list[0].addEventListener('click',scorefn);
}
function scorefn(){
    score++;
    scoreElement.innerHTML=score;
}

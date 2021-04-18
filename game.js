

var time = 20;
var timerId;

function startTimer() {
    time = 20;
    timer.innerHTML = time;
    timerId = setInterval(() => {
        time--;
        if (time == 0) location.href = "./gameover.html?score=" + score;
        timer.innerHTML = time;
    }, 1000);
}

function resetTime(intervalId) {
    clearInterval(intervalId);
    startTimer();
}

startTimer();

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const modulus = document.getElementById("modulus");

var number1Box = document.getElementById("number1");
var number2Box = document.getElementById("number2");
var number3Box = document.getElementById("number3");

var number1 = Math.round(Math.random()*100);
var number2 = Math.round(Math.random()*100);
var number3;

var operator, score = 0;

function randomise(){
     number1 = Math.round(Math.random()*100);
     number2 = Math.round(Math.random()*100);

     if(number1 < number2){
         var extra = number1;
         number1 = number2;
         number2 = extra;
        }
     operator = Math.round(Math.random()*5);
     switch(operater){
         case 1:
         number3 = number1+number2
         break;

         case 2:
         number3 = number1-number2 
        break;

         case 3:
            number3 = number1*number2 
        break;
         
            case 4:
         number3 = Math.floor(number1 / number2)
         break;

         case 5:
         number3 = number1 % number2
         break;

         case 0:
            randomise();

        }
     number1Box.innerHTML = number1;
     number2Box.innerHTML = number2;
     number3Box.innerHTML = number3;

}

randomize();


plus.onclick=()=>{
    if ((number1 + number2) === number3){
        score++;
        randomise();
        resetTime(timerId);
    } else{
        location.href="./gameover.html?score="+score;
    }
}

minus.onclick=()=>{
    if ((number1 - number2) === number3){
        score++;
        randomise();
        resetTime(timerId);
    } else{
        location.href="./gameover.html?score="+score;
    }
}

multiply.onclick=()=>{
    if ((number1 * number2) === number3){
        score++;
        randomise();
        resetTime(timerId);
    } else{
        location.href="./gameover.html?score="+score;
    }
}

divide.onclick=()=>{
    if ((Math.floor(number1 / number2)) === number3){
        score++;
        randomise();
        resetTime(timerId);
    } else{
        location.href="./gameover.html?score="+score;
    }
}

modulus.onclick=()=>{
    if ((number1 % number2) === number3){
        score++;
        randomise();
        resetTime(timerId);
    } else{
        location.href="./gameover.html?score="+score;
    }
}
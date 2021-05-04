const start = document.querySelector('.first');
const middle = document.querySelector(".middle");
const third = document.querySelector(".third");

const lights = ['red', 'yellow', 'green'];

let i = 0;
let m = 1;
let t = 2;

start.querySelector(`div:nth-child(${i + 1})`).classList.toggle(lights[i]);
middle.querySelector(`div:nth-child(${i + 2})`).classList.toggle(lights[m]);
third.querySelector(`div:nth-child(${i + 3})`).classList.toggle(lights[t]);

let startLights = start.querySelectorAll('div');
let middleLights = middle.querySelectorAll('div');
let thirdlights = third.querySelectorAll('div');

setInterval(() => {
  
  
    startLights[i].classList.remove(lights[i]);
    middleLights[m].classList.remove(lights[m]);
    thirdlights[t].classList.remove(lights[t]);
    i++;
    m++;
    t++;

    if( i == 3 ){
        i = 0;
    }
    if( m == 3 ){
        m = 0;
    }
    if(t == 3) {
        t = 0;
    }

   for(let j = 0; j < startLights.length; j++){
       if(j == i){
           startLights[j].classList.toggle(lights[i]);
       }
   } 
   for(let j = 0; j < middleLights.length; j++){
        if(j == m){
            middleLights[j].classList.toggle(lights[m]);
        }
    }

    for(let j = 0; j < thirdlights.length; j++){
        if(j == t) {
            thirdlights[j].classList.toggle(lights[t]);
        }
    }
   
}, 5000)










   /*  let colors = () => {
        document.querySelector(".red").style.background = "red";
        document.querySelector(".yellow").style.background = "yellow";
        document.querySelector(".green").style.background = "green";
    } */



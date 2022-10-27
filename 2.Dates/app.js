// -- exe1 -- //
const calcTime = (city, offset) =>{
    var b = new Date();
    var utc = b.getTime() + (b.getTimezoneOffset()* 60000);
    var nd = new Date(utc + (3600000* offset));
    return "local time of " + city + nd.toLocaleString();
}

console.log(calcTime('Anchorage (USA)','-8'))
console.log(calcTime('Reykjavik (Iceland)','0'))
console.log(calcTime('Saint-Petersburg (Russia)','+3'))

// -- exe2 --//
let date_1 = new Date('1999/07/22');
let date_2 = new Date();

const days = (date_1, date_2) =>{
    let difference =date_2.getTime() - date_1.getTime() ;
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
}
console.log(days(date_1, date_2) +" days since your are alive");

// -- exe3 --//
// let hours = new Date().getTime();
// let updatedHours = new Date(hours + 80000 *1000 * 3600);
// const dates = updatedHours.toDateString();
// const time = updatedHours.toLocaleTimeString();
// console.log(dates);
// console.log(time);
// const inputhours = document.querySelector('#hourss');
// const futurTime = () => {
//     let hours = new Date().getTime();
    
//     let updatedHours = new Date(hours + (inputhours.value) *1000 * 3600);
//     const dates = updatedHours.toDateString();
//     const time = updatedHours.toLocaleTimeString();
//     console.log(dates);
//     console.log(time);
// }
// hourss.addEventListener('keyup', futurTime);

// -- exe4 --//
const refresh = () => {
const todayday = document.querySelector(".DAY");
const todaydte = document.querySelector(".DATE");
const todayyear = document.querySelector(".YEAR");

const todayTime = document.querySelector(".time");
let newDte = new Date();

const weekdays =["Sunday",
         "Monday",
         "Tuesday",
         "Wednesday",
        "Thursday",
        "Friday",
         "Saturday"]


    const r = weekdays[newDte.getDay()];
    todayday.innerHTML = r;
    const D = newDte.getUTCDate();
    const M = newDte.getUTCMonth();
    todaydte.innerHTML = D + "/" + M;
    todayyear.innerHTML = newDte.getFullYear();
    todayTime.innerHTML = newDte.toLocaleTimeString();
    
}

const is24Hour = false,
    timeDisplay = document.querySelector(".time");
   


const changeTo12 = () => {
        let currentDate = new Date(),
        hours = currentDate.getHours(),
        minutes = currentDate.getMinutes(),
        seconds = currentDate.getSeconds();

    if(is24Hour) {
        timeDisplay.innerText = hours + ":" + minutes + ":" + seconds;
    }
    else {
        var suffix = hours >= 12 ? "PM" : "AM",
            hours12 = hours % 12;
        
        timeDisplay.innerText = hours12 + ":" + minutes + ":" + seconds + " " + suffix;
    }

}

var changeFormat = function() {
    is24Hour = !is24Hour;
}

setInterval(refresh, 1000)
 
const myStoptime24 = () => {
   clearInterval(refresh);
}

setInterval(changeTo12, 1000)

const myStoptime12 = () => {
    clearInterval(changeTo12);
}
 timeDisplay.addEventListener('click', changeTo12);
window.setInterval(changeTo12, 100);


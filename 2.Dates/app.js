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
const inputhours = document.querySelector('#hourss');
const futurTime = () => {
    let hours = new Date().getTime();
    
    let updatedHours = new Date(hours + (inputhours.value) *1000 * 3600);
    const dates = updatedHours.toDateString();
    const time = updatedHours.toLocaleTimeString();
    console.log(dates);
    console.log(time);
}
hourss.addEventListener('keyup', futurTime);

// -- exe4 --//

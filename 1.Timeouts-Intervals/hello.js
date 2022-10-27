
// exe 1

// let str = 'prout'.split('');

// const interval = setInterval(() => {
//     document.write(str[0]);
//   str = str.slice(1);
  
//   if (!str.length) { clearInterval(interval);}}, 1000);

// --  exe 2 --//
//  const _initTime = Date.now()


// const getElapsedTime = () => {
//     let time = (Date.now() - _initTime);
//     if ((time) >= 60000 && (time) < 61000 )
//     { 
//         document.write("1 minute has past");
//     }if ((time) >= 120000 && (time) < 121000 )
//     { 
//         document.write("2 minute has past");
//     }
   
//   return Number((time) / 1000).toFixed(2) + 's';
// }

// const onLoadScreen = () => {
// console.log(getElapsedTime());
// }

// setInterval(onLoadScreen, 1000);


// --  exe 3 --//
 


const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const moles = document.querySelectorAll('.mole');
  let lastHole;
  let timeUp = false;
  let score = 0;

  function randomTime(min, max) { 
    return Math.round(Math.random() * (max - min) + min);
  }

  function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
      return randomHole(holes);
    }
    lastHole = hole;
    return hole;
  }

  function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
      hole.classList.remove('up');
      if (!timeUp) peep();
    }, time);
  }

  function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 10000)
  }

  function whack(e) {
    if(!e.isTrusted) return; 
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
  }

  moles.forEach(mole => mole.addEventListener('click', whack));
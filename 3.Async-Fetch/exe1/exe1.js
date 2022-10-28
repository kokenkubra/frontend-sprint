
// const request = fetch('bocode.json');
// console.log(request) // Promise is pending

const url = 'http://127.0.0.1:5500/exe1/bocode.json';


const getISS = async () => {
   const inBody = document.querySelector('body');

  const ul = document.createElement('ul');
  const response = await fetch(url);
  const datas = await response.json();

  for (i = 0; i <= datas.length - 1; i++) {
    const li = document.createElement('li');	// create li element.
   
    li.innerHTML = datas[i];	  
    ul.appendChild(li);

  }
  inBody.appendChild(ul);
  console.log(inBody);
  };
  

  getISS();

 
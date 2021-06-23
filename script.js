'use strict';
const table = document.querySelector('table');
let payType = document.querySelector('#payment');
let name = document.querySelector('#nameInput');
let date = document.querySelector('#dateInput');
let amount = document.querySelector('#amountInput');



const remove = document.createElement('button');
remove.innerHTML = '<a>x</>';

const userData = userInput => {
  let td = document.createElement('td');
  td.innerText = `${userInput.value}`;
  let tr = document.createElement('tr');
  tr.appendChild(td);
  table.appendChild(tr);
}




document.querySelector('#submitBtn').addEventListener('click', (e) => {
    userData(payType);
    userData(name);
    userData(date);
    userData(amount);
  
  

//   remove.addEventListener('click', (e) => {
//     tr.remove();
//  });
 
  e.preventDefault();
});


//   delBtn();
//   // td = document.createElement('td');
//   // td = remove;
//   // tr.appendChild(td);











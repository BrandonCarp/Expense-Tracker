'use strict';
const table = document.querySelector('table');
let payType = document.querySelector('#payment');
let name = document.querySelector('#nameInput');
let date = document.querySelector('#dateInput');
let amount = document.querySelector('#amountInput');


// create tr => create td, add inputs to each td tr.appendChild(td) each one. 
// Look up how to save to local storage


document.querySelector('#submitBtn').addEventListener('submit', (e) => {
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.appendChild(payType.value);
  tr.appendChild(td);
  table.appendChild(tr);
});






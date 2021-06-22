'use strict';
const table = document.querySelector('table');
const form = document.querySelector('form');
let payType = document.querySelector('#payment');
let name = document.querySelector('#nameInput');
let date = document.querySelector('#dateInput');
let amount = document.querySelector('#amountInput');
const remove = document.createElement('button');
remove.innerHTML = '<a>x</>';



document.querySelector('#submitBtn').addEventListener('click', (e) => {
 
  
  let td = document.createElement('td');
  td.innerText = `${payType.value}`;
  let tr = document.createElement('tr');
  tr.appendChild(td);

  td = document.createElement('td');
  td.innerText = `${name.value}`;
  tr.appendChild(td);


  td = document.createElement('td');
  td.innerText = `${dateInput.value}`;
  tr.appendChild(td);



  td = document.createElement('td');
  td.innerText = `${amount.value}`;
  tr.appendChild(td);

 const delBtn = function() {
   td = document.createElement('td');
   td = remove;
   tr.appendChild(td);
   return;
 }
  delBtn();
  // td = document.createElement('td');
  // td = remove;
  // tr.appendChild(td);

  table.appendChild(tr);

  remove.addEventListener('click', (e) => {
    tr.remove();
 });
 
  

  e.preventDefault();
});










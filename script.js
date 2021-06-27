'use strict';
// Inputs
const currency = document.querySelector('#payment');
const item = document.querySelector('#name');
const theDay = document.querySelector('#date');
const cost = document.querySelector('#amount');
const tBody = document.querySelector('#tBody');



let newRow = function(theCurrency, theItem, theDate, theCost) {
  let rowElement = document.createElement('tr');
  let currencyElement = document.createElement('td');
  let itemElement = document.createElement('td');
  let dateElement = document.createElement('td');
  let costElement = document.createElement('td');
  let delElement = document.createElement('td');

  

  currencyElement.textContent = currency.value;
  itemElement.textContent = item.value;
  dateElement.textContent = theDay.value;
  costElement.textContent = cost.value;
  costElement.style = 'color: red';



  delElement.innerHTML = `<button>x</button`;
  delElement.className = 'delBtn';
  
 delElement.firstChild.addEventListener('click', e => {
   rowElement.remove();
 });


 if(item.value != '' && cost.value != '' && theDay.value != '') {
  tBody.appendChild(rowElement);

  rowElement.appendChild(currencyElement);
  rowElement.appendChild(itemElement);
  rowElement.appendChild(dateElement);
  rowElement.appendChild(costElement);
  rowElement.appendChild(delElement);
 } else {
   alert('Fill out inputs');
 }


  item.value = '';
  theDay.value = '';
  cost.value = '';
}



document.querySelector('#submitBtn').addEventListener('click', (e) => {

  newRow(currency.value, item.value, theDay.value, cost.value);

e.preventDefault();
});



'use strict';
// Inputs
const currency = document.querySelector('#payment');
const item = document.querySelector('#name');
const theDay = document.querySelector('#date');
const cost = document.querySelector('#amount');
// Non Inputs
const tBody = document.querySelector('#tBody');
const delBtn = document.createElement('button');



let newRow = function(theCurrency, theItem, theDate, theCost) {
  let rowElement = document.createElement('tr');
  let currencyElement = document.createElement('td');
  let itemElement = document.createElement('td');
  let dateElement = document.createElement('td');
  let costElement = document.createElement('td');

  currencyElement.textContent = currency.value;
  itemElement.textContent = item.value;
  dateElement.textContent = theDay.value;
  costElement.textContent = cost.value;


  tBody.appendChild(rowElement);

  rowElement.appendChild(currencyElement);
  rowElement.appendChild(itemElement);
  rowElement.appendChild(dateElement);
  rowElement.appendChild(costElement);



  item.value = '';
  theDay.value = '';
  cost.value = '';



}







document.querySelector('#submitBtn').addEventListener('click', (e) => {
  newRow(currency.value, item.value, theDay.value, cost.value);

e.preventDefault();
});



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

  if(currency.value === 'card') {
    currencyElement.innerHTML = '<i class="far fa-credit-card"></i>';
  } else if(currency.value == 'crypto') {
    currencyElement.innerHTML = '<i class="fab fa-btc"></i>';
  }  else {
    currencyElement.innerHTML = '<i class="fas fa-money-bill-wave"></i>';
  }

  if(currency.value === 'card') {
    costElement.innerHTML =  '<i class="far fa-credit-card">  </i> ' + cost.value;
   } else if(currency.value == 'crypto') {
    costElement.innerHTML = '<i class="fab fa-btc"></i>' + cost.value; 
    }   else {
      costElement.innerHTML = '<i class="fas fa-money-bill-wave"></i>'  + cost.value;
    }

  itemElement.textContent = item.value;
  dateElement.textContent = theDay.value;
  costElement.style = 'color: red';
  // Delete Button
  delElement.innerHTML = `<i class="fas fa-trash-alt"></i>`;
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


//  Saving to local storage  
 const localStorageExpense = localStorage.getItem('expenses');

 let expenses;
 if(localStorageExpense === null){
     expenses = []; 
 }  else {
   expenses = JSON.parse(localStorageExpense);
 }



 expenses.push(currency.value);
 expenses.push(item.value);
 expenses.push(theDay.value);
 expenses.push(cost.value);

 localStorage.setItem('expenses', JSON.stringify( expenses ) );

let expenseList = storage.getItem(expenses);



currency.value = '';
item.value = '';
theDay.value = '';
cost.value = '';
}



document.querySelector('#submitBtn').addEventListener('click', (e) => {

  newRow(currency.value, item.value, theDay.value, cost.value);

e.preventDefault();
});



'use strict';
// Inputs
const currency = document.querySelector('#payment');
const item = document.querySelector('#name');
const theDay = document.querySelector('#date');
const cost = document.querySelector('#amount');
const itemLocation = document.querySelector('#location');
const tBody = document.querySelector('#tBody');



let newRow = function(theCurrency, theItem, theLocation, theDate, theCost) {
  let rowElement = document.createElement('tr');
  let currencyElement = document.createElement('td');
  let itemElement = document.createElement('td');
  let locationElement = document.createElement('td');
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
  locationElement.textContent = itemLocation.value;
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
  rowElement.appendChild(locationElement);
  rowElement.appendChild(dateElement);
  rowElement.appendChild(costElement);
  rowElement.appendChild(delElement);
 } else {
   alert('Fill out inputs');
 }



 
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
  rowElement.appendChild(locationElement);
  rowElement.appendChild(dateElement);
  rowElement.appendChild(costElement);
  rowElement.appendChild(delElement);
 } else {
   alert('Fill out inputs');
 };

}



document.querySelector('#submitBtn').addEventListener('click', (e) => {

  newRow(currency.value, itemLocation.value, item.value, theDay.value, cost.value);



currency.value = '';
itemLocation.value = '';
item.value = '';
theDay.value = '';
cost.value = '';
e.preventDefault();
});



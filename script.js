'use strict';

const tBody = document.querySelector('tbody');
const delBtn = document.createElement('button');


let expenses =  {
  currency: document.querySelector('#payment').value,
  purchase: document.querySelector('#nameInput').value,
  date: document.querySelector('#dateInput').value,
  cost: document.querySelector('#amountInput').value
};

const userInputs = [
  document.querySelector('#payment'),
  document.querySelector('#nameInput'),
  document.querySelector('#dateInput'),
  document.querySelector('#amountInput')
];











document.querySelector('#submitBtn').addEventListener('click', (e) => {
 











e.preventDefault();
});



// const expenseAdded = function() {
//   tBody.append("<tr>" + "<td>" + `${payType.value}` + "</td>" + "<td>" + `${item.value}` + "</td>" + "<td>" + `${theDate.value}` + "</td>" + "<td>" + `${amount.value}` + "</td>" + "<td>");

// };


// if(`${item.value}` != null && `${item.value}` != '') {
//   expenseAdded();


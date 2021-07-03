const addButton = document.querySelector("#btn-add");
const inputElement = document.querySelector("#inputExpense");
const inputExpenseType = document.querySelector("#expenseType");
const totalAmount = document.querySelector("#heading-total");
const expenseTable = document.querySelector("#expenseTable");
const allExpenseTable = document.querySelector("#table"); 
let expenseAmount = 0;

totalAmount.textContent = expenseAmount;

//create an array to store all expenses

const allExpenses = [];

function addExpense(params) {
    const expenseItem = {};
    const textAmount = inputElement.value;
    const expenseType = inputExpenseType.value;
    const expense = parseInt(textAmount,10);

    expenseItem.desc = expenseType;
    expenseItem.amount = expense;

    allExpenses.push(expenseItem);
    expenseAmount = expenseAmount + expense;
    totalAmount.textContent = expenseAmount;
   
    allExpenseTable.innerHTML =  allExpenses.map( data => {
      return `<div>
      <div>${data.desc} :: ${data.amount}</div>
      </div>`
    }).join("");

    

    
}
addButton.addEventListener("click",addExpense);



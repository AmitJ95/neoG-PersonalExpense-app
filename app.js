const addButton = document.querySelector("#btn-add");
const inputExpense = document.querySelector("#inputExpense");
const inputExpenseType = document.querySelector("#expenseType");
let counter = 0;

function increment(params) {
    counter = inputExpense.value;
    ExpenseType = inputExpense.value;
    console.log({ExpenseType})
    console.log(counter);
}
addButton.addEventListener("click",increment);



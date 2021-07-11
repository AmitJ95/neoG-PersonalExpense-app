const addButton = document.querySelector("#button-addon2");
const inputExpense = document.querySelector("#inputExpense");
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
    const textAmount = inputExpense.value;
    const expenseType = inputExpenseType.value;
    const expense = parseInt(textAmount,10);

    expenseItem.desc = expenseType;
    expenseItem.amount = expense;
    expenseItem.moment = new Date();
    allExpenses.push(expenseItem);
    expenseAmount = expenseAmount + expense;
    totalAmount.textContent = "Total: "+expenseAmount;
   
    renderList(allExpenses); 
}
addButton.addEventListener("click",addExpense);

function deleteItem(dateValue) {
//  const newArr = [];
//  for(var i = 0; i<allExpenses.length; i++){
//    if(allExpenses[i].moment.valueOf() !== dateValue){
//       newArr.push(allExpenses[i]);
//    }
//  }

  //  const newArr = allExpenses.filter( expense => {
  //    if(expense.moment.valueOf () !== dateValue){
  //      return expense;
  //    }
  //  })

  const newArr = allExpenses.filter( expense => expense.moment.valueOf () !== dateValue)
  renderList(newArr);

}

function renderList(arrOfList){
  allExpenseTable.innerHTML =  arrOfList.map( data => {
      
    return createListItem(data)
    
  }).join("");
}



function createListItem({desc,amount,moment}) {
  return `<li class="list-group-item d-flex justify-content-between">
      <div class="d-flex flex-column">
          ${desc}
          <small class="text-muted">${getDateString(moment)}</small>
      </div>
      <div>
          <span class="px-5">
             ${amount}
          </span>
          <button 
          type="button" 
          class="btn btn-outline-danger btn-sm"
          onclick="deleteItem(${moment.valueOf()})">
              <i class="fas fa-trash-alt"></i>
          </button>
      </div>
  </li>`
}

function getDateString(moment) {
  return moment.toLocaleString('en-US',{
    year:'numeric',
    month:'long',
    day:'numeric',
  })
}
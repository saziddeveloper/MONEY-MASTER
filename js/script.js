// Function - re-useable input-field value in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
// Function- re-useable set value on area
function setElementInnerText(elementId, areaValue){
    const element = document.getElementById(elementId);
    element.innerText = areaValue;
}

// ----------------------------------------------------------------------
let balance = 0;
let totalSavings = 0;
// function-1: calculate total expenses & remaining balance
function calculateTotalExpenses(){
    const incomeAmount = getInputValue("income-amount");
    const foodExpensesAmount = getInputValue("food-expenses-amount");
    const rentExpensesAmount = getInputValue("rent-expenses-amount");
    const clothExpensesAmount = getInputValue("cloth-expenses-amount");
    if (isNaN(incomeAmount) || isNaN(foodExpensesAmount) || isNaN(rentExpensesAmount) || isNaN(clothExpensesAmount)){
        alert("Please! Input A Number");
        return;
    }
    const totalExpenses = foodExpensesAmount + rentExpensesAmount + clothExpensesAmount;
    setElementInnerText("total-expenses", totalExpenses);
    balance = incomeAmount - totalExpenses;
    setElementInnerText("balance-show", balance);
}
// function-2: calculate savings & remaining-balance
function calculateSavings(){
    const savingsAmount = getInputValue("save-amount");
    if (isNaN(savingsAmount)){
        alert("Please! Input A Number");
        return;
    }
    totalSavings = totalSavings + savingsAmount;
    if (savingsAmount <= balance){
        setElementInnerText("saving-amount", totalSavings);
        balance = balance - savingsAmount;
        setElementInnerText("balance-show", balance);
    }
    else {
        alert("Don't have balance for save");
    }
}
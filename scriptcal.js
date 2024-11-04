// Initialize total expenses
let totalExpenses = 0;

// Function to update the displayed total expenses
function updateTotalExpenses() {
    const totalElement = document.getElementById('totalExpenses');
    totalElement.textContent = totalExpenses.toFixed(2);
}

// Checklist functionality
document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value) {
        const li = document.createElement('li');
        li.textContent = taskInput.value;
        taskList.appendChild(li);
        taskInput.value = '';
    }
});

// Budget tracker functionality
document.getElementById('addExpenseBtn').addEventListener('click', function() {
    const expenseInput = document.getElementById('expenseInput');
    const amountInput = document.getElementById('amountInput');
    const expenseList = document.getElementById('expenseList');
    
    const amount = parseFloat(amountInput.value);
    
    if (expenseInput.value && !isNaN(amount) && amount > 0) {
        const li = document.createElement('li');
        li.textContent = `${expenseInput.value}: $${amount.toFixed(2)}`;
        expenseList.appendChild(li);
        
        // Update total expenses
        totalExpenses += amount;
        updateTotalExpenses();
        
        // Clear inputs
        expenseInput.value = '';
        amountInput.value = '';
    } else {
        alert("Please enter a valid expense and amount.");
    }
});

// Selecting DOM elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Event listener for the Add button
addBtn.addEventListener('click', addTask);

// Event listener for pressing "Enter" key inside input
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item (li)
    const li = document.createElement('li');

    // Create a span for the task text (allows clicking to mark complete)
    const span = document.createElement('span');
    span.textContent = taskText;
    span.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function () {
        taskList.removeChild(li);
    });

    // Append span and delete button to li, then li to taskList
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
}
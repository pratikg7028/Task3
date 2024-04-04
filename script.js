// Array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
    let input = document.getElementById("taskInput").value;
    if (input === "") {
        alert("Please enter a task!");
        return;
    }
    tasks.push(input); // Add task to the array
    renderTasks(); // Render tasks
    document.getElementById("taskInput").value = ""; // Clear input field
}

// Function to render tasks
function renderTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear previous tasks
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = task;
        // Add edit button
        let editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = function() {
            editTask(index);
        };
        li.appendChild(editButton);
        // Add delete button
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            deleteTask(index);
        };
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

// Function to edit a task
function editTask(index) {
    let newTask = prompt("Enter new task:", tasks[index]);
    if (newTask !== null) {
        tasks[index] = newTask;
        renderTasks();
    }
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Initial rendering of tasks
renderTasks();


const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Display task count
const taskCountDisplay = document.createElement('p');
taskCountDisplay.id = 'taskCount';
taskCountDisplay.textContent = 'Tasks: 0';
document.body.insertBefore(taskCountDisplay, taskList.parentElement);

// Update task count
function updateTaskCount() {
    const totalTasks = taskList.children.length;
    const completedTasks = document.querySelectorAll('.task-checkbox:checked').length;
    taskCountDisplay.textContent = `Tasks: ${totalTasks} (Completed: ${completedTasks})`;
}

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create task list item
    const taskItem = document.createElement('li');

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.classList.add('task-checkbox');
    taskCheckbox.addEventListener('change', updateTaskCount);

    const taskTextElement = document.createElement('p');
    taskTextElement.textContent = taskText;
    taskTextElement.classList.add('task-text');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-task');
    deleteButton.addEventListener('click', () => {
        taskItem.remove();
        updateTaskCount();
    });

    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);

    // Update task count
    updateTaskCount();

    // Clear input field
    taskInput.value = '';
}

// Event listener for add task button
addTaskButton.addEventListener('click', addTask);

// Allow adding task with Enter key
taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

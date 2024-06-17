document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');
    const categorySelect = document.getElementById('category-select');
    const dueDateInput = document.getElementById('due-date');
    const prioritySelect = document.getElementById('priority-select');

    addTaskButton.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskClick);

    function addTask() {
        const taskText = taskInput.value.trim();
        const category = categorySelect.value;
        const dueDate = dueDateInput.value;
        const priority = prioritySelect.value;

        if (taskText === '') return;

        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText} (Category: ${category}, Due: ${dueDate}, Priority: ${priority})</span>
            <div>
                <button class="complete-task" title="Mark as complete">Complete</button>
                <button class="delete-task" title="Delete this task">Delete</button>
            </div>
        `;

        taskList.appendChild(taskItem);
        taskInput.value = '';
    }

    function handleTaskClick(event) {
        if (event.target.classList.contains('complete-task')) {
            const taskItem = event.target.parentElement.parentElement;
            taskItem.classList.toggle('completed');
        } else if (event.target.classList.contains('delete-task')) {
            const taskItem = event.target.parentElement.parentElement;
            taskItem.remove();
        }
    }
});

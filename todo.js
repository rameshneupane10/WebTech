// Get references to HTML elements
const taskInput = document.getElementById("task");
const taskList = document.getElementById("task-list");

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    // Create a new task item
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        ${taskText}
        <button class="delete-button">Delete</button>
    `;

    // Add the task item to the list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";

    // Attach a delete task event
    const deleteButton = taskItem.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
        taskItem.remove();
    });
}

// Event listener for adding a new task
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("button").addEventListener("click", addTask);
    taskInput.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});

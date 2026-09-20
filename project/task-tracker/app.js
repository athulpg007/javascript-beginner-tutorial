const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const emptyMessage = document.getElementById('empty-message');
const filterButtons = document.querySelectorAll('.filter-button');

let tasks = [];
let currentFilter = "all";

function renderTasks() {
  taskList.innerHTML = "";

  const filteredTasks = tasks.filter((task) => {
    if (currentFilter === "completed") {
      return task.completed;
    }

    if (currentFilter === "pending") {
      return !task.completed;
    }

    return true;
  });

  if (filteredTasks.length === 0) {
    emptyMessage.textContent =
      currentFilter === "all"
        ? "No tasks available."
        : `No ${currentFilter} tasks available.`;

    emptyMessage.hidden = false;
    return;
  }

  emptyMessage.hidden = true;

  filteredTasks.forEach((task) => {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");

    if (task.completed) {
      taskItem.classList.add("completed");
    }

    taskItem.innerHTML = `
      <label class="task-label">
        <input type="checkbox" ${task.completed ? "checked" : ""}>
        <span>${task.name}</span>
      </label>
      <button class="delete-button" type="button">Delete</button>
    `;

    const checkbox = taskItem.querySelector('input[type="checkbox"]');
    const deleteButton = taskItem.querySelector(".delete-button");

    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      renderTasks();
    });

    deleteButton.addEventListener("click", () => {
      tasks = tasks.filter((currentTask) => currentTask.id !== task.id);
      renderTasks();
    });

    taskList.appendChild(taskItem);
  });
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskName = taskInput.value.trim();

  if (taskName === "") {
    return;
  }

  const newTask = {
    id: Date.now(),
    name: taskName,
    completed: false
  };

  tasks.push(newTask);
  taskInput.value = "";
  taskInput.focus();

  renderTasks();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;

    filterButtons.forEach((filterButton) => {
      filterButton.classList.remove("active");
    });

    button.classList.add("active");
    renderTasks();
  });
});

renderTasks();

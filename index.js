const newTask = document.getElementById("new-task-input");
const addTask = document.getElementById("add-task-button");
const tasks = document.getElementById("tasks");
const allTask = document.getElementById("all-task");
const active = document.getElementById("active");
const completed = document.getElementById("completed");
const clearCompleted = document.getElementById("clear-completed");
let arrAllTask = [];

function add() {
  const myTask = newTask.value.trim();
  if (myTask !== "") {
    if (arrAllTask.includes(newTask.value) === false) {
      arrAllTask.push(newTask.value);
      const newElement = document.createElement("div");
      const newText = document.createElement("div");
      const images = document.createElement("div");
      const delete_image = document.createElement("img");
      const tick_image = document.createElement("img");
      newText.setAttribute("class", "text");
      images.setAttribute("class", "images");
      newElement.setAttribute("class", "task");
      newElement.setAttribute("data-status", "active");
      tick_image.setAttribute("id", "tick-image");
      tick_image.onclick = completedTask;
      tick_image.src = "./images/tick.png";
      delete_image.setAttribute("id", "delete-image");
      delete_image.src = "./images/delete.png";
      delete_image.onclick = deleteTask;
      newText.innerText = newTask.value;
      newElement.appendChild(newText);
      images.appendChild(tick_image);
      images.appendChild(delete_image);
      newElement.appendChild(images);
      tasks.appendChild(newElement);
      newTask.value = "";
    } else {
      alert("Similar Task Found");
      newTask.value = "";
    }
  } else {
    alert("EMPTY TASK");
  }
}

function deleteTask(event) {
  const taskElement = event.target.closest("div").parentNode;
  tasks.removeChild(taskElement);
  for (let index = 0; index < arrAllTask.length; index++) {
    arrAllTask = arrAllTask.filter((input) => input != taskElement.textContent);
  }
  console.log(arrAllTask);
}

function completedTask(event) {
  const taskElement = event.target.closest("div").parentNode;
  if (taskElement.dataset.status === "active") {
    taskElement.style.textDecorationLine = "line-through";
    taskElement.setAttribute("data-status", "done");
  } else {
    taskElement.style.textDecorationLine = "none";
    taskElement.setAttribute("data-status", "active");
  }
}

function showAllTasks() {
  const allTasks = document.querySelectorAll(".task");
  allTasks.forEach((task) => {
    task.style.display = "flex";
  });
}

function showActiveTasks() {
  const allTasks = document.querySelectorAll(".task");
  allTasks.forEach((task) => {
    task.style.display = task.dataset.status === "active" ? "flex" : "none";
  });
}

function showCompletedTasks() {
  const allTasks = document.querySelectorAll(".task");
  allTasks.forEach((task) => {
    task.style.display = task.dataset.status === "done" ? "flex" : "none";
  });
}

function clearCompletedTasks() {
  const allTasks = document.querySelectorAll(".task");
  allTasks.forEach((task) => {
    if (task.dataset.status === "done") {
      tasks.removeChild(task);
      for (let index = 0; index < arrAllTask.length; index++) {
        arrAllTask = arrAllTask.filter((input) => input != task.textContent);
      }
    }
  });
}

addTask.addEventListener("click", add);
newTask.addEventListener("keypress", function (event) {
  if (event.key === "Enter") add();
});
allTask.addEventListener("click", showAllTasks);
active.addEventListener("click", showActiveTasks);
completed.addEventListener("click", showCompletedTasks);
clearCompleted.addEventListener("click", clearCompletedTasks);

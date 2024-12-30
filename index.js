const tasks = document.getElementById("tasks");
const addTask = document.getElementById("add-task");
const newTask = document.getElementById("new-task");
const tickImage= document.getElementById("tick-image");
const deleteImage= document.getElementById("delete-image");
const arrTask = [];
let count=0;
function add() {
  if( newTask.value != "") {
    count++;
  const newElement = document.createElement("div");
  const images=document.createElement("div");
  const delete_image=document.createElement("img");
  const tick_image=document.createElement("img");
  tick_image.setAttribute("id","tick-image")
  tick_image.onclick=function(){
  console.log("tick")
  }
  delete_image.setAttribute("id","delete-image")
  delete_image.src="./images/delete.png"
  tick_image.src="./images/tick.png"
  newElement.textContent = newTask.value;
  images.appendChild(tick_image)
  images.appendChild(delete_image)
  newElement.appendChild(images)
  tasks.appendChild(newElement);
  newTask.value = "";
  arrTask.push(newTask.value);
}
}
addTask.addEventListener("click", add);

var blurTask = document.querySelector('.card-list');
let getId;

function addTaskPopUp(tempVar){
    getId = tempVar;
    blurTask.classList.add("blur-effect-task");
    document.querySelector(".popup-add-task").style.display = 'block';
}

function closeTaskPopUp(){
    blurTask.classList.remove("blur-effect-task");
    document.querySelector(".popup-add-task").style.display = 'none';
}

function addTask(){
    console.log(getId);
    var taskName = document.querySelector("#input-add-task").value;
    if(taskName == ''){
        alert("Please Enter the Task Name");
        return;
    }
    
    var addTask = document.createElement('div');

    addTask.innerHTML = `<div class="task-row">
                            <div class="task-name">${taskName}</div>
                            <div><button class="mark-done">Mark As Done</button></div>
                        </div>`
    document.querySelector('.task-list').appendChild(addTask);

    var blurTask = document.querySelector('.card-list');
    blurTask.classList.remove("blur-effect-task");
    document.querySelector(".popup-add-task").style.display = 'none';
}

function markAsDone(){
    document.querySelector(".mark-done").classList.add("mark-done-clicked");
    document.querySelector(".task-row").classList.add("strike-content");
}

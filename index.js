const CardArray = [];
var addTaskID;
var popUpAddList = document.querySelector(".popup-add-list");
console.log(popUpAddList);
var add = document.querySelector(".add-button");
console.log(add)
add.addEventListener("click",()=>{
    console.log("Clicked");
    popUpAddList.style.display = "block";
    // popUpAddList.style.opacity = "1";
    var blur = document.querySelector(".heading");
    blur.classList.add("blur-effect-add-list");
    var blur1 = document.querySelector(".card-list-container");
    blur1.classList.add("blur-effect-add-list1");
})  
document.querySelector(".close-btn-popup").addEventListener("click",()=>{
    console.log("Close clicked");
    popUpAddList.style.display = "none";
    var blur = document.querySelector(".heading");
    blur.classList.remove("blur-effect-add-list");
    var blur1 = document.querySelector(".card-list-container");
    blur1.classList.remove("blur-effect-add-list1");
})

function addList(){
    // document.querySelector("#card-list-container").classList.add("card-list-container");
    console.log("List added");
    var listHeading = document.querySelector(".input-add-list-popup").value;
    console.log(listHeading);
    if(listHeading == ''){
        alert("Please Enter the List Name");
        return;
    }
    var CardObj = {};
    CardObj.Heading = listHeading;
    popUpAddList.style.display = "none";
    var blur = document.querySelector(".heading");
    blur.classList.toggle("blur-effect-add-list");
    var blur1 = document.querySelector(".card-list-container");
    blur1.classList.toggle("blur-effect-add-list1");

    var addList = document.createElement('div');
    CardObj.addTaskIdentifier = "addTaskID"+(CardArray.length+1);
    var addTaskID = CardObj.addTaskIdentifier;

    addList.innerHTML=`<div class="card-list">
                        <div class="heading-card-list">
                            ${listHeading}<hr style="border: 0px;background-color: blue;height: 3px;">
                        </div>
                        <div class="task-list">
                            <div class="task-row">
                            </div>
                        </div>
                        <div class="footer-card-list">
                            <button class="add-button-card-list">
                                <i class="fa fa-trash-o" style="color: blue;"></i>
                            </button>
                            <button class="add-button-card-list" id=${addTaskID} onclick="addTaskPopUp(this.id)">
                                <i class="fa fa-plus-circle" style="color: blue;"></i>
                            </button>
                        </div>
                    </div>`;

    document.querySelector(".card-list-container").appendChild(addList);

    CardArray.push(CardObj);
}



//Add tasks
function addTaskPopUp(taskID){
    addTaskID = taskID;
    var blurTask = document.querySelector('.card-list');
    blurTask.classList.add("blur-effect-task");
    document.querySelector(".popup-add-task").style.display = 'block';
}

function closeTaskPopUp(){
    var blurTask = document.querySelector('.card-list');
    blurTask.classList.remove("blur-effect-task");
    document.querySelector(".popup-add-task").style.display = 'none';
}

function addTask(){
    console.log(addTaskID);
    var idTask = addTaskID.charAt(addTaskID.length-1);
    var getArrayIndex = Number(idTask) - 1;
    console.log(getArrayIndex);
    var taskName = document.querySelector("#input-add-task").value;
    if(taskName == ''){
        alert("Please Enter the Task Name");
        return;
    }
    var TaskObj = {}
    TaskObj.taskTitle = taskName;
    TaskObj.isDone = false;

    CardArray[getArrayIndex].TaskList = TaskObj;
    
    var addTask = document.createElement('div');
    addTask.className = "task-row";
    addTask.innerHTML = `<div class="task-name">${taskName}</div>
                        <div><button class="mark-done">Mark As Done</button></div>`
    //document.querySelector('.task-list').appendChild(addTask);
    document.getElementById(addTaskID).parentElement.previousElementSibling.appendChild(addTask);

    var blurTask = document.querySelector('.card-list');
    blurTask.classList.remove("blur-effect-task");
    document.querySelector(".popup-add-task").style.display = 'none';
}

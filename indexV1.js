const CardArray = [];

var taskID

var popUpAddList = document.querySelector(".popup-add-list");
console.log(popUpAddList);
var add = document.querySelector(".add-button");
console.log(add);

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
    
    console.log("List added");
    var listHeading = document.querySelector(".input-add-list-popup").value;
    console.log(listHeading);
    if(listHeading == ''){
        alert("Please Enter the List Name");
        return;
    }
    var CardObj = {
        Heading : '',
        TaskListObjArray : []
    }
    CardObj.Heading = listHeading;
    popUpAddList.style.display = "none";
    var blur = document.querySelector(".heading");
    blur.classList.toggle("blur-effect-add-list");
    var blur1 = document.querySelector(".card-list-container");
    blur1.classList.toggle("blur-effect-add-list1");

    CardArray.push(CardObj);

    renderAllCards();
    
}

//Add tasks
function addTaskPopUp(Tid){
    taskID = Tid;
    var blur = document.querySelector(".heading");
    blur.classList.add("blur-effect-add-list");
    var blurTask = document.querySelector('.card-list-container');
    blurTask.classList.add("blur-effect-task");
    document.querySelector(".popup-add-task").style.display = 'block';
}

function closeTaskPopUp(){
    var blur = document.querySelector(".heading");
    blur.classList.remove("blur-effect-add-list");
    var blurTask = document.querySelector('.card-list-container');
    blurTask.classList.remove("blur-effect-task");
    document.querySelector(".popup-add-task").style.display = 'none';
}

function addTask(){
    console.log(taskID);
    var taskName = document.querySelector("#input-add-task").value;
    if(taskName == ''){
        alert("Please Enter the Task Name");
        return;
    }
    var TaskObj = {}
    TaskObj.taskTitle = taskName;
    TaskObj.isDone = false;

    CardArray[taskID].TaskListObjArray.push(TaskObj);
    var blur = document.querySelector(".heading");
    blur.classList.remove("blur-effect-add-list");
    var blurTask = document.querySelector('.card-list-container');
    blurTask.classList.remove("blur-effect-task");
    document.querySelector(".popup-add-task").style.display = 'none';

    renderAllCards();
}

function markAsDone(doneId){
    console.log(doneId);
    var jID = Number(doneId.charAt(doneId.length - 1));
    var iID = Number(doneId.charAt(0));
    console.log(jID);
    console.log(iID);
    console.log(typeof(iID));
    console.log(typeof(jID));
    CardArray[iID].TaskListObjArray[jID].isDone = true
    renderAllCards();
}

function deleteList(deleteID){
    console.log(deleteID);
    var getDeleteID = Number(deleteID.charAt(0));
    console.log(getDeleteID);
    CardArray.splice(getDeleteID,1);
    renderAllCards();
}

function renderAllCards(){
    console.log("check1")
    const ele = document.querySelector('.card-list-container');
    var childEle = ele.lastElementChild;
    while(childEle){
        ele.removeChild(childEle);
        childEle = ele.lastElementChild;
    }
    console.log('check2');
    for(var i=0;i<CardArray.length;i++){
        console.log('check3-inside i loop');
        var addList = document.createElement('div');
        addList.innerHTML = `<div class="card-list">
                                <div class="heading-card-list">
                                    ${CardArray[i].Heading}<hr style="border: 0px;background-color: blue;height: 3px;">
                                </div>
                                <div class="task-list">
                                </div>
                                <div class="footer-card-list">
                                    <button class="add-button-card-list" id=${i+"delete"} onClick="deleteList(this.id)">
                                        <i class="fa fa-trash-o" style="color: blue;"></i>
                                    </button>
                                    <button class="add-button-card-list" id=${i} onclick="addTaskPopUp(this.id)">
                                        <i class="fa fa-plus-circle" style="color: blue;"></i>
                                    </button>
                                </div>
                            </div>`
        document.querySelector(".card-list-container").appendChild(addList);
        for(var j=0;j<CardArray[i].TaskListObjArray.length;j++){
            console.log('inside j loop '+j)
            var addTask = document.createElement('div');
            addTask.className = "task-row";
            addTask.innerHTML = `<div class="task-name">${CardArray[i].TaskListObjArray[j].taskTitle}</div>
                                <div><button class="mark-done" id=${i+"Done"+j} onClick="markAsDone(this.id)">Done</button></div>`
            document.getElementById(i).parentElement.previousElementSibling.appendChild(addTask);
            console.log(CardArray[i].TaskListObjArray[j].isDone);
            if(CardArray[i].TaskListObjArray[j].isDone){
                document.getElementById(i+"Done"+j).parentElement.parentElement.classList.add("strike-content");
                document.getElementById(i+"Done"+j).classList.add("mark-done-clicked");
            }
        }   
        
    }
}

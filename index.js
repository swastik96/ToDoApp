const CardArray = [];

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

    

    addList.innerHTML=`<div class="card-list">
                        <div class="heading-card-list">
                            ${listHeading}<hr style="border: 0px;background-color: blue;height: 3px;">
                            <div class="footer-card-list">
                                <button class="add-button-card-list">
                                    <i class="fa fa-trash-o" style="color: blue;"></i>
                                </button>
                                <button class="add-button-card-list">
                                    <i class="fa fa-plus-circle" style="color: blue;"></i>
                                </button>
                            </div>
                        </div>
                    </div>`;

    document.querySelector(".card-list-container").appendChild(addList);

    CardArray.push(CardObj);
}


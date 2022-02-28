let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputText = document.getElementById("inputText");
let clearToDoButton = document.getElementById("clearToDo");

addToDoButton.addEventListener("click",function(){
 let paragraph = document.createElement("p");
 paragraph.classList.add("paragraph-styling")
 toDoContainer.appendChild(paragraph);/*toDoContainer id li yere p elementi açtık*/
paragraph.innerHTML=inputText.value;
inputText.value="";

paragraph.addEventListener("click",function(){
    paragraph.style.textDecoration = "line-through";
    paragraph.style.color="black";
});

paragraph.addEventListener("dblclick",function(){

    toDoContainer.removeChild(paragraph);
});
/*silme butonununun etkinleşmesi için önce ekle butonununa basarak ekleme yapmak gerek*/
clearToDoButton.addEventListener("click",function(){
    
    paragraph.remove();
})


});


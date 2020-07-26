var tasksList = document.getElementById("list");

function addTasks(){
    var addTasks = document.getElementById("addTodo")

    if(addTasks.value == "")
{
alert("Enter something");
}
else
{

    var li = document.createElement('li')
    var liText = document.createTextNode(addTasks.value)
    li.setAttribute("class","task-input")
    li.appendChild(liText)
}
    // Create Delete Button //
    var dltBtn = document.createElement("button")
    var dltText = document.createTextNode("Delete")
    dltBtn.setAttribute("class","dltBtn")
    dltBtn.setAttribute("onclick","dltTasks(this)")
    dltBtn.appendChild(dltText)

    // edit button // 

var editBtn = document.createElement("button");
var editText = document.createTextNode("Edit")
editBtn.setAttribute("class","editBtn")
editBtn.appendChild(editText)
editBtn.setAttribute("onclick","editTasks(this)")

    li.appendChild(dltBtn)
    li.appendChild(editBtn)


    tasksList.appendChild(li)
    addTasks.value = ""

}
// Delete tasks

function dltTasks(d){
     d.parentNode.remove()
}

function editTasks(e){
    var val = e.parentNode.firstChild.nodeValue;
var editValue = prompt("Edit your Task",val)
e.parentNode.firstChild.nodeValue = editValue
}

// Delete all tasks //

function dltAll(){
    list.innerHTML = ""
}
var  list = document.getElementById("list")

function addtodo(){
     var todo=document.getElementById("todo")
    var li = document.createElement("li")
    li.setAttribute("id","one")
    var litext = document.createTextNode(todo.value)
    li.appendChild(litext)
    list.appendChild(li)
    todo.value="";
    var delet =document.createElement("button")
    var delettext=document.createTextNode("Delete")
    delet.appendChild(delettext)
    delet.setAttribute("onclick","deleteitem(this)")
    li.appendChild(delet)
    var edit=document.createElement("button")
    var edittext=document.createTextNode("EDIT")
    edit.appendChild(edittext)
    li.appendChild(edit)
    edit.setAttribute("onclick","edittodo(this)")




}


function deleteitem(e){
  e.parentNode.remove();
}

function deleteall(){
    list.innerHTML=""
}
function edittodo(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editvalue = prompt("Enter edit value", val)
    e.parentNode.firstChild.nodeValue=editvalue;
}
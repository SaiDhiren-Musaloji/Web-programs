function myTasks(){
    var textBox = document.querySelector('input');
    var val = textBox.value;

    var list = document.getElementById("myList");

    var newItem = document.createElement('li');
    newItem.innerText = val;

    list.appendChild(newItem);
    textBox.value= "";
}

var btn = document.querySelector("button");
btn.onclick = myTasks;

btn.onmouseover = function(){
    var list = document.getElementById("myList");
    var item = document.getElementById("child2");

    list.removeChild(item);
}

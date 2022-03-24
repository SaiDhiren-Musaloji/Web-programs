function myTasks(e){
    var textBox = document.querySelector('input');
    var val = textBox.value;

    var pTag = document.getElementById('output');
    pTag.innerText = val;
    pTag.style.color="red"
}

var btn = document.querySelector('button');
btn.onclick = myTasks;
btn.onmouseover = function(){
    btn.style.color = "white";
    btn.style.backgroundColor = "blue"
}
btn.onmouseleave = function(){
    btn.style.backgroundColor="lightgray";
    btn.style.color = "black";
}

function myFun(){
    document.body.style.backgroundColor = "Orange"
}

btn.addEventListener('click',myFun);

btn.removeEventListener('click',myFun);
function validate(e){
    e.preventDefault();

    var uname = document.getElementById('uname').value.trim();
    var pwd = document.getElementById('pwd').value.trim();

    console.log(uname);
    console.log(pwd);

    if(uname == "" || pwd == "")
    {
        alert("Username or Password can not be blank")
    }
}
function showPassword(){
    var pwd = document.getElementById('pwd');
    // var checkBtn = document.getElementById("checkbox");
    if(pwd.type=="password")
    {
        pwd.type = "text";
    }
    else
    {
        pwd.type = "password";
    }
}
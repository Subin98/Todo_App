var username = document.getElementById("username");
var pwd = document.getElementById("password");
var btn = document.getElementById("mybtn");
var Myform = document.getElementById("Myform");

function validate(callback)
{
    if(username.value!="admin")
    {
        return false;
    }
    else if(pwd.value!=12345)
    {
        return false;
    }
    else
    {
        callback();
    }
}

function Redirect()
{
    // Myform.action="/main.html";
    Myform.setAttribute("action","/todo.html");
}

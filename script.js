var username = document.getElementById("username");
var pwd = document.getElementById("password");
var btn = document.getElementById("mybtn");
var Myform = document.getElementById("Myform");
var usererr = document.getElementById("usererr");
var pwderr = document.getElementById("pwderr")
var stat="";
function validate(callback)
{
    reseterror(username,pwd);
    checkusername();
    checkpassword();
    
    function checkusername()
    {
        if(username.value!="admin")
        {
            displayerror(username);
            usererr.style.display = "block";
            usererr.innerText="Invalid username";
            return false;
        }
        else
        {
            reseterror(username,pwd);
            return true;
        }
    }
    function checkpassword()
    {
    if(pwd.value!=12345)
        {
            displayerror(pwd);
            pwderr.style.display = "block";
            pwderr.innerText="Invalid Password";
            return false;
        }
        else
        {
            reseterror(username,pwd);
            return true;
        }
    }
    if(checkpassword()==true && checkusername()==true)
    {
        callback();
    }
    else
    {
      return false;  
    }
}
function displayerror(i)
{
i.style.borderColor="red";
}
function reseterror(x,y)
{
x.style.borderColor="#ced4da";
y.style.borderColor="#ced4da";
usererr.style.display="none";
pwderr.style.display="none";
}

function Redirect()
{
    // Myform.action="/main.html";
    Myform.setAttribute("action","todo.html");
}

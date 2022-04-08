window.onload = function showtodo()
{
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState==4 && this.status==200)
    {
        var Response = JSON.parse(this.responseText);
        var radioid="";
        for(var i=0; i<Response.length; i++)
        {
            // const x = document.createElement("input");
            // x.setAttribute("type","radio");
            // x.setAttribute("value",Response[i].title);
            // x.setAttribute("id",Response[i].id);
            // x.setAttribute("class","form-check-input");
            // radioid =Response[i].id;
            // x.setAttribute("onchange","init("+radioid+")");
            // document.getElementById("todo").appendChild(x);
            // const z = document.createElement("label");
            // document.getElementById("todo").appendChild(z);
            // z.innerText=`${Response[i].title}\n `;
            
            const x = document.createElement("input");
            const y = document.createElement("div");
            y.setAttribute("class","form-check");
            // y.setAttribute("class","form-switch");
            y.setAttribute("id","switch"+Response[i].id)
            document.getElementById("todo").appendChild(y);
            x.setAttribute("type","checkbox");
            x.setAttribute("value",Response[i].title);
            x.setAttribute("id",Response[i].id);
            x.setAttribute("class","form-check-input");
            radioid =Response[i].id;
            x.setAttribute("onchange","init("+radioid+")");
            // document.getElementById("todo").appendChild(x);
            const z = document.createElement("label");
            // document.getElementById("todo").appendChild(z);
            z.innerText=`${Response[i].title}\n `;
            y.append(x);
            y.append(z);
        }
    }
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
}
var count = 0;
var idarr=[];


function verify(k)
{
    return new Promise(function(resolve,reject){
        var stat = idarr.includes(k);
        if (stat == false)
        {
        idarr.push(k);
        console.log(k);
        if(idarr.length>=5){
            resolve();
        }
        else{
            reject("length is " +idarr.length +" hence not completed");
        }
        }
        else
        {
        idarr.pop(k);
        idarr.forEach(function(){console.log(e);})
        }
    })    
    
}

function displaymsg()
{
    setTimeout(function(){
        alert("Congrats. 5 Tasks have been Successfully Completed!");
    }, 500);
    
}
function init(k)
{  
   verify(k)
   .then(displaymsg)
   .catch(function(e){
       console.log(e);
   });
    
}

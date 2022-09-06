let nme=document.getElementById("name");
let email=document.getElementById("email")
let form=document.getElementById("my-form");
// localStorage.clear();
var arr=[];
form.addEventListener("submit", nmelocal);
function nmelocal(e)
{
    e.preventDefault();
    // localStorage.setItem("Name",`${nme.value}`);
    // localStorage.setItem("Email",`${email.value}`);

    let obj={
        "name": nme.value,
        "email": email.value
    }
    var jsonvala= JSON.stringify(obj); //JSON.parse(....) karne se vapis pehla jaise ho jayega...
    localStorage.setItem(email.value,`${nme.value}, ${email.value}`);
    //lekin ek dikkat hai isme ....humne object bna liya, string mai bhi conver kar diya hai but jav hum naya obj banayenge ya form mai nayi value daalenge to piche vali value hat jati hai...

    var itemlist=document.getElementById("itemlist");
    var name=document.getElementById("name").value;
    var email1=document.getElementById("email").value;
    // var email=document.getElementById("email");
    var li=document.createElement("li");
    li.className="item";
    li.appendChild(document.createTextNode(name));
    li.appendChild(document.createTextNode(", "));
    li.appendChild(document.createTextNode(email1));
    // console.log(li);
    itemlist.appendChild(li);
    // console.log(li);
}
// window.onload= function()
// {
//     // localStorage.getItem("myobj");
//     // JSON.parse(localStorage.getItem("myobj"));
//     var display=JSON.parse(localStorage.getItem("myobj"));
//     // console.log(display.name)
//     var prevd=document.getElementById("prevdetail");
//     // console.log(prevd);
//     prevd.append(`${display.name}, ${display.email}`);
// }
for (var i=0;i<localStorage.length;i++)
{
    var li=document.createElement("li")
    li.appendChild(document.createTextNode(localStorage.getItem(localStorage.key(i))));
    // console.log(localStorage.getItem(localStorage.key(i)));
    itemlist.appendChild(li);
}
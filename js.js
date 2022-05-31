var user=document.querySelector(".fa-user")
var key=document.querySelector(".fa-key")
var uname=document.querySelector("#name")
var pass=document.querySelector("#pass")

uname.addEventListener("click",()=>{
    
    if(user.style.background="white")
    user.style.background="red"
    
})
pass.addEventListener("click",()=>{
    
    if(key.style.background="white")
    key.style.background="red"
    
})
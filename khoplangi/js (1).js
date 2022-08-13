var user=document.querySelector(".fa-user")
var key=document.querySelector(".fa-key")
var uname=document.querySelector("#name")
var pass=document.querySelector("#pass")
var log=document.querySelector("#login")
var sign=document.querySelector("#signup")

uname.addEventListener("click",()=>{
    
    if(user.style.background="white")
    user.style.background="red"
    
})
pass.addEventListener("click",()=>{
    
    if(key.style.background="white")
    key.style.background="red"
    
})

    
        if(log.style.display=="flex")
        sign.style.display="none"
        else(log.style.display="none")
        sign.style.display="flex"
        
    

$(document).ready(function(){

    $("#signin1").on('click',function(){
        $('#login').css('display','none')
        $('#signup').css('display','flex')
    })
    $("#login2").on('click',function(){
        $('#signup').css('display','none')
        $('#login').css('display','flex')
    })
})
function myFunction(x) {
  if (x.matches) { // If media query matches
    
   
    $(document).ready(function(){
    
      $(".nav-prod2").on("click",function(){
        mm.style.display='none'
             $('.dropdown-menu').show()
             $('.dropdown-menu').css("width","100vw")
             $('.dropdown-menu i').css("background","purple")
             $('.dropdown-menu i').css("color","white")
             $('.dropdown-menu i').css("padding","5px")
             $('.dropdown-menu i').css("border-radius","35px")
             $('.dropdown-menu').css("margin-left","-40vw")
             $('.dropdown-menu').css("margin-top","5vw")
             
             $('.dropdown-menu li').css("width","100vw")
             
             $('.dropdown-menu li').css("margin-left","-20vw")
             
             $(".mob-sdrop").css("position","absolute")
             $(".mob-sdrop").css("top","10vh")
             $(".mob-sdrop").css("width","119vw")
             $(".mob-sdrop").css("height","119vh")
             $(".mob-sdrop a").css("width","100vw")
             $(".mob-sdrop a").css("margin-left","10vw")
             $(".mob-sdrop a").css("margin-top","20px")
             $(".mob-sdrop").css("margin-left","-50vw")


             
          })
          $('.dropdown-menu li').on("click",function(){
            $('.dropdown-menu').hide()
          })
          $('#mob-more2 .more-cc').on("click",function(){
            $('#mobmore').hide()
          })
          
      $(".mob-more").on("click",function(){
        if(mm.style.display=='flex'){
         
          mm.style.display='none'
        }
        else{
         
          mm.style.display='flex'

        }
             
          })

    })
  } else {
    mm.style.display="none"

   
  }
}

var x = window.matchMedia("(max-width: 450px)")
var mm=document.getElementById("mobmore")

myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
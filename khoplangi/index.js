var nm2=document.getElementById('nav-more2')


$(document).ready(function(){
    $("#banclose1").on("click",function(){
        $("#ban1").hide()
        $("#navbar").css("margin-top","-65px")
        $("#middle").css("margin-top","60px")

    })
    $(".msg-close").on("click",function(){
        $("#msg-box").css('display','none')
    })
    $(".msg-btn").on("click",function(){
        $(".msg-close").css('display','inline-block')
        $("#msg-box").css('display','flex')
    })
    $(".prvnext").on("click",function(){
    
        $(".carousel-item").css("margin-top","0px")
        
    })
    $(".prev").on("click",function(){
        $("#carouselExampleCaptions").css("transform","skew(-1deg)")
        
    })
    $(".next").on("click",function(){
        $("#carouselExampleCaptions").css("transform","skew(1deg)")
        
    })
    $("#nav-more2").on("click",function(){
        $(".pn").toggle("slow", function(){
            
            $("#nav-more2").text($("#nav-more2").text().replace("MORE", "Less"));
        })
        $(".nav-prod-sm").css("margin-left","20px")
        $("#nav-more2").text($("#nav-more2").text().replace("Less", "More"));
        
        
       
        

        
    })
    
})
// var =document.getElementById('kitchen1')
// var nmore=document.querySelector('#nav-more')
// nmore.addEventListener('click',()=>{
//     pn.style.margin="30px"
    
// })

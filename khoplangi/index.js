$(document).ready(function(){
    $("#banclose1").on("click",function(){
        $("#ban1").hide()
        $("#navbar").css("margin-top","-65px")
        $("#middle").css("margin-top","60px")

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
    
})
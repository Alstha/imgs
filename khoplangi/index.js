
var nm2=document.getElementById('nav-more2')


$(document).ready(function(){
    
    
    
    $(".nav-prod").on("click",function(){
        $('.mob-sdrop').hide()
    })
    
    
    $("#products-dd").on("click",function(){
        $("#PROD").toggle()
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
    
    $(".d-d1,.mob-sdrop").on("mouseover",function(){
        $("#kitchen-dmain").css("display","block")
        
    })
    $(".d-d1,.mob-sdrop").on("mouseout",function(){
        $("#kitchen-dmain").css("display","none")
        
    })
    $(".kd-i").on("click",function(){
        $("#kitchen-dmain").css("display","none")
        
    })
    $(".k-dc").on("click",function(){
        $("#kitchen-dmain").css("display","none")
        
    })
    $(".p-d1,.mob-sdrop").on("mouseover",function(){
        $("#poultry-dmain").css("display","block")
        
    })
    $(".p-d1,.mob-sdrop").on("mouseout",function(){
        $("#poultry-dmain").css("display","none")
        
    })
    $(".pd-i").on("click",function(){
        $("#poultry-dmain").css("display","none")
        
    })
    $(".p-dc").on("click",function(){
        $("#poultry-dmain").css("display","none")
        
    })
    $(".i-d1,.mob-sdrop").on("mouseover",function(){
        $("#kids-dmain").css("display","block")
        
    })
    $(".i-d1,.mob-sdrop").on("mouseout",function(){
        $("#kids-dmain").css("display","none")
        
    })
    $(".id-i").on("click",function(){
        $("#kids-dmain").css("display","none")
        
    })
    $(".i-dc").on("click",function(){
        $("#kids-dmain").css("display","none")
        
    })
    $(".j-d1").on("mouseover",function(){
        $("#junk-dmain").css("display","block")
        
    })
    $(".j-d1,.mob-sdrop").on("mouseout",function(){
        $("#junk-dmain").css("display","none")
        
    })
    $(".jd-i").on("click",function(){
        $("#junk-dmain").css("display","none")
        
    })
    $(".j-dc").on("click",function(){
        $("#junk-dmain").css("display","none")
        
    })
    $(".b-d1,.mob-sdrop").on("mouseover",function(){
        $("#bathroom-dmain").css("display","block")
        
    })
    $(".b-d1,.mob-sdrop").on("mouseout",function(){
        $("#bathroom-dmain").css("display","none")
        
    })
    $(".bd-i").on("click",function(){
        $("#bathroom-dmain").css("display","none")
        
    })
    $(".b-dc").on("click",function(){
        $("#bathroom-dmain").css("display","none")
        
    })
    $(".m-d1,.mob-sdrop").on("mouseover",function(){
        $("#madira-dmain").css("display","block")
        
    })
    $(".m-d1,.mob-sdrop").on("mouseout",function(){
        $("#madira-dmain").css("display","none")
        
    })
    $(".md-i").on("click",function(){
        $("#madira-dmain").css("display","none")
        
    })
    $(".m-dc").on("click",function(){
        $("#madira-dmain").css("display","none")
        
    })
    $(".s-d1,.mob-sdrop").on("mouseover",function(){
        $("#soft-dmain").css("display","block")
        
    })
    $(".s-d1,.mob-sdrop").on("mouseout",function(){
        $("#soft-dmain").css("display","none")
        
    })
    $(".sd-i").on("click",function(){
        $("#soft-dmain").css("display","none")
        
    })
    $(".s-dc").on("click",function(){
        $("#soft-dmain").css("display","none")
        
    })
    $(".o-d1,.mob-sdrop").on("mouseover",function(){
        $("#others-dmain").css("display","block")
        
    })
    $(".o-d1,.mob-sdrop").on("mouseout",function(){
        $("#others-dmain").css("display","none")
        
    })
    $(".od-i").on("click",function(){
        $("#others-dmain").css("display","none")
        
    })
    $(".od-i").on("click",function(){
            $("#others-dmain").css("display","none")
            
        })
        $(".o-dc").on("click",function(){
            $("#others-dmain").css("display","none")
            
        })
        $(".nav-more").on("click",function(){
            $("#more").toggle()
            
        })
        $(".c-more").on("click",function(){
            $("#more").hide()
            
        })
        $(".more-cc").on("click",function(){
            $("#more").hide()
            
        })
        
    })
    
        
        var load=document.getElementById('loader');
        
        function onloads(){
            load.style.display="none"
        }
        
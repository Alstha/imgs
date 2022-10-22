
var pd=document.getElementById('proddiv')

var ppimg=document.getElementById("prodimg")
var ptitle=document.getElementById("title")
var pperprice=document.getElementById("perprice")
var nnodprice=document.getElementById("nodprod")



var pd=document.getElementById('proddiv')

$(document).on('click','.ps1s',function(){
  $(this).addClass('dif').siblings().removeClass('dif');
  $('.dif .allimgs').addClass('pimgs').siblings().removeClass('pimgs');
  $('.dif .pn1').addClass('ptitle').siblings().removeClass('ptitle');
  $('.dif .acprise1').addClass('perprice').siblings().removeClass('perprice');
  $('.dif .nodprice').addClass('nodprise').siblings().removeClass('nodprise');
  $('.dif .save1').addClass('save').siblings().removeClass('save');
  
})
$(document).on('click','.dif',function(){
  pd.style.display='block'
  pd.style.backgroundColor="#ffffffcc"

  var pimgs=document.querySelector('.pimgs')
  $('.allimgs').css('width','170px');    
     
  
  var title=document.querySelector('.ptitle').textContent
  var perprice=document.querySelector('.perprice').textContent
  var nodprise=document.querySelector('.nodprise').textContent
  var save=document.querySelector('.save').textContent
  var pimg=pimgs.cloneNode(true);
  ppimg.appendChild(pimg)
  ptitle.textContent=title
  pperprice.textContent=perprice
  nnodprice.textContent=nodprise
  pimg.style.opacity='99%'
  
})

var done=document.querySelector('#pd #done')

$(document).on('click','#cancel',function(){
  var tsum= document.querySelector("#totalrs")
  var sum1= document.querySelector("#pd #perprice").textContent 
  var sum2= document.querySelector("#quantity").value




  pd.style.display='none'


  $('.ps1s').removeClass('dif');
  $('.allimgs').removeClass('pimgs');    
  $('.pn1').removeClass('ptitle');    
  $('.acprise1').removeClass('perprice');    
  $('.nodprice').removeClass('nodprise');    
  $('.save1').removeClass('save');    
  $('.allimgs').css('width','175px');    
  $('.allimgs').css('box-shadow','10px 0px 7px white,-10px 0px 7px white');    
  tsum.textContent="0"

})
$(document).on('click','#pd #done',function(){
  
  
  var sum1= document.querySelector("#pd #perprice").textContent 
  var sum2= document.querySelector("#quantity").value
  var sum3= document.querySelector(".save").textContent 
  var tsum= document.querySelector("#totalrs")
  var totalsave=document.querySelector('#pd #saved')
  var tvat= document.querySelector("#vatinc")
  
  
  
  let reg= /\d+/g;

  
  let result1=sum3.match(reg);
  let result2=sum1.match(reg);
  
  var savenum=parseInt(result1[0])
  var perpricenum=parseInt(result2[0])
  
  var tsave= savenum*sum2
  var fsum=perpricenum*sum2
  if(tvat.checked){
    var spwithvat=((113/100)*fsum)
    $("#totalrs").css("width","200px")
  }
  else{
    var spwithvat=((100/100)*fsum)
    $("#totalrs").css("width","125px")
    
    
  }
  tsum.textContent= "Rs "+ spwithvat +' /-'
  totalsave.textContent= "Rs "+ tsave +' /-'
  
})

$(document).on('click','#pd #order',function(){
  var tsum= document.querySelector("#totalrs")

  if(tsum.textContent=="0"){
    confirm("No Order is Here. Please Order Products To Continue Further. Thank You")
  }
  else{
    console.log("ok")
  }
})

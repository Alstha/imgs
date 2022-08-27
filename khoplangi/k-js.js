// var a=document.getElementById("a")
// var b=document.getElementById("b")
// var c=document.getElementById("c")
// var d=document.getElementById("d")
// var e=document.getElementById("e")
// var f=document.getElementById("f")
// var cng=document.getElementById("cng")
// const music=document.querySelector("audio")



// const title=document.getElementById("title")
// const artist=document.getElementById("artist")



// const songs= [
//     {
//         name:"c0",
//         title:"0) -Hawayein-",
//         artist:"Arijit Singh"
//     },
//     {
//         name:"c1",
//         title:"1) -Aakh Maare-",
//         artist:"Neha Kakkar"
//     },
//     {
//         name:"c2",
//         title:"2) -Dhemee Dhemee-",
//         artist:"Tony Kakkar"
//     },    {
//         name:"c3",
//         title:"3) -Dil Diyan Gallan -",
//         artist:"Atif Aslam"
//     },{
//         name:"c4",
//         title:"4) -DIL KO KARRAR-",
//         artist:"Neha Kakkar"
//     },
//     {
//         name:"c5",
//         title:"5) -Game ON-",
//         artist:"Ujjwal Chaurasia"
//     },    {
//         name:"c6",
//         title:"6) -Mere Samne Wali-",
//         artist:"Ashish Patil"
//     },
//         {
//         name:"c7",
//         title:"7) -Jaan Nissar-",
//         artist:"Arijit Singh"
//     },
//         {
//         name:"c8",
//         title:"8) -Kusu Kusu-",
//         artist:"Zahrah S Khan"
//     },
//         {
//         name:"c9",
//         title:"9) -Naina-",
//         artist:"Arijit Singh"
//     },    {
//         name:"c10",
//         title:"10) -OO Sathi-",
//         artist:"Payal Dev"
//         },{
//         name:"c11",
//         title:"11) -Raataan Lambiyan-",
//         artist:"Asees Kaur"
//     },
//         {
//         name:"c12",
//         title:"12) -Sweetheart-",
//         artist:"Dev Negi"
//     },    
//         {
//         name:"c13",
//         title:"13) -Vaaste-",
//         artist:"Dhvani Bhanushali"
//     },
//         {
//         name:"c14",
//         title:"14) -Yaalgar-",
//         artist:"CarryMinati"
//         },
//         {
//         name:"c15",
//         title:"15) -ABHI TOH PARTY-",
//         artist:"BADSHAH"
//         },
//         {
//         name:"c16",
//         title:"15) -Oo WANTA WoW-",
//         artist:"Indravathi Chauhan"
//         },
//         {
//         name:"c17",
//         title:"15) -Khatam Hue Waande-",
//         artist:"Emiway Bantai"
//         },
//     ]
    
//     const loadSong= (songs) => {
//         title.textContent = songs.title;
//         artist.textContent = songs.artist;
//         music.src="audio/hin/"+songs.name+".mp3";
//     };
//     songIndex = 0;
    
    
//     const nextSong = () => {
        
//         songIndex=(songIndex+1)% songs.length;
//         loadSong(songs[songIndex]);
//         playMusic();
//     };
//     const prevSong = () => {
        
//         songIndex=(songIndex-1 + songs.length) % songs.length ;
//         loadSong(songs[songIndex]);
//         playMusic();
//     };
//         const pSong = () => {
//             loadSong(songs[0]);
//             playMusic();
//         };
//         const qSong = () => {
//             loadSong(songs[1]);
//             playMusic();
//         };
//         const rSong = () => {
//             loadSong(songs[2]);
//             playMusic();
//         };
//         const sSong = () => {
//             loadSong(songs[3]);
//             playMusic();
//         };
//         const tSong = () => {
//             loadSong(songs[4]);
//             playMusic();
//         };
//         const uSong = () => {
//             loadSong(songs[5]);
//             playMusic();
//         };
//         const vSong = () => {
//             loadSong(songs[6]);
//             playMusic();
//         };
//         const wSong = () => {
//             loadSong(songs[7]);
//             playMusic();
//         };
//         const xSong = () => {
//             loadSong(songs[8]);
//             playMusic();
//         };
//         const ySong = () => {
//             loadSong(songs[9]);
//             playMusic();
//         };
//         const zSong = () => {
//             loadSong(songs[10]);
//             playMusic();
//         };
//         const aaSong = () => {
//             loadSong(songs[11]);
//             playMusic();
//         };
//         const bbSong = () => {
//             loadSong(songs[12]);
//             playMusic();
//         };
//         const ccSong = () => {
//             loadSong(songs[13]);
//             playMusic();
            
    
//         };
//         const ddSong = () => {
//             loadSong(songs[14]);
//             playMusic();
            
//         };
//         const eeSong = () => {
//             loadSong(songs[15]);
//             playMusic();
            
//         };
//         const ffSong = () => {
//             loadSong(songs[16]);
//             playMusic();
            
//         };
//         const ggSong = () => {
//             loadSong(songs[17]);
//             playMusic();
            
//         };
       

    
//     a.addEventListener('click', pSong);
//     b.addEventListener('click', qSong);
//     c.addEventListener('click', rSong);
//     d.addEventListener('click', sSong);
    
var tish=document.querySelectorAll(".tis-hide")
var tim=document.querySelectorAll(".ti-more")
var rsi=document.querySelectorAll("#rstar i")
var rsi2=document.querySelectorAll("#sidebar")
var rsi3=document.querySelectorAll(".kmain")
var c=document.querySelectorAll(".t-l-close")
var topic=document.querySelectorAll(".prodtopic")
var bsb=document.querySelectorAll("#back-sb")



var load=document.getElementById('loader2')
var kitmain=document.getElementById('kitmain')
        
        function onloads(){
            load.style.display="none"
            kitmain.style.display="flex";
        }

$(document).ready(function(){
    
    
    

    

    $(".t-l-close").on('click',function(){
        $("#sidebar").toggle();
        
    })
    $(tim).on('click',function(){
        $(tish).toggle();
        $(tim).css("margin-top","-185px")
    })
        $(rsi).on('click',function(){
            $(rsi).css("color","green")
            // $(tim).css("margin-top","-15px")
        })
        $(c).on('click',function(){

            $('.nxt').css("display","none");
            $('.ksale').css("grid-template-columns","1fr 1fr 1fr 1fr 1fr 1fr");
            $('.ksale').css("margin-left","50px");

            
            $(rsi3).css("width","100vw");
            // $(rsi3).css("margin-left","2.5%")
            $('#kban').css("max-width","1445px")

            $(bsb).toggle();

            $('#ban-blur').css("margin-left","0px")
        })
        $(bsb).on('click',function(){
            $('#ban-blur').css("margin-left","-120px")
            $('#selpt').css("margin-left","-150px")

            $('#kban').css("max-width","1045px")
            $(bsb).toggle();
            $(rsi2).css("min-width","200px")
            $('.nxt').css("display","block")
            $('.ksale').css("grid-template-columns","1fr 1fr 1fr 1fr 1fr 160px");
            
            $(rsi2).toggle()
            

        })
    
});


   
    
    
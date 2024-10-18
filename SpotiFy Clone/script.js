//Variable Initialization
let audio=new Audio("songs/Make me move.mp3");
let progressBar=document.querySelector("#range")
let masterPlay=document.getElementById("masterPlay")
let BackwardPlay=document.getElementById("masterBackwardPlay")
let ForwardPlay=document.getElementById("masterForwardPlay")
let gif=document.getElementById("gif")
let songList=document.querySelector(".real-song-list");
// let mini=document.getElementById("mini-play-circle");
let text=document.querySelector(".songDisplay")

//Song Information
// let songs=[
//     {songName:"Make Me Move", filePath:"songs/make me move.mp3"},
//     {songName:"Heroes Tonight", filePath:"songs/Janji_feat_Johnning_-_Heroes_Tonight_Loadedsongs.com.mp3"},
//     {songName:"Where We Started", filePath:"songs/Lost_Sky_feat_Jex_-_Where_We_Started_Loadedsongs.com.mp3"},
//     {songName:"Fearless Pt. II", filePath:"songs/Lost_Sky_feat_Chris_Linton_-_Fearless_pt2_Loadedsongs.com.mp3"},
// ]

// Event Listening and Handling

songList.addEventListener("click", (event)=>{
    const ListItem=event.target.closest("li");
    let mini_play=ListItem.querySelector("i");
    if (audio){
        audio.pause();
        mini_play.classList.remove("fa-circle-pause");
        mini_play.classList.add("fa-circle-play");
    }
    let src=ListItem.getAttribute("data-src")
    audio=new Audio(src);
    audio.play();
    mini_play.classList.remove("fa-circle-play");
    mini_play.classList.add("fa-circle-pause");
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})

masterPlay.addEventListener("click", ()=>{
    if (audio.paused || audio.currentTime<=0){
        audio.play();
        progressBar.value=0;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity=1;
    }
     else{
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play")
        audio.pause();
        gif.style.opacity=0;
     }  

})
BackwardPlay.addEventListener("click", ()=>{
    audio.pause();
    audio.currentTime=0;
    audio.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    progressBar.value=0;
})
ForwardPlay.addEventListener("click", ()=>{
    audio.pause();
    audio.currentTime=0;
    progressBar.value=0;
})
let progress=0;
audio.addEventListener("timeupdate", ()=>{
    progress=Math.round((audio.currentTime/audio.duration)*100);
    progressBar.value=progress;
})
progressBar.addEventListener("change", ()=>{
    audio.currentTime=progressBar.value*audio.duration/100;

})






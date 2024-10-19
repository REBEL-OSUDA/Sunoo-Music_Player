//Variable Initialization
let audio=new Audio("songs/Make me move.mp3");
let progressBar=document.querySelector("#range");
let masterPlay=document.getElementById("masterPlay");
let BackwardPlay=document.getElementById("masterBackwardPlay");
let ForwardPlay=document.getElementById("masterForwardPlay");
let gif=document.querySelector(".songInfo");
let songList=document.querySelector(".real-song-list");
let text=document.querySelector(".songDisplay");
let play_buttons=songList.querySelectorAll("i");
let songDisks=songList.querySelectorAll("img")
let footer=document.querySelector("footer");
let songInfo=gif.querySelector(".SongName");

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
    let songName=ListItem.querySelector(".songName");
    let singers=ListItem.getAttribute("data-name")
    if (audio){
        audio.pause();
        play_buttons.forEach((i)=>{
            i.classList.remove("fa-circle-pause");
            i.classList.add("fa-circle-play");
        })
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity=0;
    }
    let src=ListItem.getAttribute("data-src")
    audio=new Audio(src);
    audio.play();
    gif.style.opacity=1;
    let progress=0;
    audio.addEventListener("timeupdate", ()=>{
    progress=(audio.currentTime/audio.duration)*100;
    progressBar.value=progress;
    })
    mini_play.classList.remove("fa-circle-play");
    mini_play.classList.add("fa-circle-pause");
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    songInfo.textContent=`${songName.textContent}-${singers}`;
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

progressBar.addEventListener("change", ()=>{
    audio.currentTime=progressBar.value*audio.duration/100;
})







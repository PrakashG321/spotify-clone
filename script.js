var AudioPlayer=[
new Audio('songs/1.mp3'),
new Audio('songs/2.mp3'),
new Audio('songs/3.mp3'),
new Audio('songs/4.mp3'),
new Audio('songs/5.mp3'),
new Audio('songs/6.mp3'),
new Audio('songs/7.mp3'),
new Audio('songs/8.mp3'),
new Audio('songs/9.mp3'),
new Audio('songs/10.mp3')
]


var button=document.querySelectorAll(".btn")
for (i=0;i<button.length;i++){
button[i].addEventListener("click",function(){
   var buttonID=this.id;
   var song_number=parseInt(buttonID.replace("btn",""))
   var audio=AudioPlayer[song_number-1] 

   if(audio.paused){
    audio.play();
    this.querySelector("i").classList.replace("fa-circle-play","fa-circle-pause")
   }else{
    audio.pause();
    this.querySelector("i").classList.replace("fa-circle-pause","fa-circle-play")

   }
})
}
var masterplay=document.querySelector("#masterPlay");
var next_song=document.querySelector("#next");
var previous_song=document.querySelector("#previous");
var current_song_index=0;
var isPlaying=false;

function play(){
   audio=AudioPlayer[current_song_index];
   audio.play();
   isPlaying=true;
   masterplay.classList.replace("fa-play-circle","fa-pause-circle")
}
function pause(){
   audio=AudioPlayer[current_song_index];
   audio.pause();
   isPlaying=false;
   masterplay.classList.replace("fa-pause-circle","fa-play-circle")
}
function play_next(){
   pause();
   current_song_index=(current_song_index+1)%AudioPlayer.length
  play();
}
function play_previous(){
   pause();
   current_song_index=(current_song_index-1+AudioPlayer.length)%AudioPlayer.length
   play();
}

masterplay.addEventListener("click",function(){
   if(isPlaying){
   pause();
   }else{
   play();
   }
})
next_song.addEventListener("click",function(){
  play_next(); 
})
previous_song.addEventListener("click",function(){
   play_previous();
})
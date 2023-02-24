let songIndex = 0;
let  audioElement = new Audio ("music/Abhi_Mujh_Mein.mp3");
let  btn = document.getElementsByClassName("btn");
let  masterPlay = document.getElementById("masterPlay");
let recentSong = document.getElementById("recent-song");
let currentMusicBanner = document.getElementById("current-music-banner");
let musicPlayerAnimation = document.getElementById("music-player-animation");
let next = document.getElementById('next');
let previous = document.getElementById('previous');
let progressBar = document.getElementById('progress-bar');
let totalTime = document.getElementById('total-time');
songItemPlay = document.getElementsByClassName('song-item-play');
songList = document.getElementsByClassName('song-list');



let songs = [
//    0
    {filePath:"music/Abhi_Mujh_Mein.mp3",
     songName: "Abhi Mujh Mein",
     artist: "artist1",
     banner: "pictures/Abhi_mujh_mein_kahin.jpg"},
//    1
     {filePath:"music/Ae_Dil_Hai_Mushkil.mp3",
     songName: "Ae Dil Hai Mushkil",
     artist: "artist1",
     banner: "pictures/Ae_dil_hai_mushkil_cover.jpg"},
//    2
     {filePath:"music/Agar_Tum_Saath_Ho.mp3",
     songName: "Agar Tum saath Ho",
     artist: "artist1",
     banner: "pictures/Agar_tum_sath_ho_cover.jpg"},
//    3
     {filePath:"music/Channa_Mereya.mp3",
     songName: "Channa Mereya",
     artist: "artist1",
     banner: "pictures/Channa_mereya.jpg"},
//    4
     {filePath:"music/Hamari_Adhuri_Kahani.mp3",
     songName: "Hamari Adhuri Kahani",
     artist: "artist1",
     banner: "pictures/Hamari_adhuri_kahani.jpg"},
//    5
     {filePath:"music/Jee_Le_Zaraa_Song.mp3",
     songName: "Jee le Zara",
     artist: "artist1",
     banner: "pictures/Zee_le_zara.jpg"},
//    6
     {filePath:"music/Kabira.mp3",
     songName: "kabira",
     artist: "artist1",
     banner: "pictures/Kabira_cover.jpg"},
//    7
     {filePath:"music/Main_Dhoondne_Ko_Zamaane.mp3",
     songName: "Main Dhoonde Ko",
     artist: "artist1",
     banner: "pictures/main_dhoondne_ko_zamane.jpg"},
//    8
     {filePath:"music/Tera_Zikr.mp3",
     songName: "Tera zikr",
     artist: "artist1",
     banner: "pictures/Tera_zikr.jpg"},
//    9
     {filePath:"music/Tumse_Mohabbat_Hai.mp3",
     songName: "Tumse mohabbat hai", 
     artist: "artist1",
     banner: "pictures/Tumse_mohobbat_hai.jpg"},
]


// let audioElement = songs[0].filePath;


// let playMusic = function(){
//     audioElement.pause();
//     alert("hello");


masterPlay.addEventListener("click" , ()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    recentSong.innerText = songs[songIndex].songName;
    currentMusicBanner.src = songs[songIndex].banner;
    musicPlayerAnimation.style.opacity = 1;
    if(songIndex == 0){
     document.getElementById('100').style.opacity = 1;
    }
}
  else{
     audioElement.pause();
     masterPlay.classList.remove("fa-pause-circle");
     masterPlay.classList.add("fa-play-circle");
     musicPlayerAnimation.style.opacity = 0;
     document.getElementById('100').style.opacity = 0;
  }
   
})
// masterPlay.addEventListener('click' , ()=>{
//      if(songIndex == 0 , audioElement.paused || audioElement.currentTime<=0){
//          document.getElementById('100').style.opacity = 0;
//      }else{
//          document.getElementById('100').style.opacity = 1;
//      }
//      ;
// })


songIndex = 0;
let nextSong = ()=>{
     songIndex = ((songIndex + 1) % songs.length);
     audioElement.src = songs[songIndex].filePath;
     recentSong.innerText = songs[songIndex].songName;
     currentMusicBanner.src = songs[songIndex].banner;
     musicPlayerAnimation.style.opacity = 1;
     audioElement.play();
     document.getElementById(songIndex * 10).style.opacity = 1;
    
     if(songIndex == 0){
          document.getElementById('100').style.opacity = 1
          document.getElementById((songIndex+9)*10).style.opacity = 0;
     }else if(songIndex == 1){
          document.getElementById('100').style.opacity = 0;
     }
     else{
          document.getElementById((songIndex-1)*10).style.opacity = 0;



     masterPlay.addEventListener('click' , ()=>{
          if(audioElement.paused || audioElement.currentTime<=0){
               if(songIndex == 0){
                    document.getElementById('100').style.opacity = 1;
               }
                    document.getElementById(songIndex*10).style.opacity = 0;
          

          
          }else{
               // if(songIndex == 0){
               //      document.getElementById('100').style.opacity = 1;
               // }
               document.getElementById(songIndex*10).style.opacity = 1;
          }
     })    
     }


     // masterPlay.addEventListener('click' , ()=>{
     //      if(audioElement.paused){
     //           if(songIndex != 0){
     //                document.getElementById(songIndex * 10).style.opacity = 0;
     //           }
     //           else{
     //                document.getElementById('100').style.opacity = 0;
     //           }
     //      }
     //      else{
     //          if(audioElement == 0){
     //           document.getElementById(songIndex*10).style.opacity = 0;
     //          }else{
     //           document.getElementById('100').style.opacity = 1;
     //          }
     //      }

     }




let prevSong = ()=>{
     songIndex = (songIndex - 1 + songs.length) % songs.length;
     audioElement.src = songs[songIndex].filePath;
     recentSong.innerText = songs[songIndex].songName;
     currentMusicBanner.src = songs[songIndex].banner;
     musicPlayerAnimation.style.opacity = 1;
     audioElement.play();
          
     document.getElementById(songIndex * 10).style.opacity = 1;
     if(songIndex == 9){
           document.getElementById('100').style.opacity = 0
     }else if(songIndex == 0){
          document.getElementById('100').style.opacity = 1;
          document.getElementById('10').style.opacity = 0;
     }
     else{
     document.getElementById(((songIndex + 1) % songs.length) * 10).style.opacity = 0;


     masterPlay.addEventListener('click' , ()=>{
          if(audioElement.paused || audioElement.currentTime<=0){
               if(songIndex == 0){
                    document.getElementById('100').style.opacity = 0;
               }
                    document.getElementById(songIndex*10).style.opacity = 0;
          

          }else{
               // if(songIndex == 0){
               //      document.getElementById('100').style.opacity = 1;
               // }
               document.getElementById(songIndex*10).style.opacity = 1;
          }
     }) 
     }


     // masterPlay.addEventListener('click' , ()=>{
     //      if(audioElement.paused){
     //           if(songIndex != 0){
     //                document.getElementById(songIndex * 10).style.opacity = 0;
     //           }
     //           else{
     //                document.getElementById('100').style.opacity = 0;
     //           }
     //      }
     //      else{
     //          if(audioElement == 0){
     //           document.getElementById(songIndex * 10).style.opacity = 0;
     //          }else{
     //           document.getElementById('100').style.opacity = 1;
     //          }
     //      }
     // })
}

next.addEventListener('click' ,  ()=>{
     if(songs >= songs[0]){
          nextSong();
          masterPlay.classList.remove("fa-play-circle");
          masterPlay.classList.add("fa-pause-circle");
     }
     else{
          masterPlay.classList.remove("fa-pause-circle");
          masterPlay.classList.add("fa-play-circle");
          recentSong.innerText = ' ';
          musicPlayerAnimation.style.opacity = 0;
       }
     })



previous.addEventListener('click' , ()=>{
     if(songs >= songs[0]){
          prevSong();
          masterPlay.classList.remove("fa-play-circle");
          masterPlay.classList.add("fa-pause-circle");
     }
     else{
          masterPlay.classList.remove("fa-pause-circle");
          masterPlay.classList.add("fa-play-circle");
          recentSong.innerText = ' ';
          musicPlayerAnimation.style.opacity = 0;
     }
})


 audioElement.addEventListener('ended' , ()=>{
     if(audioElement.currentTime == audioElement.duration){
          nextSong();
     }
})


audioElement.addEventListener('timeupdate' , ()=>{
     progress = parseInt((audioElement.currentTime / audioElement.duration)*100);
     progressBar.value = progress;
     audioElement.duration


     mintotalTime = Math.floor(audioElement.duration / 60);
     sectotalTime = Math.floor(audioElement.duration % 60);
     if(audioElement.duration){
     totalTime.innerText = `${mintotalTime}:${sectotalTime}`
     }

     minDuration = Math.floor(audioElement.currentTime / 60);
     secDuration  = Math.floor(audioElement.currentTime % 60);
     if(secDuration<10){
          secDuration = `0${secDuration}`;
     }
     duration.innerText = `${minDuration}:${secDuration}`;

})

progressBar.addEventListener('change' , ()=>{
     audioElement.currentTime = progressBar.value * audioElement.duration/100;
})



// const makeAllPlays = ()=>{
//      Array.from(document.getElementsByClassName('song-item-play')).forEach((element)=>{
//          element.classList.style.opacity=0;
//      })
//  }
 
//  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//      element.addEventListener('click', (e)=>{ 
//          makeAllPlays();
//          songIndex = parseInt(e.target.id);
//          e.target.classList.remove('fa-play-circle');
//          e.target.classList.add('fa-pause-circle');
//          audioElement.src = `songs/${songIndex+1}.mp3`;
//          masterSongName.innerText = songs[songIndex].songName;
//          audioElement.currentTime = 0;
//          audioElement.play();
//          gif.style.opacity = 1;
//          masterPlay.classList.remove('fa-play-circle');
//          masterPlay.classList.add('fa-pause-circle');
//      })
//  })
        

// const makeAllPlays = ()=>{
//       Array.from(songList).forEach((element)=>{
//           element.style.opacity = 0;
//       })
// }        

// for(let i = 0 ; i<songList.length ; i++){
//      if(audioElement.plaused){
//           musicPlayerAnimation.style.opacity = 0;
//           masterPlay.classList.remove("fa-pause-circle");
//           masterPlay.classList.add("fa-play-circle");
// }else{
//      musicPlayerAnimation.style.opacity = 1;
//      masterPlay.classList.remove("fa-pause-circle");
//      masterPlay.classList.add("fa-play-circle");
// }}

// Array.from(songList).forEach((element)=>{
//      element.addEventListener('click' , (e)=>{
//      //   console.log(e.target);
//       e.songs.target = 10
//        songIndex = (e.target.id);
//        console.log()
//      //   console.log(songIndex);

//      }
//      )    
// })

const makeAllPlays = ()=>{
     Array.from(songItemPlay).forEach((songItemPlay)=>{
         songItemPlay.style.opacity = 0 ;
     })
}

Array.from(songList).forEach((element)=>{
     element.addEventListener('click' , (e)=>{
          masterPlay.classList.remove("fa-play-circle");
          masterPlay.classList.add("fa-pause-circle");
          musicPlayerAnimation.style.opacity = 1;
          // e.target.classList('song-item-play').style.opacity = 1;
          makeAllPlays();
          songIndex = (e.target.id);
          audioElement.src = songs[songIndex].filePath;
          recentSong.innerText = songs[songIndex].songName;
          currentMusicBanner.src = songs[songIndex].banner;
          audioElement.play();
          songIndex2 = (e.target.id * 10);
          console.log(songIndex2);
          if(songIndex2 == 0){
               songIndex2 = '100';
               console.log(songIndex2);
          }
          document.getElementById(songIndex2).style.opacity =1;

          // console.log(songIndex+ 10);
          // document.getElementById((e.target.id) + 10).style.opacity = 1;
          // document.getElementById(e.target+10).style.opacity = 1;
          }
     )
})




// Array.from(songList).forEach((element)=>{
//     element.addEventListener('click' , (e)=>{
//      songIndex = 0;
//      // songItemPlay.style.opacity = 1;
//      // audioElement.src = songs[songIndex+1].filePath;
//      recentSong.innerText = songs[songIndex+1].songName;
//      currentMusicBanner.src = songs[songIndex+1].banner;
//      audioElement.currentTime = 0;
//      audioElement.play()//     })
// });




//   masterPlay.addEventListener('click' , ()=>{
     
//           if(audioElement.paused){
//                if(songIndex != 0){
//                     document.getElementById(songIndex * 10).style.opacity = 0;
//                }
//                else{
//                     document.getElementById('100').style.opacity = 0;
//                }
//           }
//           else{
//               if(audioElement == 0){
//                document.getElementById(songIndex * 10).style.opacity = 1;
//               }else{
//                document.getElementById('100').style.opacity = 1;
//               }
//           }
//      })


// masterPlay.addEventListener('click' , ()=>{
//       if(songIndex == 0 , audioElement.paused || audioElement.currentTime<=0){
//           document.getElementById('100').style.opacity = 0;
//       }else{
//           document.getElementById('100').style.opacity = 1;
//       }
// })
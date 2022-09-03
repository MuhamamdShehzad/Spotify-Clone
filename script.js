console.log("Welcome to Spotify");
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
let gif = document.getElementById("gif");
let myProgressBar = document.getElementById("myProgressBar");
let SongsTitle = document.getElementById("SongsTitle");

let songsId = Array.from(document.getElementsByClassName("songItem"));
let songPlay = Array.from(document.getElementsByClassName("songsItemPlay"));
let songs = [
  {
    songName: "Warriyo - Mortals ",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Cielo - Huma-Huma",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "DEAF KEV - Invincible -320k",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Different Heaven & EH!DE ",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Janji-Heroes-Tonight",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
];
console.log("hello");
songsId.forEach((element, i) => {
  console.log("hello");
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("SongsName")[0].innerText = songs[i].songName;
  // let temp = new Audio(songs[i].filePath).duration;
  //
});
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songsItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};
let songsIndex = 1;
let t;
songPlay.forEach((element) => {
  element.addEventListener("click", (e) => {
    t = e;
    songsIndex = parseInt(t.target.id);
    let tempAudio = new Audio(`songs/${songsIndex}.mp3`);

    if (audioElement.src != tempAudio.src) {
      audioElement.src = tempAudio.src;
    }
    if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.play();
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
      t.target.classList.remove("fa-circle-play");
      t.target.classList.add("fa-circle-pause");
      SongsTitle.innerText = songs[songsIndex - 1].songName;
      gif.style.opacity = 1;
    } else {
      audioElement.pause();
      masterPlay.classList.remove("fa-circle-pause");
      masterPlay.classList.add("fa-circle-play");

      t.target.classList.remove("fa-circle-pause");
      t.target.classList.add("fa-circle-play");
      gif.style.opacity = 0;
    }
  });
});

/* Handle player*/
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    t.target.classList.remove("fa-circle-play");
    t.target.classList.add("fa-circle-pause");
    SongsTitle.innerText = songs[songsIndex - 1].songName;
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");

    t.target.classList.remove("fa-circle-pause");
    t.target.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
audioElement.addEventListener("timeupdate", () => {
  // Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

document.getElementById("next").addEventListener("click", () => {
  if (songsIndex >= 5) {
    songsIndex = 1;
  } else {
    songsIndex += 1;
  }
  audioElement.src = `songs/${songsIndex}.mp3`;
  SongsTitle.innerText = songs[songsIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songsIndex <= 1) {
    songsIndex = 1;
  } else {
    songsIndex -= 1;
  }
  audioElement.src = `songs/${songsIndex}.mp3`;
  SongsTitle.innerText = songs[songsIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

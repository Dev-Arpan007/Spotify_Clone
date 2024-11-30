let play = document.querySelectorAll(".play-icon");
let song = document.querySelector("#song");
let progress = document.getElementById("progress-bar");
let volume = document.getElementById("volume-bar");
let forward = document.getElementById("forward");
let backward = document.getElementById("backward");
let sname = document.querySelector(".moving-text1");
let sart = document.querySelector(".moving-text2");
let simg = document.querySelector("#playing-img");
let voli = document.getElementById("vol-icon");
let lib = document.querySelector(".lib-txt");
let library = document.querySelector(".libsongs");
let d=document.querySelector(".dur");
let c=document.querySelector(".currtime");
// progress.value=0;
let currArtist, currNum = 0, currVol = 0.4;
let si = document.querySelectorAll(".si");
let mysn= document.querySelectorAll(".sn");
si.forEach((element, index) => {
    si[index].addEventListener("click", () => {
        let parent = si[index].parentNode;
        let sn = parent.querySelector(".sn");
        // sn.style.color="#2cac66"
        playlibSong(sn.innerHTML);

    })
});
// function green(name){
//     mysn.forEach((element,index) => {
//         let ele=mysn[index].innerHTML;
//         alert("in green " +ele);
//         console.log("in green " +ele);
//         if(ele==name)
//             mysn[index].innerHTML.style.color="#2cac66"
//         if(ele!=name && sn[index].innerHTML.style.color=="#2cac66")
//             mysn[index].innerHTML.style.color="white"
//     });
// }
function green(name) {
    mysn.forEach((element, index) => {
        let ele = element.innerHTML; // Get the inner HTML content of the current element
        console.log("in green " + ele);

        // If the element content matches 'name', set the text color to green
        if (ele === name) {
            element.style.color = "#2cac66";
        }
        // If the element content does not match 'name' and its color is green, reset it to white
        else if (element.style.color === "rgb(44, 172, 102)") {  // RGB equivalent of "#2cac66"
            element.style.color = "white";
        }
    });
}

function playlibSong(songName) {
    for (let key in mylibsongs) {
        if (mylibsongs[key].songName === songName) {

            librarySong(key);
        }
    }
    console.log("Song not found.");
}

song.onloadedmetadata = function () {
    progress.value = song.currentTime;
    // d.innerHTML=`${song.duration/60}:{song.duration%60}`;
    d.innerHTML = `${Math.floor(song.duration / 60)}`+":"+`${Math.floor(song.duration % 60)}`
    c.innerHTML=`${Math.floor(song.currentTime / 60)}`+":"+`${Math.floor(song.currentTime % 60)}`;
    progress.max = song.duration;
    song.volume = currVol;
    volume.value = song.volume * 100;
    volume.max = 100;
    // volp.innerHTML="60%";


}


lib.addEventListener("click", () => {
    // console.log("clicked lib logo");
    setTimeout(() => {
        library.classList.toggle("hidden");
    }, 150)

})

let songLibrary = {
    arijitSongs: {
        songURL: [
            'songs/Jawan Chaleya (Hindi)(PagalWorld.com.sb).mp3',
            'songs/Satranga_320(PagalWorld.com.sb).mp3'
        ],

        songArtist: ["Aniruddh Ravichander, Arijit Singh, Shilpa Rao, Kumar", "Arijit Singh, Shreyas Puranik, Siddhart-Garima"],
        songName: ['Chaleya(From "Jawan")', 'Satranga(From "ANIMAL")']
    },

    jubinSongs: {
        songURL: ['songs/Humnava Mere_320(PagalWorld.com.sb).mp3'],
        songArtist: ['Jubin Nautiyal, Rocky-Shiv'],
        songName: ['Humnava Mere']
    },

    pritamSongs: {
        songURL: ['songs/Rasiya_320(PagalWorld.com.sb).mp3'],
        songName: ['Rasiya(From "Brahmastra")'],
        songArtist: ['Pritam, Shreya Ghoshal, TUSHAR JOSHI']
    },

}

let mylibsongs = {
    s0: {
        songURL: 'songs/Husn - Anuv Jain 320 Kbps.mp3',
        songName: 'Husn',
        songArtist: 'Anuv Jain'
    },
    s1: {
        songURL: 'songs/Ek Tarfa Reprise(KoshalWorld.Com).mp3',
        songName: 'Ek Tarfa - Reprise',
        songArtist: 'Darshan Raval'
    },

    s2: {
        songURL: 'songs/Pasoori_320(PagalWorld.com.sb).mp3',
        songName: 'Pasoori',
        songArtist: 'Shae Gill, Ali Sethi'
    },

    s3: {
        songURL: 'songs/Teri Baaton Mein Aisa Uljha Jiya_320(PagalWorld.com.sb).mp3',
        songName: 'Teri Baaton Mein Aisa Uljha Jiya Title Song(From "Teri Baaton Mein Aisa Uljha Jiya")',
        songArtist: 'Raghav, Tanishk Baghchi, Asheesh kaur'
    },

    s4: {
        songURL: 'songs/128-Tumhare Hi Rahenge Hum - Stree 2 128 Kbps.mp3',
        songName: 'Tumhare Hi Rahenge Hum(From "Stree 2")',
        songArtist: 'Sachin-Jigar, Varun Jain, Shilpa Rao, Amitav Bhattacharya'
    },

    s5: {
        songURL: 'songs/128-Tum Se - Teri Baaton Mein Aisa Uljha Jiya 128 Kbps.mp3',
        songName: 'Tum Se(From "Teri Baaton Mein Aisa Uljha Jiya")',
        songArtist: 'Sachin-Jigar, Raghav Chaitanya, Varun Jain, Indraneel'
    }

}

// Iterate over play icons and add event listeners
play.forEach((element, index) => {
    play[index].addEventListener("click", () => {
        let x = play[index];
        if (x.nextElementSibling) {
            let str = x.nextElementSibling.innerHTML.split(" ")[0];
            artist(str);
        }
    });
});

function artist(e, i = 0) {
    // Convert artist name to lowercase and append "Songs" to match object keys
    let artistKey = e.toLowerCase() + "Songs";
    currArtist = e.toLowerCase();
    currNum = i;
    console.log(currArtist, currNum);
    // Check if the artistKey exists in the songLibrary
    if (songLibrary[artistKey]) {
        let music = document.querySelector("#song");

        // Update the music source to the selected song
        music.src = songLibrary[artistKey].songURL[i];
        sname.innerHTML = songLibrary[artistKey].songName[i];
        green(songLibrary[artistKey].songName[i]);
        sart.innerHTML = songLibrary[artistKey].songArtist[i];
        songimg(songLibrary[artistKey].songName[i]);
        progress.value = 0;
        song.currentTime = progress.value;
        console.log(music.src);
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
        // For debugging: alert the selected song
        console.log(`Now playing: ${songLibrary[artistKey].songURL[i]}`);
    } else {
        console.error(`Artist "${e}" not found in the library.`);
    }
}

function librarySong(e) {
    currArtist = e;
    console.log(e);
    if (mylibsongs[e]) {
        let music = document.querySelector("#song");

        // Update the music source to the selected song
        music.src = mylibsongs[e].songURL;
        sname.innerHTML = mylibsongs[e].songName;
        // alert("in libsng func "+mylibsongs[e].songName);
        green(mylibsongs[e].songName);
        sart.innerHTML = mylibsongs[e].songArtist;
        songimg(mylibsongs[e].songName);
        progress.value = 0;
        song.currentTime = progress.value;
        console.log(music.src);
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
        // For debugging: alert the selected song
        console.log(`Now playing: ${mylibsongs[e].songURL}`);
    } else {
        console.error(`Artist "${e}" not found in the library.`);
    }

}

let icon = document.querySelector("#play");

icon.addEventListener('click', function () {
    playSong();
})

function playSong() {

    if (song.play()) {
        if (icon.classList.contains("fa-pause")) {
            icon.classList.remove("fa-pause");
            icon.classList.add("fa-play");
            song.pause();
        } else {
            icon.classList.remove("fa-play");
            icon.classList.add("fa-pause");
            song.play();
        }

    }
    else {
        if (icon.classList.contains("fa-play")) {
            icon.classList.remove("fa-play");
            icon.classList.add("fa-pause");
            song.play();
        }
        else {
            icon.classList.remove("fa-pause");
            icon.classList.add("fa-play");
            song.pause();
        }


    }
}

progress.addEventListener('change', () => {
    song.currentTime = progress.value;

})
progress.addEventListener('click', () => {
    song.currentTime = progress.value;
})
volume.addEventListener('change', () => {
    song.volume = (volume.value / 100);
    currVol = song.volume;
})
volume.addEventListener('click', () => {
    song.volume = (volume.value / 100);
    currVol = song.volume;
})

forward.addEventListener("click", () => {
    if (currArtist[0] != "s") {
        let newname = currArtist + "Songs";
        let len = songLibrary[newname].songURL.length;
        artist(currArtist, (currNum + 1) % len);
    }else{
        let newkey = parseInt(currArtist[1]);
        // console.log("Before updating "+newkey);
        newkey+=1;
        // console.log("After Updating "+ newkey)
        currArtist = currArtist[0] + newkey%6;
        console.log(currArtist);
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");

        librarySong(currArtist);
    }
})
backward.addEventListener("click", () => {
    if (currArtist[0] != "s") {
    let newname = currArtist + "Songs";
    let len = songLibrary[newname].songURL.length;
    if (currNum - 1 < 0)
        currNum = len;
    artist(currArtist, currNum - 1);
    }
    else{
        let newkey = parseInt(currArtist[1]);
        // console.log("Before updating "+newkey);
        newkey-=1;
        if(newkey<0)
            newkey=5;
        // console.log("After Updating "+ newkey)
        currArtist = currArtist[0] + newkey%6;
        console.log(currArtist);
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");

        librarySong(currArtist);
    }
})

setInterval(() => {
    progress.value = song.currentTime;
    c.innerHTML=`${Math.floor(song.currentTime / 60)}`+":"+`${Math.floor(song.currentTime % 60)}`;
    console.log(currArtist, progress.value, song.duration);
    if (progress.value >= Math.floor(song.duration)) {
        if (currArtist[0] != "s") {
            icon.classList.remove("fa-pause");
            icon.classList.add("fa-play");
            // alert("Song completed");
            let newname = currArtist + "Songs";
            let len = songLibrary[newname].songURL.length;
            // console.log(currArtist,len,(currNum+1)%len);
            artist(currArtist, (currNum + 1) % len);
        }
        else {
            let newkey = parseInt(currArtist[1]);
            console.log("Before updating "+newkey);
            newkey+=1;
            console.log("After Updating "+ newkey)
            currArtist = currArtist[0] + newkey%6;
            console.log(currArtist);
            icon.classList.remove("fa-pause");
            icon.classList.add("fa-play");

            librarySong(currArtist);
        }
    }
}, 500)
function songimg(songname) {
    if (songname == 'Chaleya(From "Jawan")')
        simg.src = 'images/Chaleya.jpg';
    else if (songname == 'Satranga(From "ANIMAL")')
        simg.src = 'images/Satranga.jpg'
    else if (songname == 'Rasiya(From "Brahmastra")')
        simg.src = 'images/Rasiya.jpg'
    else if (songname == 'Pasoori')
        simg.src = 'images/Pasoori.jpg'
    else if (songname == 'Husn')
        simg.src = 'images/Husn.jpg'
    else if (songname == 'Teri Baaton Mein Aisa Uljha Jiya Title Song(From "Teri Baaton Mein Aisa Uljha Jiya")')
        simg.src = 'images/teriBaton2.jpg'
    else if (songname == 'Tumhare Hi Rahenge Hum(From "Stree 2")')
        simg.src = 'images/Tumhare-Hi-Rahenge-Hum.jpg'
    else if (songname == 'Tum Se(From "Teri Baaton Mein Aisa Uljha Jiya")')
        simg.src = 'images/tumse.jpg'
    else if (songname == 'Ek Tarfa - Reprise')
        simg.src = 'images/ekTarfa.jpg'
}
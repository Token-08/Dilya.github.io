function createMusic(title, director, duration) {
    const music = {
        title: title,
        director: director,
        duration: duration,

    }

    return music; 
}

function averageDuration(musics) {
    let avgDuration = 0;
    for(let i=0; i<musics.length; i++) {
        avgDuration += musics[i].duration;
    }

    avgDuration = avgDuration/musics.length;

    return avgDuration;
}

let musics = []
let tempMusic = createMusic( "Alligator", "Monsta X", 3:14);
doramas.push(tempDorama); 

tempDorama = createDorama("SHOUT OUT", "ENHYPEN", 5:24);
doramas.push(tempMusic); 

let avgDurationOfMusic= averageDuration(musics);

// musics.forEach(element => {
//     const winText = document.createElement(".win-text");
//     let docFragment = document.createDocumentFragment();
//     docFragment.appendChild(winText);


//     const title = document.createElement("p")
//     title.innerHTML = element.title;

//     winText.appendChild(title);
//     // const director = document.createElement("p")
//     // director.innerHTML - element.director;
//     // const duration = document.createElement("p")
//     // director.innerHTML - element.duration;
//     // document.querySelector(".title").innerHTML = element.title;
//     // document.querySelector(".director").innerHTML = element.director;
//     // document.querySelector(".duration").innerHTML = element.duration + " min";
//     document.querySelector(".win-text").appendChild(title);
//     document.querySelector(".win-text").appendChild(director);
//     document.querySelector(".win-text").appendChild(duration);


// });


// const director = document.createElement("p")
// director.innerHTML = element.director;
// const duration = document.createElement("p")
// director.innerHTML = element.duration;
// document.querySelector(".title").innerHTML = doramas[0].title;
// document.querySelector(".director").innerHTML = doramas[0].director;
// document.querySelector(".duration").innerHTML = doramas[0].duration + " min";

// document.querySelector(".title").innerHTML = doramas[1].title;
// document.querySelector(".director").innerHTML = doramas[1].director;
// document.querySelector(".duration").innerHTML = doramas[1].duration + " min";

document.getElementById("title").innerHTML = musics[0].title;
document.getElementById("director").innerHTML = musics[0].director;
document.getElementById("duration").innerHTML = musics[0].duration + " min";

document.getElementById("title1").innerHTML = musics[1].title;
document.getElementById("director1").innerHTML = musics[1].director;
document.getElementById("duration1").innerHTML = musics[1].duration + " min";
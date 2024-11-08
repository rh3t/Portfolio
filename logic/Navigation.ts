// Navigation Bar Logic
"use client"

// Function(s)
function pressedHome(){

    var path = '/';
    if (location.pathname != path){
        location.href = path;
    }

}

function pressedAbout(){

    var path = '/about';
    if (location.pathname != path){
        location.href = path;
    }

}

function pressedProjects(){

    var path = '/projects';
    if (location.pathname != path){
        location.href = path;
    }

}

function pressedArchive(){

    window.open('https://archive.rh3t.dev')

}

export {
    pressedHome,
    pressedAbout,
    pressedArchive,
    pressedProjects
}
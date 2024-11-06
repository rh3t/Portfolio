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

function pressedBlog(){

    var path = '/blog';
    if (location.pathname != path){
        location.href = path;
    }

}

function pressedArchive(){

    var path = '/archive';
    if (location.pathname != path){
        location.href = path;
    }

}

function pressedWork(){

    var path = '/work';
    if (location.pathname != path){
        location.href = path;
    }

}

export {
    pressedHome,
    pressedAbout,
    pressedBlog,
    pressedArchive,
    pressedWork
}
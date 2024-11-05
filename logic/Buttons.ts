// Buttons Logic
"use client";

function sendToGitHub() {
    window.open('https://github.com/rh3t')
}

function sendToTwitter() {
    window.open('https://x.com/rh3t_')
}

function sendToMonkeytype(){
    window.open('https://monkeytype.com/profile/Rh3t_')
}

function sendToDiscord(){
    window.open('discord:discord.com/users/996964730252042320')
}

function sendToHome(){
    location.href = '/'
}

export {
    sendToGitHub,
    sendToTwitter,
    sendToMonkeytype,
    sendToDiscord,
    sendToHome
}
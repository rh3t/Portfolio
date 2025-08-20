"use client";

// Values
const discordURL = 'https://discordapp.com/users/996964730252042320';
const githubURL = 'https://github.com/rh3t';
const emailURL = 'mailto:keegan@rh3t.dev';
const steamURL = 'https://steamcommunity.com/id/rh3t_/';
const twitchURL = 'https://www.twitch.tv/rh3t_';
const monkeyURL = 'https://monkeytype.com/profile/Rh3t_';

// Redirects
function toDiscord() {
    window.open(discordURL)
}
function toGitHub() {
    window.open(githubURL)
}
function toEmail() {
    window.open(emailURL)
}
function toSteam() {
    window.open(steamURL)
}
function toTwitch(){
    window.open(twitchURL)
}
function toMonkey(){
    window.open(monkeyURL)
}

// Export
export {
    toDiscord,
    toGitHub,
    toEmail,
    toSteam,
    toTwitch,
    toMonkey
}
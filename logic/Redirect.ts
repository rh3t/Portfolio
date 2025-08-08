"use client";

// Values
const discordURL = 'https://discordapp.com/users/996964730252042320';
const githubURL = 'https://github.com/rh3t';
const emailURL = 'mailto:keegan@rh3t.dev';
const steamURL = 'https://steamcommunity.com/id/rh3t_/';
const xURL = 'https://x.com/rh3t_';

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
function toX() {
    window.open(xURL)
}

// Export
export {
    toDiscord,
    toGitHub,
    toEmail,
    toSteam,
    toX
}
const homeTable = document.getElementById("home-table")
const guestTable = document.getElementById("guest-table")

let homeScored = 0
let guestScored = 0

function homeone() {
    homeScored += 1;
    homeTable.innerText = homeScored;
}

function hometwo() {
    homeScored += 2;
    homeTable.innerText = homeScored;
}

function homethree() {
    homeScored = homeScored + 3;
    homeTable.innerText = homeScored;
}

function guestone() {
    guestScored = guestScored + 1;
    guestTable.innerText = guestScored;
}

function guesttwo() {
    guestScored = guestScored + 2;
    guestTable.innerText = guestScored;
}

function guestthree() {
    guestScored = guestScored + 3;
    guestTable.innerText = guestScored;
}

function newgame() {
    homeTable.textContent = 0
    homeScored = 0
    guestTable.textContent = 0
    guestScored = 0
    liveSet.textContent = 0
}

const oneScore = document.getElementById("one-score")
const twoScore = document.getElementById("two-score")
const threeScore = document.getElementById("three-score")
const fourScore = document.getElementById("four-score")
const liveSet = document.getElementById("live-set")

function setOne() {
    liveSet.textContent = 1
    oneScore.textContent = homeTable.textContent + ":" + guestTable.textContent
    // oneScore.textContent = homeTable.textContent
}

function setTwo() {
    liveSet.textContent = 2
    twoScore.textContent = homeTable.textContent + ":" + guestTable.textContent
    // oneScore.textContent = homeTable.textContent
}

function setThree() {
    liveSet.textContent = 3
    threeScore.textContent = homeTable.textContent + ":" + guestTable.textContent
    // oneScore.textContent = homeTable.textContent
}

function setFour() {
    liveSet.textContent = 4
    fourScore.textContent = homeTable.textContent + ":" + guestTable.textContent
    // oneScore.textContent = homeTable.textContent
}
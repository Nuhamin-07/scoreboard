let timer = document.getElementById("timer")
let homeValue = document.getElementById("home-value")
let guestValue = document.getElementById("guest-value")
let addOneHome = document.getElementById("home-add-one")
let addTwoHome = document.getElementById("home-add-two")
let addThreeHome = document.getElementById("home-add-three")
let addOneGuest = document.getElementById("guest-add-one")
let addTwoGuest = document.getElementById("guest-add-two")
let addThreeGuest = document.getElementById("guest-add-three")
let newGame = document.getElementById("new-game")
let minutes = 0
let seconds = 0
let timeInterval;
let homeCounter = 0;
let guestCounter = 0;
let displayTime = "";

function startTimer() {
    if(!timeInterval) {
    timeInterval = setInterval(() => {
    seconds++
    
    if (seconds === 60) {
          seconds = 0;
          minutes++;
    }
    seconds = seconds < 10 ? "0" + seconds : seconds;
    if(minutes === 0) {
        displayTime = `00:${seconds}`
    } else if(minutes < 10) {
        displayTime = `0${minutes}:${seconds}`
    } else {
        displayTime = `${minutes}:${seconds}`
    }
    if(minutes === 60) {
        minutes = 0
        seconds = 0
        displayTime = "00"
    }
    timer.textContent = displayTime
        
    }, 1000)
        }
    }

    startTimer()

    function homeAddOne() {
        homeCounter += 1
        homeValue.textContent = homeCounter
    }

    function homeAddTwo() {
        homeCounter += 2
        homeValue.textContent = homeCounter
    }

    function homeAddThree() {
        homeCounter += 3
        homeValue.textContent = homeCounter
    }

function guestAddOne() {
    guestCounter += 1
    guestValue.textContent = guestCounter
}

function guestAddTwo() {
    guestCounter += 2
    guestValue.textContent = guestCounter
}

function guestAddThree() {
    guestCounter += 3
    guestValue.textContent = guestCounter
}

function reset() {
    homeCounter = 0
    guestCounter = 0
    homeValue.textContent = homeCounter
    guestValue.textContent = guestCounter
    seconds = 0
    minutes = 0
    timer.textContent = "00:00"
}




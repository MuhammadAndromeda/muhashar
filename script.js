const short = document.getElementById('short');

function bars(){
    short.classList.replace('translate-x-full', 'translate-x-0');
}

function cancel(){
    short.classList.replace('translate-x-0', 'translate-x-full');
}

const texts = [
    "Full-Stack Developer",
    "Public Speaker",
    "Data Analyst",
    "UI/UX Designer",
    "Cyber Security Enthusiast",
]

let speed = 100;

const textElement = document.getElementById("typewriter-text");

let textIndex = 0;
let characterIndex = 0;

function typeWriter(){
    if(characterIndex < texts[textIndex].length){
        textElement.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed)
    }

    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElement.innerHTML.length > 0){
        textElement.innerHTML = textElement.innerHTML.slice(0,-1)
        setTimeout(eraseText, 80)
    }
    else{
        textIndex = (textIndex + 1)%texts.length;
        characterIndex = 0;
        setTimeout(typeWriter,500)
    }
}

window.onload= typeWriter

const certi = document.getElementById('certificate');
const project = document.getElementById('projects');
const achiev = document.getElementById('achievement');

const certButton = document.getElementById('certButton');
const projButton = document.getElementById('projButton');
const achButton = document.getElementById('achButton');

certi.classList.add('show');
project.classList.add('hide');
achiev.classList.add('hide');

certButton.classList.add('visit');
projButton.classList.add('unvisited');
achButton.classList.add('unvisited');

function showCert(){
    certi.classList.replace('hide', 'show');
    project.classList.replace('show', 'hide');
    achiev.classList.replace('show', 'hide');

    certButton.classList.replace('unvisited', 'visit');
    projButton.classList.replace('visit', 'unvisited');
    achButton.classList.replace('visit', 'unvisited');
}

function showProject(){
    certi.classList.replace('show', 'hide');
    project.classList.replace('hide', 'show');
    achiev.classList.replace('show', 'hide');

    certButton.classList.replace('visit', 'unvisited');
    projButton.classList.replace('unvisited', 'visit');
    achButton.classList.replace('visit', 'unvisited');
}

function showAchiev(){
    certi.classList.replace('show', 'hide');
    project.classList.replace('show', 'hide');
    achiev.classList.replace('hide', 'show');

    certButton.classList.replace('visit', 'unvisited');
    projButton.classList.replace('visit', 'unvisited');
    achButton.classList.replace('unvisited', 'visit');
}
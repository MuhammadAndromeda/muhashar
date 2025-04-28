const short = document.getElementById('short');

function bars(){
    short.style.transform = 'translateX(0)';
}

function cancel(){
    short.style.transform = 'translateX(3000px)';
}

const texts = [
    "Front-End Developer",
    "UI Designer",
    "SEO Expert",
]

let speed = 130;

const textElement = document.querySelector(".typewriter-text");

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
        setTimeout(eraseText, 100)
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
projButton.classList.add('unvis');
achButton.classList.add('unvis');

function showCert(){
    certi.classList.replace('hide', 'show');
    project.classList.replace('show', 'hide');
    achiev.classList.replace('show', 'hide');

    certButton.classList.replace('unvis', 'visit');
    projButton.classList.replace('visit', 'unvis');
    achButton.classList.replace('visit', 'unvis');
}

function showProject(){
    certi.classList.replace('show', 'hide');
    project.classList.replace('hide', 'show');
    achiev.classList.replace('show', 'hide');

    certButton.classList.replace('visit', 'unvis');
    projButton.classList.replace('unvis', 'visit');
    achButton.classList.replace('visit', 'unvis');
}

function showAchiev(){
    certi.classList.replace('show', 'hide');
    project.classList.replace('show', 'hide');
    achiev.classList.replace('hide', 'show');

    certButton.classList.replace('visit', 'unvis');
    projButton.classList.replace('visit', 'unvis');
    achButton.classList.replace('unvis', 'visit');
}
//Header Links
let topLogo = document.getElementById('top-logo');
let aboutButton = document.getElementById('about-link');
let projectsButton = document.getElementById('projects-link');
let contactButton = document.getElementById('contact-link');

topLogo.onmouseover = function() {
    topLogo.style.color = 'lightgray';
}
topLogo.onmouseleave = function() {
    topLogo.style.color = 'white';
}

aboutButton.onmouseover = function() {
    aboutButton.style.backgroundColor = 'black';
}
projectsButton.onmouseover = function() {
    projectsButton.style.backgroundColor = 'black';
}
contactButton.onmouseover = function() {
    contactButton.style.backgroundColor = 'black';
}

aboutButton.onmouseleave = function() {
    aboutButton.style.backgroundColor = 'rgb(57, 58, 59)';
}
projectsButton.onmouseleave = function() {
    projectsButton.style.backgroundColor = 'rgb(57, 58, 59)';
}
contactButton.onmouseleave = function() {
    contactButton.style.backgroundColor = 'rgb(57, 58, 59)';
}

//Intro Button
let introButton = document.getElementById('get-in-touch');
introButton.onmouseenter = function() {
    introButton.style.backgroundColor = 'rgb(57, 58, 59)';
    introButton.style.color = 'lightgray';
}
introButton.onmouseleave = function() {
    introButton.style.backgroundColor = 'transparent';
    introButton.style.color = 'rgb(57, 58, 59)';
}

//Contact Buttons
let githubLogo = document.getElementById('github-logo');
let linkedInLogo = document.getElementById('linked-in-logo');
let emailLogo = document.getElementById('email-logo');

githubLogo.onmouseover = function() {
    githubLogo.style.width = '60px';
}
linkedInLogo.onmouseover = function() {
    linkedInLogo.style.width = '60px';
}
emailLogo.onmouseover = function() {
    emailLogo.style.width = '60px';
}

githubLogo.onmouseleave = function() {
    githubLogo.style.width = '50px';
}
linkedInLogo.onmouseleave = function() {
    linkedInLogo.style.width = '50px';
}
emailLogo.onmouseleave = function() {
    emailLogo.style.width = '50px';
}
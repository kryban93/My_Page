//(function() {
"use strict";

const skillList = {
    skills : [
        {
            name:"HTML",
            percent: 70,
        },
        {
            name:"CSS",
            percent: 70,
        },
        {
            name:"JavaScript",
            percent: 70,
        },
        {
            name:"React",
            percent: 20,
        },
        {
            name:"Git & Terminal",
            percent: 60,
        },
    ],
    lang : [
        {
            name:"English",
            percent: 85,
        },
        {
            name:"Spanish",
            percent: 20,
        },
    ]
}

const projects = [
    {
        name:"Paint",
        href:"#",
        desc:"simple description" 
    },
    {
        name:"game",
        href:"#",
        desc:"simple description"  
    },
    {
        name:"synth",
        href:"#", 
        desc:"simple description" 
    },
    {
        name:"accordion",
        href:"#", 
        desc:"simple description" 
    },
    {
        name:"accordion",
        href:"#", 
        desc:"simple description" 
    },
    {
        name:"accordion",
        href:"#", 
        desc:"simple description" 
    },
    {
        name:"accordion",
        href:"#", 
        desc:"simple description" 
    },
    {
        name:"accordion",
        href:"#", 
        desc:"simple description" 
    },
];
let skillDiv , skillUl, nav, topOfNav,progressbar,projectsUl,projectsDiv,progressBars=[];


function displaySkillList(arr) {
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li'),
            progress = document.createElement('div');
            progressbar = document.createElement('div');
        li.innerHTML = arr[i].name;            
        skillUl.appendChild(li);
        li.classList.add('skills-element'); 

        li.appendChild(progress);
        progress.classList.add('progress');

        progress.appendChild(progressbar);
        progressbar.classList.add('progress-bar');
        progressBars.push([progressbar,arr[i].percent]);
    }
}

function displayProjects() {
    for (let i = 0 ; i < projects.length; i++) {
        let div = document.createElement('div');
        div.innerHTML = projects[i].name;
        div.classList.add('projects-element');
        projectsUl.appendChild(div);
    }
}

function scrollNav() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        nav.classList.add('scroll-nav');
    } else {
        document.body.style.paddingTop = 0;
        nav.classList.remove('scroll-nav');
    }
}


function progressBarUpdate() {
    const skillsSection = document.querySelector('#skills'); 

    console.log(progressBars);
    if (window.scrollY >= skillsSection.offsetTop) {
        console.log("bang");
        progressBars.forEach(progressbar => {
            console.log(progressbar);
            progressbar[0].style.setProperty("width", `${progressbar[1]}%`);

        });
    }
}

window.addEventListener('DOMContentLoaded', () => { 
    skillDiv = document.querySelector('#skills');
    skillUl = document.querySelector('.skills-list');
    nav = document.querySelector('#fixed-nav');
    topOfNav = nav.offsetTop;
    projectsUl = document.querySelector('.projects-list');
    projectsDiv = document.querySelector('#projects');
    

    displaySkillList(skillList.skills);
    displaySkillList(skillList.lang);
    displayProjects()

    
});

window.addEventListener('scroll',scrollNav);
window.addEventListener('scroll',progressBarUpdate);



//})();
//(function() {
"use strict";

const skillList = {
    skills : [
        {
            name:"HTML",
            percent: 70,
            fontawesome: ["fab","fa-html5"] ,
        },
        {
            name:"CSS",
            percent: 70,
            fontawesome: ["fab","fa-css3-alt"],
        },
        {
            name:"JavaScript",
            percent: 70,
            fontawesome: ["fab","fa-js"],
        },
        {
            name:"React",
            percent: 20,
            fontawesome: ["fab","fa-react"],
        },
        {
            name:"Git & Terminal",
            percent: 60,
            fontawesome: ["fas","fa-terminal"],
        },
    ],
    lang : [
        {
            name:"English",
            percent: 85,
            fontawesome: ["fas","fa-flag"],
        },
        {
            name:"Spanish",
            percent: 20,
            fontawesome: ["fas","fa-flag"],
        },
    ]
}

const experienceList = {
    work : [ 
        {
            company:"Instytute of Aviation",
            position:"Junior Engineer",
            info:"Tworzenie siatek elementów skończonych na podstawie modeli geometrycznych komór spalania oraz struktur komercyjnych silników turbinowych tj. LEAP, Genx, CFM, przygotowywanie modeli na potrzeby różnego rodzaju analiz mes. Wykonywanie analiz strukturalnych, modalnych, harmonicznych, Crack Propagation, LCF, HCF, P4 Capability. Dokumentowanie wyników pracy w odpowiednich systemach. Udział w projektach dotyczących wsparcia produkcji, napraw po produkcyjnych oraz wdrażania nowych produktów i technologii oraz wsparcia już pracujących silników. Prace analityczne wykonywane zgodnie z obowiązującymi Design Practices i Standard Analysis Practices.",
        },
        {
            company:"Instytute of Aviation",
            position:"Junior Engineer",
            info:"Dokumentacja techniczna, tworzenie modeli geometrycznych części samolotu I-23 Manager na podstawie dokumentacji technicznej.",
        },
    ],
    education : [
        {
            company:"Cracow University of Technology",
            position:"Engineer",
            info:'Title of Engineer Work:',
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

let skillsList, nav, topOfNav,projectsList,timeline;

function displaySkillList(skillsObject,header) {    
    let h3 = document.createElement('h3');
    h3.innerHTML = header;  
    skillsList.appendChild(h3);

    for (let i = 0; i < skillsObject.length; i++) {            
        let li = document.createElement('li'),
            progress = document.createElement('div'),            
            progressbar = document.createElement('div'),
            icon = document.createElement('i'),
            text = document.createElement('h4');

            
        icon.classList.add(`${skillsObject[i].fontawesome[0]}`);
        icon.classList.add(`${skillsObject[i].fontawesome[1]}`);
        text.innerHTML = skillsObject[i].name; 
        li.classList.add('skills-element');
        progress.classList.add('progress');   
        
        progressbar.classList.add('progress-bar');
        progressbar.dataset.percent = skillsObject[i].percent;

        
        skillsList.appendChild(li);
        li.appendChild(icon);
        li.appendChild(text);
        li.appendChild(progress);
        progress.appendChild(progressbar);        
    }
}

function displayTimeline(experienceObject,header) {
    let container = document.createElement('div'),    
        activity = document.createElement('h3'),
        content = document.createElement('div');

    container.classList.add('timeline-container');
    activity.innerHTML = header;
    activity.classList.add('timeline-header');
    content.classList.add('timeline-content');

    timeline.appendChild(container);
    container.appendChild(activity);
    container.appendChild(content);
    for (let i = 0; i < experienceObject.length; i++) {
        let overlay = document.createElement('div'),
            companyName = document.createElement('h4'), 
            positionName = document.createElement('h5'),   
            description = document.createElement('p');
        
        overlay.classList.add('timeline-content');
        companyName.innerHTML = experienceObject[i].company; 
        positionName.innerHTML = experienceObject[i].position;   
        description.innerHTML = experienceObject[i].info;


        content.appendChild(overlay);  
        overlay.appendChild(companyName);
        overlay.appendChild(positionName);    
        overlay.appendChild(description);     
    }
}

function displayProjects() {
    for (let i = 0 ; i < projects.length; i++) {
        let overlay = document.createElement('div'),
            mainText = document.createElement('h1'),
            description = document.createElement('p'),  
            link = document.createElement('a');
        
        overlay.classList.add('projects-element');
        mainText.innerHTML = projects[i].name;
        description.innerHTML = projects[i].desc;
        link.setAttribute('href',projects[i].href);

        projectsList.appendChild(link);
        link.appendChild(overlay);
        overlay.appendChild(mainText);
        overlay.appendChild(description);    
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
    const skillsSection = document.querySelector('#skills'),
        progressbars = document.querySelectorAll('.progress-bar');
    
    
    if (window.scrollY >= skillsSection.offsetTop -nav.offsetHeight) { 
        progressbars.forEach(progressbar => {
            progressbar.style.setProperty('width',`${progressbar.dataset.percent}%`);
        });
    }
}

window.addEventListener('DOMContentLoaded', () => { 
    nav = document.querySelector('#fixed-nav');
    topOfNav = nav.offsetTop;
    skillsList = document.querySelector('.skills-list');
    timeline = document.querySelector('.timeline');    
    projectsList = document.querySelector('.projects-list');        

    displaySkillList(skillList.skills,"Programming Skills");
    displaySkillList(skillList.lang,"Languages");
    displayTimeline(experienceList.work,"Work");
    displayTimeline(experienceList.education,"Education");
    displayProjects()
    
});

window.addEventListener('scroll',scrollNav);
window.addEventListener('scroll',progressBarUpdate);



//})();
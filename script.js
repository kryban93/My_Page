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
            company:"Instytute of Aviation 05.2019-now",
            position:"Junior Engineer",
            info:"Responsible for complete cycle of computational simulations (models creation and modification, analyses, postprocessing, reports creation. Analyses of Aircraft Engine Combustors and surrounding Structures. Typical scope of analyses: elastic stress, elastic-plastic stress, stress with contact, LCF, crack propagation,modal, forced response (harmonic), HCF."
                            
        },
        {
            company:"Instytute of Aviation 03.2018-05.2019",
            position:"Junior Engineer",
            info:"Responsible for creating technical documentation, 3d models and executive drawings of I-23 Manager airplane parts based on old technical documentation.",
        },
    ],
    education : [
        {
            company:"Cracow University of Technology 2014-2017",
            position:"Engineer",
            info:'Title of Engineer Work: Optimization with Fireworks Algorithm. -Paper presents the optimization algorithm inspired by real fireworks explosion phenomenon.Algorithm is verified by optimization process of the test functions with or without constraints. Numerical implementation was performed by engineering software Matlab, which uses its own high level programming language.',
        },
    ]
}

const projects = [
    {
        name:"Paint",
        href:"https://github.com/kryban93/Paint",
        desc:"Paint made in Canvas" 
    },
    {
        name:"Game",
        href:"https://github.com/kryban93/Simple_game",
        desc:"Tried my best in basic collision detection"  
    },
    {
        name:"Speech synthesizer",
        href:"https://codepen.io/kryban93/pen/vYOLgWz", 
        desc:"simple speech synthesizer with few bars" 
    },
    {
        name:"Accordion page",
        href:"https://codepen.io/kryban93/pen/xxxaGMY", 
        desc:"" 
    },
    {
        name:"Slide-in photos",
        href:"https://codepen.io/kryban93/pen/jOPWyzb", 
        desc:"Page with slide-in photos while scroll" 
    },
    {
        name:"JS clock",
        href:"https://codepen.io/kryban93/pen/QWWqypa", 
        desc:"JS clock with customisation options" 
    },
    {
        name:"Video Player",
        href:"https://codepen.io/kryban93/pen/MWwKJQj", 
        desc:"Custom Video Player with JS" 
    },
    {
        name:"Local storage",
        href:"https://codepen.io/kryban93/pen/jOPWVXR", 
        desc:"Usage of Local storage" 
    },
    {
        name:"Follow allong nav",
        href:"https://codepen.io/kryban93/pen/zYGroVq", 
        desc:"Stripe follow along nav" 
    },
    {
        name:"Mouse move shadow",
        href:"https://codepen.io/kryban93/pen/NWqxdPm", 
        desc:"Text shadow depends on mouse move" 
    },
];

let skillContainer, nav, topOfNav,projectsList,timeline,sendButton,navigatorLogo,navigatorButton,isClicked,navigatorList;

function displaySkillList(skillsObject,header) {    
    let h3 = document.createElement('h3'),
        list = document.createElement('ul');
    h3.innerHTML = header;  
    list.classList.add('skills__list');
    h3.classList.add('skills__container__header')

    skillContainer.appendChild(h3);
    skillContainer.appendChild(list);
    
    for (let i = 0; i < skillsObject.length; i++) {            
        let li = document.createElement('li'),
            progress = document.createElement('div'),            
            progressbar = document.createElement('div'),            
            icon = document.createElement('i'),
            text = document.createElement('h4');
            
        icon.classList.add(`${skillsObject[i].fontawesome[0]}`);
        icon.classList.add(`${skillsObject[i].fontawesome[1]}`);
        icon.classList.add('skills__list__element__icon');
        text.innerHTML = skillsObject[i].name; 
        li.classList.add('skills__list__element');
        progress.classList.add('skills__list__element__progressbar');        
        progressbar.classList.add('skills__list__element__progressbar--covered');
        progressbar.dataset.percent = skillsObject[i].percent;
        
        list.appendChild(li);
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

    container.classList.add('experience__container');
    activity.innerHTML = header; 
    activity.classList.add('experience__header'); 
    content.classList.add('experience__content');

    timeline.appendChild(container);
    container.appendChild(activity);
    container.appendChild(content);
    for (let i = 0; i < experienceObject.length; i++) {
        let overlay = document.createElement('div'),
            companyName = document.createElement('h4'), 
            positionName = document.createElement('h5'),   
            description = document.createElement('p');
        
        overlay.classList.add('experience__content__overlay');
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
            
        link.classList.add('project__list__link');
        overlay.classList.add('projects__list__element');
        mainText.innerHTML = projects[i].name;
        description.innerHTML = projects[i].desc;
        link.setAttribute('href',projects[i].href);
        link.setAttribute('target','__blank');

        projectsList.appendChild(overlay);
        overlay.appendChild(link);
        link.appendChild(mainText);
        link.appendChild(description);    
    }
}


function scrollNav() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        nav.classList.add('navigator--scroll');
        navigatorLogo.classList.add('navigator__list__logo--active');
    } else {
        document.body.style.paddingTop = 0;
        nav.classList.remove('navigator--scroll');
        navigatorLogo.classList.remove('navigator__list__logo--active');
    }
}

function openDropdownNav() {
    if (!isClicked) {isClicked = true;
        console.log(isClicked);
        if (isClicked) {
            navigatorList.style.setProperty('display','block');
            navigatorList.classList.add('navigator__list--dropdown'); 
        }
    } else {
            isClicked = false; 
            navigatorList.style.setProperty('display','none');
            navigatorList.classList.remove('navigator__list--dropdown'); 
    }
}

function updateClassesOnResize() {
    if(window.innerWidth > 1000 ) {  
            navigatorList.style.setProperty('display','flex');  
            navigatorList.classList.remove('navigator__list--dropdown');
            isClicked = false;
    } else {
        navigatorList.style.setProperty('display','none');
    }
}
function progressBarUpdate() {
    const skillsSection = document.querySelector('#skills'),
        progressbars = document.querySelectorAll('.skills__list__element__progressbar--covered');
    
    
    if (window.scrollY >= skillsSection.offsetTop - 50) { 
        progressbars.forEach(progressbar => {
            progressbar.style.setProperty('width',`${progressbar.dataset.percent}%`);
        });
    }
}

function sendMessage() {
    let firstName = document.querySelector('#firstname').value,
        lastName = document.querySelector('#lastname').value,
        email = document.querySelector('#email').value,
        subject = document.querySelector('#firstname').value,
        message = document.querySelector('#message').value;

    if (!firstName || !lastName || !email || !subject || !message) {alert('Please fill in each field'); return};

    let checkFirstName = function() { if (!firstName.match(/[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/ig)) {return false } else {return true};},
        checkLastName = function() { if (!lastName.match(/[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/ig)) {return false } else {return true};},
        checkEmail = function() {if (!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){return false } else {return true};};

        console.log(firstName,lastName,email,subject,message);       
        
        console.log(checkFirstName(),checkLastName(),checkEmail());

        if (checkFirstName() && checkLastName() && checkEmail()) {alert('Email sended!');} else {alert('Please fill fields correctly');}

}

window.addEventListener('DOMContentLoaded', () => { 
    nav = document.querySelector('#navigator');
    navigatorLogo = document.querySelector('.navigator__list__logo');
    topOfNav = nav.offsetTop;
    skillContainer = document.querySelector('.skills__container');
    timeline = document.querySelector('.experience__content');    
    projectsList = document.querySelector('.projects__list');
    sendButton = document.querySelector('.contact__btn__send'); 
    navigatorButton = document.querySelector('.navigator__btn');     
    isClicked = false;
    navigatorList = document.querySelector('.navigator__list');

    displaySkillList(skillList.skills,"Programming Skills");
    displaySkillList(skillList.lang,"Languages");
    displayTimeline(experienceList.work,"Work");
    displayTimeline(experienceList.education,"Education");
    displayProjects()
    
    sendButton.addEventListener('click',sendMessage); 
    navigatorButton.addEventListener('click',openDropdownNav);

});

window.addEventListener('scroll',scrollNav);
window.addEventListener('scroll',progressBarUpdate);
window.addEventListener('resize',updateClassesOnResize);



//})();
var desc1, desc2;
var descToggle = true;

const technologies = [
    {
        name: 'Java',
        img: './src/imgs/logo-java',
        href: 'https://www.oracle.com/java/technologies/',
    },
    {
        name: 'Python',
        img: './src/imgs/logo-python',
        href: 'https://www.python.org/',
    },
    {
        name: 'Javascript',
        img: './src/imgs/logo-javascript',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
        name: 'NodeJS',
        img: './src/imgs/logo-nodejs',
        href: 'https://nodejs.org/en/',
    },
    {
        name: 'React',
        img: './src/imgs/logo-react',
        href: 'https://reactjs.org/',
    },
    {
        name: 'MongoDB',
        img: './src/imgs/logo-mongodb',
        href: 'https://www.mongodb.com/',
    },
    {
        name: 'HTML',
        img: './src/imgs/logo-html',
        href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
        name: 'CSS',
        img: './src/imgs/logo-css',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
        name: 'Git',
        img: './src/imgs/logo-git',
        href: 'https://git-scm.com/',
    },
    {
        name: 'GitHub',
        img: './src/imgs/logo-github',
        href: 'https://github.com/IncinerateZ/',
    },
    {
        name: 'VSCode',
        img: './src/imgs/logo-vscode',
        href: 'https://code.visualstudio.com/',
    },
    {
        name: 'Figma',
        img: './src/imgs/logo-figma',
        href: 'https://www.figma.com/ui-design-tool/',
    },
];

window.onload = function () {
    desc1 = document.getElementById('desc1');
    desc2 = document.getElementById('desc2');
    const techdiv = document.getElementById('tech-content');
    const mail = document.getElementById('top-contact');
    for (let tech of technologies) {
        techdiv.innerHTML += `<div class="tech-icons tooltip"><a target="_blank" href=${
            tech.href
        }><div class="tooltiptext">${
            tech.name
        }</div><img style="width: 100%;" src="${
            tech.img + '.png'
        }"/></a></div>`;
    }
    mail.onclick = () => {
        window.open('mailto:justinhalim501@gmail.com');
    };
};

//background color change
setTimeout(() => {
    const body = document.getElementById('body');
    body.id = '';
    body.className = 'body-expand';
    setTimeout(() => {
        body.style.borderRadius = '0';
    }, 200);
}, 100);

setInterval(() => {
    desc1.className = descToggle ? 'span-hide' : 'span-show';
    desc2.className = !descToggle ? 'span-hide' : 'span-show';
    setTimeout(() => {
        desc1.style.width = descToggle ? '0' : '100px';
        desc2.style.width = !descToggle ? '0' : '100px';
    }, 0);
    descToggle = !descToggle;
}, 1200);

var desc1, desc2;
var descToggle = true;
var canvas;
var ctx;

var circles = [];
var mouseX = 0,
    mouseY = 0;

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
    {
        name: 'Docker',
        img: './src/imgs/logo-docker',
        href: 'https://www.docker.com/',
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

    //canvas
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    window.requestAnimationFrame(animate);
};

function displayWindowSize() {
    // Get width and height of the window excluding scrollbars
    let w = document.documentElement.clientWidth;
    let h = document.documentElement.clientHeight;

    // Display result inside a div element
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

// Attaching the event listener function to window's resize event
window.addEventListener('resize', displayWindowSize);

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

//circle
//{
//  x0: int,
//  y0: int,
//  r: int,
//  color: string,
//  vX: int (px/10ms),
//  vY: int (px/10ms),
//  lifespan: int (100ms to 200ms),
//  createdAt: int (ms)
//}

function animate() {
    if (circles.length < 50) {
        let nc = {
            x0: mouseX,
            y0: mouseY,
            r: Math.random() * 3 + 5,
            color: '#CC' + Math.floor(Math.random() * 16777215).toString(16),
            vX: (Math.random() * 2 - 1) / 5,
            vY: (Math.random() * 2 - 1) / 5,
            lifespan: Math.random() * 100 + 100,
            createdAt: Date.now(),
        };

        circles.push(nc);
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let c of circles) {
        if (c.createdAt + c.lifespan < Date.now()) {
            circles.splice(circles.indexOf(c), 1);
            continue;
        }
        let t = Date.now() - c.createdAt;
        ctx.fillStyle = c.color;
        ctx.beginPath();
        ctx.arc(c.x0 + t * c.vX, c.y0 + t * c.vY, c.r, 0, 2 * Math.PI);
        ctx.fill();
    }

    window.requestAnimationFrame(animate);
}

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

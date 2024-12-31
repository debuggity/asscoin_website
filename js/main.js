
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
}

resizeCanvas();

const chars = '日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ0123456789';
let drops = [];
let fontSize = 16;

function initDrops() {
    const columns = Math.ceil(canvas.width / fontSize);
    drops = Array(columns).fill(1);
}

initDrops();

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';
    ctx.shadowColor = '#0F0';
    ctx.shadowBlur = 5;

    for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        const alpha = Math.random() * 0.7 + 0.3;
        ctx.fillStyle = `rgba(0, 255, 0, ${alpha})`;

        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }

    ctx.shadowBlur = 0;
}

let loadingStates = [
    'INITIALIZING ASS',
    'ESTABLISHING CONNECTION',
    'DECRYPTING ASS',
    'ACCESSING FART',
    'ASS READY'
];

let currentState = 0;

function updateLoadingText() {
    if (currentState < loadingStates.length) {
        const text = loadingStates[currentState];
        document.querySelector('.loading-text').textContent = text;
        currentState++;
        setTimeout(updateLoadingText, 800);
    } else {
        document.querySelector('.loading-screen').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.loading-screen').style.display = 'none';
        }, 1000);
    }
}

window.addEventListener('load', updateLoadingText);
window.addEventListener('resize', () => {
    resizeCanvas();
    initDrops();
});

setInterval(draw, 30);

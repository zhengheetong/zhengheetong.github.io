/* =========================================
   1. SYSTEM PRELOADER
========================================= */
const bootText = ["INITIALIZING...", "LOADING CORE MODULES...", "ESTABLISHING NEURAL LINK...", "ACCESS GRANTED.", "WELCOME, OPERATOR TONG."];
function startBoot() {
    const container = document.getElementById('boot-text');
    let i = 0;
    function print() {
        if (i < bootText.length) {
            const d = document.createElement('div');
            d.textContent = `> ${bootText[i++]}`;
            container.appendChild(d);
            setTimeout(print, 400);
        } else {
            setTimeout(() => {
                const screen = document.getElementById('boot-screen');
                if(screen) {
                    screen.style.opacity = '0';
                    setTimeout(() => screen.style.display = 'none', 1000);
                }
            }, 800);
        }
    }
    print();
}
window.addEventListener('load', startBoot);


/* =========================================
   2. TOGGLE SHOW MORE
========================================= */
function toggle(btn) {
    let t = btn.previousElementSibling;
    if (t.style.maxHeight === "0px") {
        t.style.maxHeight = "1500px";
        btn.innerHTML = "Show Less";
    } else {
        t.style.maxHeight = "0px";
        btn.innerHTML = "Show More";
    }
}
document.querySelectorAll(".moreDetails").forEach(m => {
    m.style.maxHeight = "0px";
    m.style.overflow = "hidden";
    m.style.transition = "max-height 0.4s ease-in-out";
});


/* =========================================
   3. TYPEWRITER EFFECT
========================================= */
const txt = ["Software Engineer", "C# & .NET Developer", "Problem Solver"];
let ti = 0, ci = 0;
const el = document.getElementById("typewriter-text");
function type() {
    if (el && ci < txt[ti].length) {
        el.textContent += txt[ti][ci++];
        setTimeout(type, 100);
    } else if(el) setTimeout(erase, 2000);
}
function erase() {
    if (el && ci > 0) {
        el.textContent = txt[ti].substring(0, --ci);
        setTimeout(erase, 50);
    } else if(el) {
        ti = (ti + 1) % txt.length;
        setTimeout(type, 100);
    }
}
if(el) setTimeout(type, 1000);


/* =========================================
   4. SCROLL REVEAL & TIMELINE
========================================= */
function reveal() {
    document.querySelectorAll(".reveal").forEach(r => {
        if (r.getBoundingClientRect().top < window.innerHeight - 100) r.classList.add("active");
    });
    document.querySelectorAll(".timeline-item").forEach(item => {
        if (item.getBoundingClientRect().top < window.innerHeight * 0.5) item.classList.add("active-line");
        else item.classList.remove("active-line");
    });
}
window.addEventListener("scroll", reveal);
reveal();


/* =========================================
   5. MATRIX BACKGROUND
========================================= */
const canvas = document.getElementById('matrix-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    const chars = 'アァカサタナハマヤャラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', fontSize = 16;
    let columns = canvas.width / fontSize;
    let drops = Array(Math.floor(columns)).fill(1);
    
    function draw() {
        ctx.fillStyle = 'rgba(15, 23, 42, 0.05)'; ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#14b8a6'; ctx.font = fontSize + 'px monospace';
        drops.forEach((y, i) => {
            ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * fontSize, y * fontSize);
            if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        });
    }
    setInterval(draw, 35);
    window.addEventListener('resize', () => { 
        canvas.width = window.innerWidth; canvas.height = window.innerHeight;
        columns = canvas.width / fontSize;
        drops = Array(Math.floor(columns)).fill(1);
    });
}


/* =========================================
   6. CUSTOM CURSOR & 3D TILT
========================================= */
const dot = document.querySelector('.cursor-dot'), out = document.querySelector('.cursor-outline');
if(dot && out) {
    window.addEventListener('mousemove', e => {
        dot.style.left = out.style.left = `${e.clientX}px`;
        dot.style.top = out.style.top = `${e.clientY}px`;
    });
    document.querySelectorAll('a, button, .profile-img').forEach(l => {
        l.addEventListener('mouseenter', () => out.classList.add('active'));
        l.addEventListener('mouseleave', () => out.classList.remove('active'));
    });
}

document.querySelectorAll('.profile-card, .project-card-mini').forEach(card => {
    card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect(), centerX = r.width / 2, centerY = r.height / 2;
        const rotateX = ((e.clientY - r.top - centerY) / centerY) * -10, rotateY = ((e.clientX - r.left - centerX) / centerX) * 10;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    card.addEventListener('mouseleave', () => card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)`);
});
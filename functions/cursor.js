const cursorStyles = document.createElement('style');
cursorStyles.innerHTML = `
    @media (pointer: fine) { * { cursor: none !important; } }
    .cursor-dot { position: fixed; width: 8px; height: 8px; background: var(--accent); border-radius: 50%; z-index: 99999; pointer-events: none; transform: translate(-50%, -50%); }
    .cursor-outline { position: fixed; width: 40px; height: 40px; border: 2px solid var(--accent); border-radius: 50%; z-index: 99999; pointer-events: none; transform: translate(-50%, -50%); transition: width 0.2s, height 0.2s, top 0.1s ease-out, left 0.1s ease-out; }
    .cursor-outline.active { width: 60px; height: 60px; background: rgba(20, 184, 166, 0.2); border-color: transparent; }
`;
document.head.appendChild(cursorStyles);

const dot = document.querySelector('.cursor-dot'), out = document.querySelector('.cursor-outline');
if(dot && out) {
    window.addEventListener('mousemove', e => {
        dot.style.left = out.style.left = `${e.clientX}px`;
        dot.style.top = out.style.top = `${e.clientY}px`;
    });
    document.querySelectorAll('a, button, .profile-img, .modal-close, #cert-active-img').forEach(l => {
        l.addEventListener('mouseenter', () => out.classList.add('active'));
        l.addEventListener('mouseleave', () => out.classList.remove('active'));
    });
}
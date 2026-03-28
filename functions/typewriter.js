const typewriterStyles = document.createElement("style");
typewriterStyles.innerHTML = `
    .blinking-cursor { font-weight: bold; color: var(--primary); animation: blink 1s step-end infinite; }
    @keyframes blink { 50% { opacity: 0; } }
`;
document.head.appendChild(typewriterStyles);

const txt = ["Software Engineer", "C# & .NET Developer", "Problem Solver"];
let ti = 0,
  ci = 0;
const el = document.getElementById("typewriter-text");
function type() {
  if (el && ci < txt[ti].length) {
    el.textContent += txt[ti][ci++];
    setTimeout(type, 100);
  } else if (el) setTimeout(erase, 2000);
}
function erase() {
  if (el && ci > 0) {
    el.textContent = txt[ti].substring(0, --ci);
    setTimeout(erase, 50);
  } else if (el) {
    ti = (ti + 1) % txt.length;
    setTimeout(type, 100);
  }
}
if (el) setTimeout(type, 1000);

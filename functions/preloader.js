const preloaderStyle = document.createElement("style");
preloaderStyle.innerHTML = `
    #boot-screen {
        position: fixed;
        top: 0; left: 0; width: 100%; height: 100%;
        background: #000;
        color: #14b8a6;
        font-family: 'Courier New', Courier, monospace;
        display: flex;
        padding: 40px;
        z-index: 10000;
        transition: opacity 1s ease;
    }
`;
document.head.appendChild(preloaderStyle);

const bootText = [
  "INITIALIZING...",
  "LOADING CORE MODULES...",
  "ESTABLISHING NEURAL LINK...",
  "ACCESS GRANTED.",
  "WELCOME.",
];
function startBoot() {
  const container = document.getElementById("boot-text");
  let i = 0;
  function print() {
    if (i < bootText.length) {
      const d = document.createElement("div");
      d.textContent = `> ${bootText[i++]}`;
      container.appendChild(d);
      setTimeout(print, 400);
    } else {
      setTimeout(() => {
        const screen = document.getElementById("boot-screen");
        if (screen) {
          screen.style.opacity = "0";
          setTimeout(() => (screen.style.display = "none"), 1000);
        }
      }, 800);
    }
  }
  print();
}
window.addEventListener("load", startBoot);

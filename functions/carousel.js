import { myBootCert } from "../assets/data.js";

const carouselStyles = document.createElement("style");
carouselStyles.innerHTML = `
    .cert-carousel-container {
        border: 1px solid var(--border-color);
        background: rgba(15, 23, 42, 0.4);
        border-radius: 8px;
        padding: 15px;
        margin-top: 10px;
        margin-bottom: 15px;
        box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5);
    }

    .cert-carousel-header {
        text-align: center;
        margin-bottom: 15px;
        font-family: 'Courier New', Courier, monospace;
        color: var(--accent);
        font-size: 14px;
        letter-spacing: 1.5px;
    }

    .cert-carousel-body {
        display: flex;
        flex-direction: column; /* Stacks image and buttons vertically */
        align-items: center;
        gap: 15px;
    }

    .cert-carousel-controls {
        display: flex;
        justify-content: center; /* Centers the buttons */
        gap: 20px; /* Space between PREV and NEXT */
        width: 100%;
    }

    .cert-btn {
        background: rgba(15, 23, 42, 0.8);
        color: var(--primary);
        border: 1px solid var(--primary);
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
        font-weight: bold;
        font-family: 'Courier New', Courier, monospace;
        transition: all 0.2s ease;
    }

    .cert-btn:hover {
        background: var(--primary);
        color: #fff;
        box-shadow: 0 0 10px var(--primary);
        transform: scale(1.05);
    }

    .cert-img-wrapper {
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 220px;
    }

    #cert-active-img {
        max-width: 100%;
        max-height: 320px; /* Increased from 220px to make it bigger */
        object-fit: contain;
        border-radius: 4px;
        border: 1px solid var(--border-color);
        cursor: pointer;
        transition: opacity 0.2s ease, transform 0.2s ease;
    }

    #cert-active-img:hover {
        border-color: var(--accent);
        transform: scale(1.02);
    }
`;
document.head.appendChild(carouselStyles);

document.addEventListener("DOMContentLoaded", () => {
  const activeImg = document.getElementById("cert-active-img");
  const countText = document.getElementById("cert-count");
  const btnPrev = document.getElementById("cert-prev");
  const btnNext = document.getElementById("cert-next");

  // Make sure elements exist and data.js loaded the array
  if (activeImg && typeof myBootCert !== "undefined" && myBootCert.length > 0) {
    let currentIndex = 0;

    function updateCarousel() {
      // Slight fade out effect
      activeImg.style.opacity = 0;

      setTimeout(() => {
        activeImg.src = myBootCert[currentIndex];
        // Terminal style counter
        countText.textContent = `SYSTEM.CERT_ARCHIVE [ ${currentIndex + 1} / ${myBootCert.length} ]`;
        activeImg.style.opacity = 1; // Fade back in
      }, 150);
    }

    // Initialize the first image
    updateCarousel();

    // Setup Modal Elements
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const span = document.querySelector(".modal-close");

    // Modify the click event to open the modal instead of a new tab
    activeImg.addEventListener("click", () => {
      if (modal && modalImg) {
        modal.style.display = "block";
        modalImg.src = myBootCert[currentIndex];
      }
    });

    // Close the modal when clicking the 'X'
    if (span) {
      span.addEventListener("click", () => {
        modal.style.display = "none";
      });
    }

    // Close the modal when clicking anywhere outside the image
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target !== modalImg) {
          modal.style.display = "none";
        }
      });
    }

    // Previous Button
    btnPrev.addEventListener("click", () => {
      currentIndex =
        currentIndex === 0 ? myBootCert.length - 1 : currentIndex - 1;
      updateCarousel();
    });

    // Next Button
    btnNext.addEventListener("click", () => {
      currentIndex =
        currentIndex === myBootCert.length - 1 ? 0 : currentIndex + 1;
      updateCarousel();
    });
  } else if (countText) {
    countText.textContent = "Error: Certificate data offline.";
    countText.style.color = "red";
  }
});

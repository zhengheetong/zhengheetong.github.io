import { myProjects, bootProjects } from "../assets/data.js";

document.addEventListener("DOMContentLoaded", () => {
  const projectContainer = document.getElementById("dynamic-project-grid");

  if (projectContainer && typeof myProjects !== "undefined") {
    myProjects.forEach((project) => {
      const card = document.createElement("div");
      card.classList.add("project-card-mini", "reveal");

      let linksHTML = "";

      if (project.demoLink) {
        linksHTML += `<a href="${project.demoLink}" target="_blank" style="color: var(--accent); margin-top: 8px; display: inline-block;">Live Demo &rarr;</a>`;
        linksHTML += `<span style="margin: 0 5px; color: var(--text-muted);">|</span>`;
        linksHTML += `<a href="${project.link}" target="_blank"style="font-size: 13px; color: var(--text-muted);">Code</a>`;
      } else {
        linksHTML += `<a href="${project.link}" target="_blank">View Code &rarr;</a>`;
      }

      card.innerHTML = `
                <strong>${project.title}</strong>
                <p>${project.description}</p>
                <div class="project-links" style="margin-top: 10px; font-size: 14px;">
                    ${linksHTML}
                </div>
            `;

      projectContainer.appendChild(card);
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const bootContainer = document.getElementById("dynamic-boot-grid");

  if (bootContainer && typeof bootProjects !== "undefined") {
    bootProjects.forEach((project) => {
      const card = document.createElement("div");
      card.classList.add("project-card-mini", "reveal");

      let linksHTML = `<a href="${project.link}" target="_blank">View Code &rarr;</a>`;

      card.innerHTML = `
                <strong>${project.title}</strong>
                <p>${project.description}</p>
                <div class="project-links" style="margin-top: 10px; font-size: 14px;">
                    ${linksHTML}
                </div>
            `;

      bootContainer.appendChild(card);
    });
  }
});

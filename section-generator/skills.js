document.addEventListener('DOMContentLoaded', () => {
    const skillContainer = document.getElementById('dynamic-skill-group');
    
    if (skillContainer && typeof mySkills !== 'undefined') {
        mySkills.forEach(skill => {
            const card = document.createElement('div');
            card.classList.add('skill-group');
            
            // 1. Always create the Code link
            let listSkill = ``;
            
            // 2. If a Live Demo link exists, add it directly below the Code link
            skill.list.forEach(element => {
                listSkill += `<span>${element}</span>`;
            });
            
            // 3. Inject everything into the card
            card.innerHTML = `
                <strong>${skill.title}</strong>
                <div class="tags">
                    ${listSkill}
                </div>
            `;
            
            skillContainer.appendChild(card);
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const skillContainer = document.getElementById('dynamic-skill-group');
    
    if (skillContainer && typeof mySkills !== 'undefined') {
        mySkills.forEach(skill => {
            const card = document.createElement('div');
            card.classList.add('skill-group');
            
            // 1. initialize an empty string to hold the list of skills for this category
            let listSkill = ``;
            
            // 2. Loop through the skill list and create a span for each skill, appending it to the listSkill string
            skill.list.forEach(element => {
                listSkill += `<span>${element}</span>`;
            });
            
            // 3. Set the innerHTML of the card to include the skill category title and the list of skills
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
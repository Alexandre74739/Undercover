// Récupère le nombre de joueurs depuis index.html (localStorage)
const nombre = +localStorage.getItem('nombreJoueurs') || 3;
document.getElementById('playerValue').textContent = `${nombre} joueurs`;

const container = document.getElementById('card-container');
container.innerHTML = '';

// Attribution des rôles
let roles = [];
roles.push("mrwhite");
roles.push("undercover");
for (let i = 2; i < nombre; i++) {
    roles.push("civil");
}

// Mélange les rôles
roles = roles.sort(() => Math.random() - 0.5);

// Création des cartes avec leur rôle
for (let i = 0; i < nombre; i++) {
    const wrapper = document.createElement('div');
    wrapper.className = 'carte-wrapper';

    const role = roles[i];
    let roleText = "";
    switch (role) {
        case "civil": roleText = "Tu es Civil"; break;
        case "undercover": roleText = "Tu es Undercover"; break;
        case "mrwhite": roleText = "Tu es Mr. White"; break;
    }

    wrapper.innerHTML = `
        <div class="carte">
            <div class="carte-front">Joueur ${i + 1}</div>
            <div class="carte-back ${role}">${roleText}</div>
        </div>
    `;

    container.appendChild(wrapper);
}

// Gestion du clic
const cartes = document.querySelectorAll('.carte');
cartes.forEach(carte => {
    carte.addEventListener('click', () => {
        // Si la carte est déjà active, on la ferme
        if (carte.classList.contains('active')) {
            carte.classList.remove('active');
        } else {
            // On ferme les autres cartes ouvertes
            cartes.forEach(c => c.classList.remove('active'));
            // On ouvre la carte cliquée
            carte.classList.add('active');
        }
    });
});

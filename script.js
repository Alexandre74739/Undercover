const slider = document.getElementById('players');
const valueDisplay = document.getElementById('playerValue');

slider.addEventListener('input', () => {
    const value = slider.value;
    valueDisplay.textContent = value + " joueurs";
    localStorage.setItem('nombreJoueurs', value);
});



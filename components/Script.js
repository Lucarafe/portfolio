// Récupérer tous les boutons radio

const navLinks = document.querySelectorAll('.baniere');
navLinks.forEach(link => {
    link.addEventListener('click', handleNavLinkClick);
});

function handleNavLinkClick(event) {
    // Empêcher le comportement par défaut du lien
    event.preventDefault();

    // Réinitialiser les noms de classe pour tous les liens
    navLinks.forEach(link => {
        link.classList.remove('active', 'text-black');
        link.classList.add('text-white-50');
    });

    // Ajouter les noms de classe au lien cliqué
    this.classList.remove('text-white-50');
    this.classList.add('active', 'text-black');
}
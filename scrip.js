// Crear pétalos flotantes más suaves
function createPetals() {
    const petalsContainer = document.getElementById('petals');
    const petalCount = 8;
    
    for (let i = 0; i < petalCount; i++) {
        createPetal();
    }
}

function createPetal() {
    const petalsContainer = document.getElementById('petals');
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.left = Math.random() * 100 + '%';
    petal.style.animationDuration = (Math.random() * 4 + 4) + 's';
    petal.style.animationDelay = Math.random() * 3 + 's';
    
    // Tonos dorados suaves
    const yellows = ['#FFD700', '#FFED4E', '#FFC107'];
    petal.style.background = yellows[Math.floor(Math.random() * yellows.length)];
    
    petalsContainer.appendChild(petal);
    
    // Remover pétalos
    setTimeout(() => {
        if (petal.parentNode) {
            petal.remove();
        }
    }, 8000);
}

// Efecto de click para girasoles
document.addEventListener('click', function(e) {
    const flower = document.createElement('div');
    flower.textContent = '🌻';
    flower.style.position = 'fixed';
    flower.style.left = e.clientX - 15 + 'px';
    flower.style.top = e.clientY - 15 + 'px';
    flower.style.fontSize = '2rem';
    flower.style.pointerEvents = 'none';
    flower.style.zIndex = '1000';
    flower.style.animation = 'bounce 1.2s ease-out forwards';
    
    document.body.appendChild(flower);
    
    setTimeout(() => {
        flower.remove();
    }, 1200);
});

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    createPetals();
    
    // Crear pétalos continuamente
    setInterval(() => {
        if (document.querySelectorAll('.petal').length < 10) {
            createPetal();
        }
    }, 600);
});

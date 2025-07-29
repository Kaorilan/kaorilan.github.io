const slides = [
  {
    "image": "slide1.jpg",
    "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
    "image": "slide2.jpg",
    "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    "image": "slide3.jpg",
    "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    "image": "slide4.png",
    "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
  }
];

let currentSlideIndex = 0;

// Sélectionne le conteneur des dots
const dotsContainer = document.querySelector('.dots');

// Crée les dots dynamiquement
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement('div');
  dot.className = 'dot'; // classe CSS existante
  if (i === 0) {
    dot.classList.add('dot_selected'); // première point sélectionné par défaut
  }
  dot.setAttribute('data-index', i);
  // Ajoute l'événement clic pour changer de slide
  dot.addEventListener('click', () => {
    currentSlideIndex = i;
    showSlide(currentSlideIndex);
    updateDots();
  });
  dotsContainer.appendChild(dot);
}

// Fonction pour mettre à jour la classe du point actif
function updateDots() {
  const dots = document.querySelectorAll('.dots .dot');
  dots.forEach((dot, index) => {
    if (index === currentSlideIndex) {
      dot.classList.add('dot_selected');
    } else {
      dot.classList.remove('dot_selected');
    }
  });
}

// Fonction pour afficher la slide actuelle
function showSlide(index) {
  const slide = slides[index];
  document.getElementById('slideImage').src = "./assets/images/slideshow/" + slide.image;
  document.getElementById('slideTagLine').innerHTML = slide.tagLine;
  updateDots();
}

// Initialisation : affiche la première slide
showSlide(currentSlideIndex);

// Sélecteurs pour les flèches
const arrowLeft = document.querySelector('.arrow .arrow_left');
const arrowRight = document.querySelector('.arrow .arrow_right');

// Écouteurs pour les flèches (navigation)
arrowLeft.addEventListener('click', () => {
	console.log('Clique sur flèche gauche');
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  showSlide(currentSlideIndex);
});

arrowRight.addEventListener('click', () => {
	console.log('Clique sur flèche droite');
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
});
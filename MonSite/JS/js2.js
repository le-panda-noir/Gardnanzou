// Sélectionner les éléments HTML
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLinksList = document.querySelectorAll('.nav-links li');
const faqQuestions = document.querySelectorAll('.question');
const nav = document.querySelector('.nav-links');
const close = document.querySelector('.close');

// Ajouter un événement de clic sur le menu hamburger
burger.addEventListener('click', () => {
    burger.classList.toggle('open');
	nav.classList.toggle('nav-active');
    close.classList.toggle('open');
	// Animer les liens du menu
	navLinksList.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = '';
		} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
		}
	});

	// Animer la ligne du menu hamburger
	burger.classList.toggle('toggle');
});

// Ajouter un événement de clic sur chaque question de la FAQ
faqQuestions.forEach(question => {
	const answer = question.querySelector('p');
	const answerHeight = answer.scrollHeight;
	question.addEventListener('click', () => {
		// Afficher/masquer la réponse à la question
		question.classList.toggle('open');
		answer.classList.toggle('show');
		answer.style.maxHeight = question.classList.contains('open') ? answerHeight + 'px' : 0;
	});
});

    const video = document.getElementById('myVideo');
video.addEventListener('mouseover', () => {
  video.play();
});

video.addEventListener('mouseout', () => {
  video.pause();
  video.currentTime = 0;
});


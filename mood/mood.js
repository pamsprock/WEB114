//Pamela Sprock 04-18-2026
"use strict";

//Select Elements
const buttons = document.querySelector('#buttons');

//Create Moods Configuration Object
const moods = {
  Happy:    { bg: '#ffff99', text: '#ff88fd', quote: 'Be happy. Be bright. Be you. -Kate Spade' },
  Calm:    	{ bg: '#99ccff', text: '#ffffff', quote: 'You are the sky. Everything else is just the weather. -Pema Chodron' },
  Angry: 	{ bg: '#ff0000', text: '#000000', quote: 'An action committed in anger is an action doomed to failure. -Genghis Khan' },
  Sleepy:   { bg: '#0066cc', text: '#000099', quote: 'O sleep! O gentle sleep! Nature\'s soft nurse. -William Shakespeare'}
};

//Event Handler
buttons.addEventListener('click', function(event) {
  if (event.target.classList.contains('mood-btn')) {
    const mood = event.target.getAttribute('data-mood');
    const theme = moods[mood];
    document.body.style.backgroundColor = theme.bg;
    document.body.style.color = theme.text;
    quote.textContent = theme.quote;
    title.textContent = mood;
  }
});
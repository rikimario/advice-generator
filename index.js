let adviceNumber = document.querySelector('.advice');
let advice = document.querySelector('.quote');

let dice = document.querySelector('.diceBtn');
dice.addEventListener('click', () => {
  fetch('https://api.adviceslip.com/advice')
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      adviceNumber.innerHTML = `Advice #${response.slip.id}`;
      advice.innerHTML = `&#8220${response.slip.advice}&#8221`;
    });
});

// Needed DOM Elements
const ratingSubmit = document.getElementById('card-rating-submit');
const ratingNumbers = document.querySelectorAll('.card-rating__circle');
const thankYouState = document.querySelector('.thank-you-state');
const ratingResults = document.getElementById('raring-results');

// Chosen temporary number of rating
let chosenRatingNumber = null;

// When click on one of numbers
ratingNumbers.forEach(ratingNumber => {
  ratingNumber.addEventListener('click', () => {
    chosenRatingNumber = ratingNumber.textContent;
    resetRatingCircleStyle();
    ratingNumber.classList.add('card-rating__circle--selected');
  });

  // For "Enter" & "Space" keys
  ratingNumber.addEventListener('keypress', (e) => {
    // For some bugs
    if (e.defaultPrevented) {
      return;
    }

    // % It's for space key!
    if (e.keyCode == 32) {
      return setRatingNumber();
    }

    switch (e.key) {
      case 'Enter':
        setRatingNumber();
        break;
      default:
        return;
    }

    // For some bugs
    e.preventDefault();
  });

  // Setting rating number when click has happened
  function setRatingNumber() {
    chosenRatingNumber = ratingNumber.textContent;
    ratingSubmit.focus();

    resetRatingCircleStyle();

    ratingNumber.classList.add('card-rating__circle--selected');
  }
});

ratingSubmit.addEventListener('click', showThankYouState);

thankYouState.addEventListener('dblclick', closeThanksWithHisParent);


// Remove the class with already no needed stylings
function resetRatingCircleStyle() {
  ratingNumbers.forEach(item => {
    item.classList.remove('card-rating__circle--selected');
  });
}

// Show thanks
function showThankYouState() {
  if (chosenRatingNumber === null) {
    return alert('Rate us before submit!');
  }

  resetRatingCircleStyle();

  thankYouState.classList.remove('display-none');
  ratingResults.textContent = chosenRatingNumber;

  // ! Reset
  chosenRatingNumber = null;
}

// Close on double click our thanks
function closeThanksWithHisParent() {
  thankYouState.parentElement.classList.add('display-none');
  thankYouState.classList.add('display-none');
}

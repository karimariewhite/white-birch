var navButton = document.querySelector('.mailing');

navButton.addEventListener('click', function() {
  console.log('clicky!!!');
  document.querySelector('body')
  .classList
  .toggle('mailing-list-open');
});

var closeButton = document.querySelector('.close-icon');

closeButton.addEventListener('click', function() {
  console.log('close it!');
  document.querySelector('body')
  .classList
  .toggle('mailing-list-open');
});
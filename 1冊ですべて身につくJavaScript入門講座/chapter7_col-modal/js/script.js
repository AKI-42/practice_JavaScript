const open = document.querySelector('#open');
const close = document.querySelector('#close');
const modal = document.querySelector('#modal');
const mask = document.querySelector('#mask');
const showKeyframes = {
  opacity: [0, 1],
  visibility: 'visible',
};
const hideKeyframes = {
  opacity: [1, 0],
  visibility: 'hidden',
};
const options = {
  duration: 800,
  easing: 'ease',
  fill: 'forwards',
};

open.addEventListener('click', () => {
  modal.animate(showKeyframes, options);
  mask.animate(showKeyframes, options);
});

close.addEventListener('click', () => {
  modal.animate(hideKeyframes, options);
  mask.animate(hideKeyframes, options);
});

mask.addEventListener('click', () => {
  close.click();
});

const topup = document.querySelector('.topup');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');


topup.addEventListener('click', () => {
  popup.style.display = 'block';
});

close.addEventListener('click', () => {
  popup.style.display = 'none';
});

popup.addEventListener('click', (e) => {
  if (e.target.className === 'popup-wrapper') {
    popup.style.display = 'none';
  }
});


const toleft = document.querySelector('.toleft')
const poleft = document.querySelector('.popup-left')

toleft.addEventListener('click', () => {
  poleft.style.display = 'block';
})

poleft.addEventListener('click', (e) => {
  if (e.target.className === "popup-left") {
    poleft.style.display = 'none';
  }
})
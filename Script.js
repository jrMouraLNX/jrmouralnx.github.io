const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){
      element.classList.add('active');
    }
  });
});

const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');

  if(document.body.classList.contains('light')) {
    themeBtn.innerHTML = '🌙';
  } else {
    themeBtn.innerHTML = '☀️';
  }
});
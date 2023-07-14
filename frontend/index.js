const cartasContainer = document.querySelector('.cartas');

cartasContainer.addEventListener('click', (event) => {
  const target = event.target;
  
  if (target.classList.contains('like')) {
    if (target.classList.contains('loke', 'fa-solid', 'fa-thumbs-up', 'fa-bounce')) {
      target.classList.remove('loke' , 'fa-bounce');
      target.classList.add('like');
    }
     else {
      target.classList.add('loke', 'fa-solid', 'fa-thumbs-up', 'fa-bounce');
    }
  }

  if (target.classList.contains('dislike')) {
    if (target.classList.contains('disloke', 'fa-solid', 'fa-thumbs-down', 'fa-bounce')) {
      target.classList.remove('disloke' , 'fa-bounce');
      target.classList.add('dislike');
    } else {
      target.classList.add('disloke', 'fa-solid', 'fa-thumbs-down', 'fa-bounce');
    }
  }

});
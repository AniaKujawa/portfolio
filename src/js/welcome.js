window.setTimeout(() => {
  Array.from(document.querySelectorAll('.delayed')).forEach(delayed => {
    delayed.style.visibility = 'visible'
  });
}, 14000);
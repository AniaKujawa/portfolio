const options = {
  threshold: 1.0
};

const displayStep = entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting && !entry.target.classList.contains('animate')) {
      entry.target.classList.add('animate')
    }
  })
};

const observer = new IntersectionObserver(displayStep, options);

const careerSteps = document.querySelectorAll('.skills-road__step');
careerSteps.forEach(step => observer.observe(step));

const expanders = document.querySelectorAll('.skills-road__step-arrow');

expanders.forEach(expander => {
  expander.addEventListener('click', () => {
    const modal = document.querySelector('.skills-road__step-modal');
    modal.classList.toggle('isHidden');
  });
})

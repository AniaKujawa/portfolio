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

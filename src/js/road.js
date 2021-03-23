const options = {
  threshold: 1.0
};

const displayStep = entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting && !entry.target.classList.contains('animate')) {
      entry.target.classList.add('animate');
    }
  })
};

const observer = new IntersectionObserver(displayStep, options);
const careerSteps = document.querySelectorAll('.skills-road__step');
careerSteps.forEach(step => observer.observe(step));

const showWholeElement = entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      window.scrollBy({ 
        top: entry.target.scrollHeight,
        left: 0, 
        behavior: 'smooth'
      });
    };
  });
};

const observerSection = new IntersectionObserver(showWholeElement);
const roadSection = document.querySelector('#road');
observerSection.observe(roadSection);

const expanders = document.querySelectorAll('.skills-road__step-arrow');

expanders.forEach(expander => {
  expander.addEventListener('click', () => {
    const parentEl = expander.parentElement;
    const modal = parentEl.querySelector('.skills-road__step-modal');
    
    if(parentEl.classList.contains('skills-road__step-modal')) {
      const stepArrow = parentEl.parentElement.parentElement.lastElementChild;

      parentEl.classList.toggle('isVisible');
      stepArrow.classList.toggle('isVisible');
      return;
    }

    expander.classList.toggle('isVisible');

    modal && modal.classList.toggle('isVisible');
  });
})

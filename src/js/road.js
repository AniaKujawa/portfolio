const options = {
  threshold: 1.0
};
const minimumIntersectingRatio = 0.5;

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
    console.log(entry.intersectionRatio);
    if(entry.isIntersecting && entry.intersectionRatio < minimumIntersectingRatio) {
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
      const step = parentEl.parentElement.parentElement;
      const stepArrow = step.lastElementChild;

      parentEl.classList.toggle('isVisible');
      step.scrollIntoView({ block: 'start', behavior: 'smooth'} );
      stepArrow.classList.toggle('isVisible');
      return;
    }

    expander.classList.toggle('isVisible');

    modal && modal.classList.toggle('isVisible');
  });
})

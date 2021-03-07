const desktopBreakpoint = 1024;

const addDesktopEvents = () => {
  window.setTimeout(() => {
    Array.from(document.querySelectorAll('.delayed')).forEach(delayed => {
      delayed.style.visibility = 'visible'
    });
  }, 14000);
};

const addMobileEvents = () => {
  const mobileMenuButton = document.querySelector('.vertical-menu');
  const menu = document.querySelector('.menu');
  
  mobileMenuButton && mobileMenuButton.addEventListener("click", () => {
    menu.classList.toggle("mobile-hide");
  });
};

if(window.screen.width < desktopBreakpoint) {
  addMobileEvents();
} else {
  addDesktopEvents();
}


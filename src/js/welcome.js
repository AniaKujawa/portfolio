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
  const menuIcons = mobileMenuButton.querySelectorAll('.fas');

  const onMenuClick = () => {
    menu.classList.toggle('mobile-hide');
    menuIcons.forEach(icon => {
      icon.classList.toggle('isHidden');
    });
  };
  
  mobileMenuButton && mobileMenuButton.addEventListener('click', onMenuClick);
  menu.addEventListener('click', onMenuClick);
};

if(window.screen.width < desktopBreakpoint) {
  addMobileEvents();
} else {
  addDesktopEvents();
}


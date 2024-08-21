document.querySelectorAll('.nav__link--toggle').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault(); // Prevenir o comportamento padrão do link
  
      const parentItem = this.parentElement;
  
      // Fechar qualquer submenu aberto
      document.querySelectorAll('.nav__item--active').forEach(activeItem => {
        if (activeItem !== parentItem) {
          activeItem.classList.remove('nav__item--active');
          activeItem.querySelector('.nav__submenu').style.maxHeight = 0;
        }
      });
  
      // Alternar o submenu do item clicado
      const submenu = parentItem.querySelector('.nav__submenu');
      if (parentItem.classList.contains('nav__item--active')) {
        submenu.style.maxHeight = 0;
        parentItem.classList.remove('nav__item--active');
      } else {
        submenu.style.maxHeight = submenu.scrollHeight + 'px';
        parentItem.classList.add('nav__item--active');
      }
    });
  });
  
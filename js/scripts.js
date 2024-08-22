document.querySelectorAll('.nav__link--toggle').forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    const parentItem = this.parentElement;

    document.querySelectorAll('.nav__item--active').forEach(activeItem => {
      if (activeItem !== parentItem) {
        activeItem.classList.remove('nav__item--active');
        activeItem.querySelector('.nav__submenu').style.maxHeight = 0;
      }
    });

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


document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const sidebar = document.getElementById('sidebar');
  const wrapper = document.querySelector('.wrapper');

  function handleResize() {
    if (window.innerWidth <= 1400) {
      // Ajustes para telas menores
      sidebar.style.display = 'none'; // Esconde a sidebar por padrão
      wrapper.style.marginLeft = '0';
      wrapper.style.width = '100%';
    } else {
      // Ajustes para telas maiores
      sidebar.style.display = 'flex';
      wrapper.style.marginLeft = '130px';
      wrapper.style.width = 'calc(100% - 130px)';
    }
  }

  // Verifica o tamanho da tela ao carregar a página
  handleResize();

  // Verifica o tamanho da tela quando a janela é redimensionada
  window.addEventListener('resize', handleResize);

  navToggle.addEventListener('click', function () {
    if (window.innerWidth <= 1400) {
      // Toggle para telas menores
      sidebar.classList.toggle('sidebar__toggle--show');
      if (sidebar.classList.contains('sidebar__toggle--show')) {
        sidebar.style.display = 'flex';
      } else {
        sidebar.style.display = 'none';
      }
    } else {
      // Toggle para telas maiores
      sidebar.classList.toggle('sidebar__toggle--show');
      if (sidebar.classList.contains('sidebar__toggle--show')) {
        wrapper.style.marginLeft = '0';
        wrapper.style.width = '100%';
      } else {
        wrapper.style.marginLeft = '130px';
        wrapper.style.width = 'calc(100% - 130px)';
      }
    }
  });
});






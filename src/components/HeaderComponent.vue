<template>
  <header>
    <div class="header">
      <div class="container">
        <div class="header-container">
          <div class="header__logo">
            <img src="../assets/img/logo.png" alt="Website logo">
          </div>
          <nav class="nav-list">
            <ul>
              <li class="nav-list-item fs-small fw-400"><a href="#">Каталог</a></li>
              <li class="nav-list-item fs-small fw-400"><a href="#">Доставка</a></li>
              <li class="nav-list-item fs-small fw-400"><a href="#">Оплата</a></li>
              <li class="nav-list-item fs-small fw-400"><a href="#">Контакты</a></li>
              <li class="nav-list-item fs-small fw-400"><a href="#">О галерее</a></li>
            </ul>
          </nav>
          <menu class="header-menu">
            <input type="text" placeholder="Поиск по названию картины" class="searchInput fs-small">
            <a href="" class="searchBtn fs-small fw-700">Найти</a>
          </menu>
          <div class="menu-btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
</header>
</template>

<script>
import '../style/style.scss'

export default {
  name: 'HeaderComponent',
  methods: {
    toggleMenu() {
      let menuBtn = document.querySelector('.menu-btn');
      let navMenu = document.querySelector(".header-menu");
      let menu = document.querySelector('.nav-list');
      menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('active');
        navMenu.classList.toggle("active");
        menu.classList.toggle('active');
      })
    }
  },

  mounted() {
    this.toggleMenu();
  }
}
</script>

<template>
  <footer>
    <div class="footer">
      <div class="container">
        <div class="footer-container">
          <div class="footer__logo">
            <img src="../assets/img/footer_logo.png" alt="Website logo">
          </div>
          <nav class="footer-nav-list">
            <ul>
              <li class="footer-nav-list-item fs-small fw-400"><a href="#">Каталог</a></li>
              <li class="footer-nav-list-item fs-small fw-400"><a href="#">Доставка</a></li>
              <li class="footer-nav-list-item fs-small fw-400"><a href="#">Оплата</a></li>
              <li class="footer-nav-list-item fs-small fw-400"><a href="#">Контакты</a></li>
              <li class="footer-nav-list-item fs-small fw-400"><a href="#">О галерее</a></li>
            </ul>
          </nav>
          <menu class="footer-menu">
            <div class="footer-menu__item">
              <img src="../assets/img/phone.png" alt="Phone number">
              +7 (495) 555-55-55
            </div>
            <div class="footer-menu__item">
              <img src="../assets/img/location.png" alt="Our location">
              г. Москва, ул. Расплетина, 24
            </div>
          </menu>
        </div>
      </div>
    </div>
</footer>
</template>

<script>
import '../style/style.scss'

export default {
  name: 'FooterComponent',
  methods: {

  },

}
</script>

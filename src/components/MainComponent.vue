<template>
  <main>
    <div class="loader"></div>
    <div class="main">
      <div class="container">
        <div class="main-container">
          <h2 class="main-heading">Картины эпохи Возрождения</h2>
          <section>
            <div class="section-paintings">
              <div class="section-paintings__item" v-for="(painting, index) in paintings" :key="index">
                <div class="section-paintings__sold" v-if="painting.sold">
                  <img :src="painting.image" alt="">
                  <div class="section__paintings__item-description">
                    <p class="section__paintings__item-title">{{ painting.title }}</p>
                  </div>
                  <p class="sold">Продано на аукционе</p>
                  <div class="cover"></div>
                </div>
                <div class="section-paintings__item" v-else>
                  <img :src="painting.image" alt="">
                  <div class="section__paintings__item-description">
                    <p class="section__paintings__item-title">{{ painting.title }}</p>
                    <div class="section__paintings__item-details">
                      <div class="section-paintings__item-price">
                        <p class="old-price">{{ painting.oldPrice }}</p>
                        <p class="current-price">{{ painting.currentPrice }}</p>
                      </div>
                      <div class="section__paintings__item-button">
                        <div class="purchaseBtn inCart" v-if="painting.inCart">
                          <img src="../assets/img/check.svg" width="20px" height="20px">В корзине
                        </div>
                        <button class="purchaseBtn" type="button"
                          v-if="painting.inCart !== true && painting.sold !== true"
                          @click="getData(painting)">Купить</button>
                        <p class="sold" v-else-if="painting.sold">Продано на аукционе</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import '../style/style.scss'
import axios from 'axios'

export default {
  name: 'MainComponent',
  data() {
    return {
      paintings: [],
    }
  },
  components: {
  },
  methods: {

    addItems() {
      this.paintings.push(
        {
          image: require(`../assets/img/painting1.png`),
          title: `"Рождение Венеры" Сандро Боттичелли`,
          oldPrice: `2 000 000 $`,
          currentPrice: `1 000 000 $`,
          inCart: false,
          sold: false
        },
        {
          image: require(`../assets/img/painting2.png`),
          title: `"Тайная Вечеря" Леонардо да Винчи`,
          currentPrice: `3 000 000 $`,
          inCart: false,
          sold: false
        },
        {
          image: require(`../assets/img/painting3.png`),
          title: `"Сотворение Адама" Микеланджело`,
          oldPrice: `6 000 000 $`,
          currentPrice: `5 000 000 $`,
          inCart: true,
          sold: false
        },
        {
          image: require(`../assets/img/painting4.png`),
          title: `"Урок анатомии" Рембрандт`,
          sold: true
        },
      )
      this.$store.commit("addToCart", this.paintings);
    },

    getData(item) {
      this.$store.commit("updateCart", { image: item.image, title: `${item.title}`, oldPrice: item.oldPrice, currentPrice: item.currentPrice, inCart: true, sold: false });

      this.paintings.forEach((element) => {
        if (element.title == item.title) {
          element.inCart = true;
        }
      })

      const loader = document.querySelector(".loader");
      loader.classList.add("loader--shown")

      axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then((response) => {
          console.log(response.data);
          setTimeout(() => loader.classList.remove("loader--shown"), 1500);
        });
    }
  },

  beforeMount() {
    if (window.localStorage.getItem('cart') == null) {
      this.addItems();
    } else {
      this.paintings = JSON.parse(window.localStorage.getItem('cart'));
    }
  }
}
</script>

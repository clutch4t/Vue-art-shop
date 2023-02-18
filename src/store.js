import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

let cart = window.localStorage.getItem('cart');

export default new Vuex.Store({
    state: {
        cart: cart ? JSON.parse(cart) : [],
    },
    getters: {
    },
    mutations: {
        addToCart(state, data) {
            let found = state.cart.find(product => product.title == data.title);

            if (!found) {
                state.cart = data;
            }

            this.commit("saveData");
        },
        updateCart(state, data) {

            state.cart.forEach((element) => {
                if (element.title == data.title) {
                    element.inCart = true;
                }
            })

            this.commit("saveData");
        },
        saveData(state) {
            window.localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        removeFromCart(state, data) {
            let index = state.cart.indexOf(data);

            state.cart.splice(index, 1);

            this.commit("saveData");
        }
    }
})
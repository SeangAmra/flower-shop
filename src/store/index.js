import { createStore } from 'vuex';
import flower1 from '../assets/flower1.jpg';
import flower2 from '../assets/flower2.jpg';
import flower3 from '../assets/flower3.jpg';
import flower4 from '../assets/flower4.jpg';
import flower5 from '../assets/flower5.jpg';
import flower6 from '../assets/flower6.jpg';
import flower7 from '../assets/flower7.jpg';
import flower8 from '../assets/flower8.jpg';
import flower9 from '../assets/flower9.jpg';
import flower10 from '../assets/flower10.jpg';
import flower11 from '../assets/flower11.jpg';
import flower12 from '../assets/flower12.jpg';
import flower13 from '../assets/flower13.jpg';
import flower14 from '../assets/flower14.jpg';

const store = createStore({
  state: {
    menu: [
      { id: 1, name: 'Flower 1', price: 30.0, category: 'Bouquet', type: 'Flower', img: flower1,details:'lorem' ,   availability: 'In stock' },
      { id: 2, name: 'Flower 2', price: 25.0, category: 'Bouquet', type: 'Flower', img: flower2, details:'lorem' ,  availability: 'In stock' },
      { id: 3, name: 'Flower 3', price: 20.0, category: 'Bouquet', type: 'Flower', img: flower3, details:'lorem' ,  availability: 'In stock' },
      { id: 4, name: 'Flower 4', price: 5.0, category: 'Bouquet', type: 'Flower', img: flower4, details:'lorem' ,  availability: 'In stock' },
      { id: 5, name: 'Flower 5', price: 4.0, category: 'Bouquet', type: 'Flower', img: flower5,details:'lorem' ,  availability: 'In stock' },
      { id: 6, name: 'Flower 6', price: 3.5, category: 'Bouquet', type: 'Flower', img: flower6, details:'lorem' ,  availability: 'In stock' },
      { id: 7, name: 'Flower 7', price: 3.5, category: 'Bouquet', type: 'Flower', img: flower7, details:'lorem' ,  availability: 'In stock' },
      { id: 8, name: 'Flower 8', price: 3.5, category: 'Bouquet', type: 'Flower', img: flower8, details:'lorem' ,  availability: 'In stock' },
      { id: 9, name: 'Flower 9', price: 3.5, category: 'Bouquet', type: 'Flower', img: flower9, details:'lorem' , availability: 'In stock' },
      { id: 10, name: 'Flower 10', price: 3.5, category: 'Bouquet', type: 'Flower', img: flower10,details:'lorem' ,  availability: 'In stock' },
      { id: 11, name: 'Flower 11', price: 3.5, category: 'Bouquet', type: 'Flower', img: flower11,details:'lorem' ,   availability: 'In stock' },
      { id: 12, name: 'Flower 12', price: 3.5, category: 'Bouquet', type: 'Flower', img: flower12,details:'lorem' ,   availability: 'In stock' },
      { id: 13, name: 'Flower 13', price: 3.5, category: 'Bouquet', type: 'Flower', img: flower13,details:'lorem' ,  availability: 'In stock' },
      { id: 14, name: 'Flower 14', price: 3.5, category: 'Bouquet', type: 'Flower', img: flower14,details:'lorem' ,  availability: 'In stock' },
    ],
    cart: [],
    filteredMenu: [],
  },
  mutations: {
    ADD_TO_CART(state, item) {
      const existingItem = state.cart.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },
    REMOVE_FROM_CART(state, itemId) {
      state.cart = state.cart.filter((item) => item.id !== itemId);
    },
    CLEAR_CART(state) {
      state.cart = [];
    },
    REMOVE_ONE_FROM_CART(state, itemId) {
      const item = state.cart.find((i) => i.id === itemId);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cart = state.cart.filter((i) => i.id !== itemId);
        }
      }
    },
    SET_FILTERED_MENU(state, type) {
      if (type === 'All') {
        state.filteredMenu = state.menu;
      } else {
        state.filteredMenu = state.menu.filter(item => item.category === type);
      }
    },
    SET_SEARCHED_MENU(state, query) {
      state.filteredMenu = state.menu.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
    },
  },
  actions: {
    addToCart({ commit }, item) {
      commit('ADD_TO_CART', item);
    },
    removeFromCart({ commit }, itemId) {
      commit('REMOVE_FROM_CART', itemId);
    },
    clearCart({ commit }) {
      commit('CLEAR_CART');
    },
    removeOneFromCart({ commit }, itemId) {
      commit('REMOVE_ONE_FROM_CART', itemId);
    },
    filterMenuByType({ commit }, type) {
      commit('SET_FILTERED_MENU', type);
    },
    searchMenu({ commit }, query) {
      commit('SET_SEARCHED_MENU', query);
    },
  },
  getters: {
    cartTotal: (state) =>
      state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
    filteredMenu: (state) => state.filteredMenu,
    getFlowerById: (state) => (id) => {
      return state.menu.find(flower => flower.id === id);
    },
  },
});

export default store;

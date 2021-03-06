import vueNumberKeyboard from './vue-number-keyboard.vue';
const numberkeyboard = {
  install(Vue, options) {
    Vue.component(vueNumberKeyboard.name, vueNumberKeyboard);
  }
};
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(numberkeyboard);
}
export default numberkeyboard;

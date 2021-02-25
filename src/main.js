import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue'
import CoberturaEspecial from './views/CoberturaEspecial';
import Home from './views/Home';
import Tabla from './views/Tabla';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
Vue.use(VueRouter);

Vue.directive('america', {
  bind(el, binding) {
    if(binding.value === 'America') {
      el.style.backgroundColor = '#8080ff';
    }   
  }
});

Vue.directive('miDirectiva', {
  bind(el){
    el.style.color = "black";
    }
})

Vue.filter('toLowercase', function(value) {
  return value.toLowerCase();
});

Vue.filter('capitalizeFirstLetter', function(value) {
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

const routes = [
  {path: "/", component: Home},
  {path: "/cobertura-especial", component: CoberturaEspecial},
  {path: "/Tabla", component: Tabla},
];

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue' // импорт компонента vue
import App from './App.vue' // импорт  главного файла приложения- app.vue
import router from './router' // импорт роутинга (переход по страничкам vue-router)
import store from './store' // импорт храанилища данных (vuex)

import Vuelidate from 'vuelidate' // Импортируем пакет валидации 

Vue.config.productionTip = false

// Чтобы подключить библиотеку и набор её функциональности к vue.js: 
Vue.use(Vuelidate)

// создаем приложение vue,  используя импортированные компоненты
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

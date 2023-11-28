import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import VueAwesomePaginate from 'vue-awesome-paginate'
import 'vue-awesome-paginate/dist/style.css'
import i18n from '@/i18n'

createApp(App).use(VueAwesomePaginate).use(i18n).mount('#app')

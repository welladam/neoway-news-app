import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast, { POSITION } from "vue-toastification"

import "vue-toastification/dist/index.css"
import './main.css'

const options = {
    position: POSITION.TOP_CENTER,
    timeout: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
}

createApp(App)
    .use(router)
    .use(store)
    .use(Toast, options)
    .mount('#app')

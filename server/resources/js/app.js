require('./bootstrap');


import { createApp } from 'vue'
import HelloComponent from './components/HelloComponent.vue'

createApp({}).component('v-hello', HelloComponent).mount('#app')
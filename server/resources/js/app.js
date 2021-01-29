require('./bootstrap');


import { createApp } from 'vue'
import RandomChart from './components/RandomChart.vue'
import RandomLineChart from './components/RandomLineChart.vue'
import RandomBarChart from './components/RandomBarChart.vue'

createApp({})
.component('v-random-chart', RandomChart)
.component('v-random-line-chart', RandomLineChart)
.component('v-random-bar-chart', RandomBarChart)
.mount('#app')
<template>
  <div class="small">
    <v-chart :labels-prop="labels"
    :data-prop="chartData"
    :type-prop="chartTypeProp"
    :id-prop="chartIdProp"></v-chart>
    <button @click="fillData()">Randomize</button>
  </div>
</template>

<script>
import LineBarComponent from "./chart/LineBarComponent";

export default {
  components: {
    "v-chart": LineBarComponent,
  },
  props: {
    chartTypeProp: String,
    chartIdProp: String
  },
  data() {
    return {
      chartData: [66, 56, 98, 40, 70],
      labels: ['2014', '2015', '2016', '2017', '2020']
    };
  },
  methods: {
    fillData() {
      let newData = _getRandomArray(5, 100)
      this.chartData = newData
    },
  },
};
function _getRandomInt(max) {
  // ランダムな整数
  return Math.floor(Math.random() * Math.floor(max));
}

function _getRandomArray(maxCount, maxValue) {
  let randomArray = [];
  console.log('maxCount', maxCount)
  for (let i = 0; i < maxCount; i++) {
    randomArray.push(_getRandomInt(maxValue));
  }
  return randomArray;
}
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>
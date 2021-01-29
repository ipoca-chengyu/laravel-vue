<template>
  <div class="small">
    <v-chart :options-prop="options"
    :data-prop="chartData"
    :id-prop="chartIdProp"></v-chart>
    <button @click="fillData()">Randomize</button>
  </div>
</template>

<script>
import LineComponent from "./chart/LineComponent";

export default {
  components: {
    "v-chart": LineComponent,
  },
  props: {
    chartTypeProp: String,
    chartIdProp: String
  },
  data() {
    return {
      options: {
        title: {
          display: true,
          fontSize: 22,
          text: "Example",
        },
      },
      chartData: {
        labels: ['2014', '2015', '2016', '2017', '2020'],
        datasets: [
          {
            label: "# of SM-A",
            fill: false,
            data: [66, 56, 98, 40, 70],
            borderColor: "#" + Math.floor(Math.random() * 16777215).toString(16)
          },
          {
            label: "# of SM-B",
            fill: false,
            data: [46, 56, 78, 60, 60],
            borderColor: "#" + Math.floor(Math.random() * 16777215).toString(16)
          },
        ]
      },
    };
  },
  methods: {
    fillData() {
      // clone and then update.
      var newData = Object.assign({}, this.chartData)
      newData.datasets.forEach((dataset) => { 
        dataset.data = getRandomArray(5, 100)
      });
      this.chartData = newData
    },
  },
};
function getRandomInt(max) {
  // ランダムな整数
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomArray(maxCount, maxValue) {
  let randomArray = [];
  console.log('maxCount', maxCount)
  for (let i = 0; i < maxCount; i++) {
    randomArray.push(getRandomInt(maxValue));
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
<template>
  <div class="small">
    <v-chart
      :options-prop="options"
      :data-prop="chartData"
      :id-prop="chartIdProp"
    ></v-chart>
    <button @click="fillData()">Randomize</button>
  </div>
</template>

<script>
import BarComponent from "./chart/BarComponent";

export default {
  components: {
    "v-chart": BarComponent,
  },
  props: {
    chartTypeProp: String,
    chartIdProp: String,
  },
  data() {
    return {
      options: {
        plugins: {
          datalabels: {
            align: 'end',
            anchor: 'end',
            color: 'black',
            formatter: function(value, context) {
              const total = context.chart.$totalizer.totals[context.dataIndex]
              return total
            },
            display: function(context) {
              return context.datasetIndex === context.chart.$totalizer.utmost
            },
          }
        },
        title: {
          display: true,
          fontSize: 22,
          text: "Stackde Bar Example",
        },
        scales: {
          xAxes: [
            {
              stacked: true,
            },
          ],
          yAxes: [
            {
              stacked: true,
            },
          ],
        },
      },
      chartData: {
        labels: ["2014", "2015", "2016", "2017", "2020"],
        datasets: [
          {
            label: "# of SM-A",
            fill: false,
            data: [66, 56, 98, 40, 70],
            backgroundColor: "#2ecc71",
          },
          {
            label: "# of SM-B",
            fill: false,
            data: [46, 56, 78, 60, 60],
            backgroundColor: "#e74c3c"
          },
        ],
      },
    };
  },
  methods: {
    fillData() {
      // clone and then update.
      var newData = Object.assign({}, this.chartData);
      newData.datasets.forEach((dataset) => {
        dataset.data = getRandomArray(5, 100);
      });
      this.chartData = newData;
    },
  },
};
function getRandomInt(max) {
  // ランダムな整数
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomArray(maxCount, maxValue) {
  let randomArray = [];
  console.log("maxCount", maxCount);
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
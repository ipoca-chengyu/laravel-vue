<template>
  <!-- resources/assets/js/components -->
  <div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import { Chart } from "chart.js";
export default {
  props: {
    labels: Array,
    dataProp: Array,
  },
//   data() {
//       return {
//           chartData: this.dataProp
//       }
//   },
  watch: {
      dataProp (newData) {
        // this.chartData = newData
        this.renderChart()
      }
  },
  methods: {
    renderChart() {
      new Chart(document.getElementById("canvas").getContext("2d"), {
        type: "bar",
        data: {
          labels: this.labels,
          datasets: [
            {
              label: "# of Laravel apps made by Jack Russels",
              data: this.dataProp,
            //   data: this.chartData,
              backgroundColor: [
                "#2ecc71",
                "#e74c3c",
                "#8e44ad",
                "#d35400",
                "#16a085",
              ],
            },
          ],
        },
        options: {
          title: {
            display: true,
            fontSize: 22,
            text: "Example",
          },
        },
      });
    },
  },
  mounted() {
    this.renderChart();
  },
};

</script>
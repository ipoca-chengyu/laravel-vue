<template>
  <!-- resources/assets/js/components -->
  <div>
    <canvas :id="idProp"></canvas>
  </div>
</template>

<script>
import { Chart } from "chart.js";
export default {
  props: {
    labelsProp: Array,
    dataProp: Array,
    typeProp: String,
    idProp: String,
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    dataProp(newData) {
      this.renderChart();
    },
  },
  methods: {
    renderChart() {
      if (this.chart != null) {
        this.chart.data.datasets.forEach(dataset => {
          dataset.data = this.dataProp
        });
        this.chart.update()
      } else {
        this.chart = new Chart(document.getElementById(this.idProp).getContext("2d"), {
          type: this.typeProp,
          data: {
            labels: this.labelsProp,
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
                borderWidth: 1,
              },
            ],
          },
          options: {
            title: {
              display: true,
              fontSize: 22,
              text: "Example",
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          },
        });
      }
    },
  },
  mounted() {
    this.renderChart();
  },
};
</script>
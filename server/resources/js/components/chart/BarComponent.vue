<template>
  <!-- resources/assets/js/components -->
  <div>
    <canvas :id="idProp"></canvas>
  </div>
</template>

<script>
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.plugins.unregister(ChartDataLabels);

const totalizer = {
  id: 'totalizer',
  beforeUpdate: chart => {
      let totals = {}
      let utmost = 0

          chart.data.datasets.forEach((dataset, datasetIndex) => {
              if (chart.isDatasetVisible(datasetIndex)) {
                  utmost = datasetIndex
                      dataset.data.forEach((value, index) => {
                          totals[index] = (totals[index] || 0) + value
                      })
              }
          })
          chart.$totalizer = {
          totals: totals,
          utmost: utmost
      }
  }
}

export default {
  props: {
    dataProp: Object,
    optionsProp: Object,
    idProp: String
  },
  data() {
    return {chart: null}
  },
  watch: {
      dataProp (newData) {
        this.renderChart()
      }
  },
  methods: {
    renderChart() {
      if (this.chart != null) {
        this.chart.data = this.dataProp
        this.chart.options = this.optionsProp
        this.chart.update()
      } else {
        this.chart = new Chart(document.getElementById(this.idProp).getContext("2d"), {
          plugins: [ChartDataLabels, totalizer],
          type: "bar",
          data: this.dataProp,
          options: this.optionsProp
        });
      }
    },
  },
  mounted() {
    this.renderChart();
  },
};

</script>
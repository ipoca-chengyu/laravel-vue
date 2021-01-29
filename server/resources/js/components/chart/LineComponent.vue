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
    },
    optionProp (newData) {
      this.renderChart()
    }
  },
  methods: {
    renderChart() {
      if (this.chart != null) {
        this.chart.data = this.dataProp
        this.chart.option = this.optionProp
        this.chart.update()
      } else {
        this.chart = new Chart(document.getElementById(this.idProp).getContext("2d"), {
          type: "line",
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
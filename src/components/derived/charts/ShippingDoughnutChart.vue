<template>
  <div class="shipping-chart d-flex pt-1 pl-3 pr-3 pb-1">
    <div v-if="chartdata.icons && chartdata.data" class="labels align-self-center">
      <p v-for="(icon, i) in chartdata.icons" :key="i">
        <span>
          <i :style="changeIconColor(i)" class="icon mr-1 fa" :class="icon"></i>
        </span>
        <span>{{chartdata.data.labels[i]}}</span>
        <span> ({{chartdata.data.datasets[0].data[i]}})</span>
      </p>
    </div>

    <div class="chart ml-auto">
      <canvas id="doughnutChart" class="canvas-doughnut"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: "DoughnutChart",
  props: {
    chartdata: {
      type: Object
    }
  },
  methods: {
    changeIconColor(i) {
      return "color: " + this.chartdata.data.datasets[0].backgroundColor[i];
    }
  },
  mounted() {
    console.log(this.chartdata.icons);
    var doughnutChart = new Chart($("#doughnutChart"), {
      type: "doughnut",
      data: this.chartdata.data,
      options: {
        cutoutPercentage: 80,
        aspectRatio: 1,
        responsive: true,
        legend: false,
        tooltips: false
      }
    });
  }
};
</script>

<style lang="scss" scoped>

.shipping-chart{

  .labels{
    p{
      font-size: 0.9rem;
      margin-bottom: 0.2rem;
    }
  }

  .chart {
    height: 110px;
    width: 110px;
  }
}

</style>
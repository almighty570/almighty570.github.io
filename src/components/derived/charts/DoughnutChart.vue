<template>
  <div class="row">
    <div class="col-sm-4 offset-md-2">
      <div v-if="chartdata.icons && chartdata.data">
        <p  v-for="(icon, i) in chartdata.icons" :key='i'>
          <span><i :style="changeIconColor(i)" class="icon fa" :class ="icon"></i> </span>
          <span> {{chartdata.data.labels[i]}} </span>
          <span> - ({{chartdata.data.datasets[0].data[i]}}) </span> 
        </p>
    </div>
      
    </div>
    <div  class="col-sm-3 align-self-start" id="my-legend-con">
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
  methods:{
    changeIconColor(i){
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
        tooltips:false
        
      }
    });
  
  }
};
</script>

<style lang="scss" scoped>
.canvas-doughnut{
  padding-bottom: 6px;
  
}
</style>
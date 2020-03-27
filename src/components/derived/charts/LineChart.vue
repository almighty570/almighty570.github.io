<template>
  <div>
    <canvas id="linechart"></canvas>
  </div>
</template>

<script>
export default {
  name: "LineChart",
  mounted() {
    var ticksStyle = {
      fontColor: "#495057",
      fontStyle: "bold"
    };

    var mode = "index";
    var intersect = true;

    var lineChart = new Chart($("#linechart"), {
      data: {
        labels: ["18th", "20th", "22nd", "24th", "26th", "28th", "30th"],
        datasets: [
          {
            type: "line",
            data: [100, 120, 170, 167, 180, 177, 160],
            backgroundColor: "rgb(40, 167, 69, 0.2)",
            borderColor: "rgb(40, 167, 69, 0.5)",
            pointBorderColor: "transparent",
            pointBackgroundColor: "transparent",
            fill: true
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 25
          }
        },
        tooltips: {
          enabled: false
        },
        hover: {
          enabled: false
        },
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              display: false
            }
          ],
          xAxes: [
            {
              display: false
            }
          ]
        }
      }
    });
  }
};
</script>

<style lang="scss" scoped>
#linechart {
  //   border: 1px solid;
}
</style>
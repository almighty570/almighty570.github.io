<template>
  <div>
    <div class="content-header">
      <div class="container-fluid">
        <div class="d-flex">
          <h1 class="text-dark align-self-center">Dashboard</h1>

          <select
            class="form-control form-control-sm ml-auto align-self-center"
            style="width: 150px;"
          >
            <option value="1">This Week</option>
            <option value="1">This Month</option>
            <option value="1">Last 3 months</option>
            <option value="1">This year</option>
            <option value="1">Till Now</option>
          </select>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <!-- Products -->
          <PhoneNumber/>
          <OTPField/>
          <div class="col-md-6 col-sm-12">
            <div class="card m-2">
              <router-link :to="{name: 'Seller-Product-List'}" class="--no-styles">
                <div class="card-body p-3">
                  <div class="toolbar d-flex justify-space-between">
                    <h3 class>Products</h3>
                  </div>

                  <div class="row">
                    <div class="col-md-6 col-sm-12">
                      <SmallBox custom_class="mb-0">
                        <div slot="inner">
                          <h3>150</h3>
                          <p>Products</p>
                        </div>
                        <i slot="icon" class="icon fal fa-box-full text-primary"></i>
                      </SmallBox>
                    </div>
                    <div class="col-md-6 col-sm-12">
                      <SmallBox custom_class="mb-0">
                        <div slot="inner">
                          <h3>2323</h3>
                          <p>Items</p>
                        </div>
                        <i slot="icon" class="icon far fa-sitemap text-primary"></i>
                      </SmallBox>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>

          <!-- Orders -->
          <div class="col-md-6 col-sm-12">
            <div class="card m-2">
              <router-link :to="{name: 'Seller-Order-List'}" class="--no-styles">
                <div class="card-body p-0" style="position:relative">
                  <div
                    class="info"
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                  >
                    <div class="toolbar d-flex justify-space-between p-3 pb-4">
                      <h3 class>Orders</h3>
                    </div>
                    <div class="row pl-2 pr-2 pl-md-3 pr-md-3">
                      <div class="col-6">
                        <h2 class="font-weight-bold">150</h2>New Orders
                      </div>
                      <div class="col-6">
                        <h2 class="font-weight-bold">64%</h2>Growth
                      </div>
                    </div>
                  </div>
                  <div class="pt-4" style="border-radius: 5px">
                    <OrdersLineChart :chartdata="ordersChartData" :options="{}" />
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div class="card m-2">
              <router-link :to="{name: 'Seller-Order-List'}" class="--no-styles">
                <div class="card-body p-3" style="position:relative">
                  <ShippingDoughnutChart v-if="shippingChartData" :chartdata="shippingChartData" />
                </div>
              </router-link>
            </div>
          </div>

          <div class="col-md-6 col-sm-12">
            <div class="card m-2">
              <router-link :to="{name: 'Seller-Order-List'}" class="--no-styles">
                <div class="card-body p-3" style="position:relative">
                  <CodDoughnutChart v-if="codChartData" :chartdata="codChartData" />
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/core/Card";
import SmallBox from "@/components/core/SmallBox";
import OrdersLineChart from "@/components/derived/charts/OrdersLineChart";
import ShippingDoughnutChart from "@/components/derived/charts/ShippingDoughnutChart";
import CodDoughnutChart from "@/components/derived/charts/CodDoughnutChart";
import PhoneNumber from "@/components/derived/PhoneNumber";
import OTPField from "@/components/derived/OTPField";

export default {
  name: "Dashbaord",
  components: {
    Card,
    OrdersLineChart,
    ShippingDoughnutChart,
    CodDoughnutChart,
    SmallBox,
    PhoneNumber,
    OTPField
  },
  data() {
    return {
      statsData: null
    };
  },

  created() {},

  mounted() {
    // this.fillData();
    // this.fillShippingData();
  },

  methods: {
    getDashboardData() {
      this.statsData = {
        products: null,
        orders: null,
        shipping: null,
        cod: null
      };
    },

    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  },

  computed: {
    ordersChartData() {
      return {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      };
    },

    shippingChartData() {
      return {
        data: {
          labels: ["Pending", "In Transit", "Delivered", "Cancelled"],
          datasets: [
            {
              data: [12, 8, 12, 34],
              backgroundColor: ["#f56954", "#00a65a", "#f39c12", "#26A69A"]
            }
          ]
        },
        icons: [
          "fa-box-alt",
          "fa-dolly-flatbed-alt",
          "fa-box-check",
          "fa-times-square"
        ]
      };
    },

    codChartData() {
      return {
        data: {
          labels: ["Pending", "In Transit", "Delivered", "Cancelled"],
          datasets: [
            {
              data: [119, 134, 112, 50],
              backgroundColor: ["#f56954", "#00a65a", "#f39c12", "#26A69A"]
            }
          ]
        },
        icons: [
          "fa-box-alt",
          "fa-dolly-flatbed-alt",
          "fa-box-check",
          "fa-times-square"
        ]
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.small {
  max-width: 600px;
  margin: 150px auto;
}

.icon {
  font-size: 30px !important;
}

#orders-details-card .icon {
  color: #28a745;
}

#products-details-card .icon {
  color: #007bff;
}

#shipping-details-card .icon {
  color: #ffc107;
}

#cod-details-card .icon {
  color: #dc3545;
}
</style>
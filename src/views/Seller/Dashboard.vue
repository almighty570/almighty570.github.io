<template>
  <div>
    <div class="content-header">
      <div class="container">
        <h1 class="text-dark">Dashboard</h1>
      </div>
    </div>

    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <!-- Products -->
          <div class="col-md-6 col-sm-12">
            <!-- <router-link :to="{name: 'Seller-Product-List'}" class="--no-styles">
              <Card custom_class="card-primary" id="products-details-card">
                <h2 slot="title">Products</h2>
                <div slot="body" class="info-box-wrapper">
                  <div class="row">
                    <div class="col-md-6 col-sm-12">
                      <SmallBox custom_class="mb-0">
                        <div slot="inner">
                          <h3>150</h3>
                          <p>Products</p>
                        </div>
                        <i slot="icon" class="icon fal fa-box-full"></i>
                      </SmallBox>
                    </div>
                    <div class="col-md-6 col-sm-12">
                      <SmallBox custom_class="mb-0">
                        <div slot="inner">
                          <h3>2323</h3>
                          <p>Items</p>
                        </div>
                        <i slot="icon" class="icon far fa-sitemap"></i>
                      </SmallBox>
                    </div>
                  </div>
                </div>
              </Card>
            </router-link>-->
            <!-- <Card>
              <div slot="body">
                <LineChart :chartdata="datacollection" :options="{}" />
              </div>
            </Card>-->
            <div class="card">
              <div class="card-body p-0" style="position:relative">
                <div
                  class="info"
                  style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                >
                  <div class="toolbar d-flex justify-space-between p-3 pb-4">
                    <h3 class>Orders</h3>
                    <select class="form-control form-control-sm ml-auto" style="width: 100px">
                      <option value="1">This Week</option>
                      <option value="1">This Month</option>
                      <option value="1">Last 3 months</option>
                      <option value="1">This year</option>
                      <option value="1">Till Now</option>
                    </select>
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
                  <LineChart :chartdata="datacollection" :options="{}" />
                </div>
              </div>
            </div>
          </div>

          <!-- Orders -->
          <div class="col-md-6 col-sm-12">
            <router-link :to="{name: 'Seller-Order-List'}" class="--no-styles">
              <Card custom_class="card-success" id="orders-details-card">
                <h2 slot="title">Orders</h2>
                <div slot="body" class="info-box-wrapper">
                  <div class="row">
                    <div class="col-md-6 col-sm-12">
                      <SmallBox custom_class="mb-0">
                        <div slot="inner">
                          <h3>150</h3>
                          <p>New Orders</p>
                        </div>
                        <i slot="icon" class="icon fal fa-dolly"></i>
                      </SmallBox>
                    </div>
                    <div class="col-md-6 col-sm-12">
                      <SmallBox custom_class="mb-0">
                        <div slot="inner">
                          <h3>
                            53
                            <sup style="font-size: 20px">%</sup>
                          </h3>
                          <p>Growth</p>
                        </div>
                        <i slot="icon" class="icon fal fa-chart-line"></i>
                      </SmallBox>
                    </div>
                  </div>
                </div>
              </Card>
            </router-link>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 col-sm-12">
            <router-link :to="{name: 'Seller-Order-List'}" class="--no-styles">
              <div class="card">
                <div class="card-body p-0" style="position:relative">
                  <div class="toolbar d-flex justify-space-between p-3">
                    <h3 class>Shipping</h3>
                    <select class="form-control form-control-sm ml-auto" style="width: 100px">
                      <option value="1">This Week</option>
                      <option value="1">This Month</option>
                      <option value="1">Last 3 months</option>
                      <option value="1">This year</option>
                      <option value="1">Till Now</option>
                    </select>
                  </div>

                  <DoughnutChart v-if="shippingdata" :chartdata="shippingdata" />
                </div>
              </div>
            </router-link>
          </div>

          <div class="col-md-6 col-sm-12">
            <router-link :to="{name: 'Seller-Order-List'}" class="--no-styles">
              <Card custom_class="card-danger" id="cod-details-card">
                <h2 slot="title">COD</h2>
                <div slot="body" class="info-box-wrapper">
                  <div class="row">
                    <div class="col-md-4 col-sm-12">
                      <SmallBox custom_class="mb-0">
                        <div slot="inner">
                          <h3>1500</h3>
                          <p>To Ship</p>
                        </div>
                        <i slot="icon" class="icon far fa-box-alt"></i>
                      </SmallBox>
                    </div>
                    <div class="col-md-4 col-sm-12">
                      <SmallBox custom_class="mb-0">
                        <div slot="inner">
                          <h3>1500</h3>
                          <p>In Transit</p>
                        </div>
                        <i slot="icon" class="icon far fa-dolly-flatbed-alt"></i>
                      </SmallBox>
                    </div>
                    <div class="col-md-4 col-sm-12">
                      <SmallBox custom_class="mb-0">
                        <div slot="inner">
                          <h3>1500</h3>
                          <p>Delivered</p>
                        </div>
                        <i slot="icon" class="icon far fa-box-check"></i>
                      </SmallBox>
                    </div>
                  </div>
                </div>
              </Card>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextBox from "@/components/core/TextBox";
import MultiSelect from "@/components/core/MultiSelect";
import FileUpload from "@/components/core/FileUpload";
import Button from "@/components/core/Button";
import DatePicker from "@/components/core/DatePicker";
import NumberField from "@/components/core/NumberField";
import RadioGroup from "@/components/core/RadioGroup";
import Select from "@/components/core/Select";
import Card from "@/components/core/Card";
import ImageUpload from "@/components/core/ImageUpload";
import CheckBoxGroup from "@/components/core/CheckBoxGroup";
import SmallBox from "@/components/core/SmallBox";
import { Toast } from "@/helpers/toastr";
import LineChart from "@/components/derived/charts/LineChart";
import DoughnutChart from "@/components/derived/charts/DoughnutChart";

export default {
  name: "Dashbaord",
  components: {
    TextBox,
    Button,
    DatePicker,
    NumberField,
    RadioGroup,
    Select,
    Card,
    MultiSelect,
    FileUpload,
    ImageUpload,
    CheckBoxGroup,
    SmallBox,
    LineChart,
    DoughnutChart
  },
  data() {
    return {
      multiSelect: null,
      val: null,
      date: null,
      select: null,
      number_field_value: null,
      radio_field_value: null,
      select_field_value: null,
      checkBoxResults: null,
      datacollection: null,
      shippingdata: null,
    };
  },

  created() {},

  mounted() {
    this.fillData();
    this.fillShippingData();
  },

  methods: {
    handleClick() {
      alert("clicked");
    },
    fillShippingData() {
      this.shippingdata = {
        data: {
          labels: ["To Ship", "In Transit", "Delivered"],
          datasets: [
            {
              data: [12, 8, 112],
              backgroundColor: ["#f56954", "#00a65a", "#f39c12"]
            }
          ]
        },
        icons:['fa-box-alt','fa-dolly-flatbed-alt','fa-box-check']
      };
    },
    fillData() {
      this.datacollection = {
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

    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
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

// <div class="row">
                    <div class="col-md-4 col-sm-12">
                      <SmallBox custom_class="mb-0">
                        <div slot="inner">
                          <h3>12</h3>
                          <p>To Ship</p>
                        </div>
                        <i slot="icon" class="icon far fa-box-alt"></i>
                      </SmallBox>
                    </div>
                    <div class="col-md-4 col-sm-12">
                      <SmallBox custom_class="mb-0">
                        <div slot="inner">
                          <h3>8</h3>
                          <p>In Transit</p>
                        </div>
                        <i slot="icon" class="icon far fa-dolly-flatbed-alt"></i>
                      </SmallBox>
                    </div>
                    <div class="col-md-4 col-sm-12">
                      <SmallBox custom_class="mb-0">
                        <div slot="inner">
                          <h3>112</h3>
                          <p>Delivered</p>
                        </div>
                        <i slot="icon" class="icon far fa-box-check"></i>
                      </SmallBox>
                    </div>
                  </div>
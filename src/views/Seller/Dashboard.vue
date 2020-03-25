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
            <router-link :to="{name: 'Seller-Product-List'}" class="--no-styles">
              <!-- <Card custom_class="card-primary" id="products-details-card">
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
              </Card>-->

              <div class="my-card">
                <h1 class="title">Orders</h1>
                <div class="content">
                  <div class="row">
                    <div class="col">
                      <h3 class="text-weight-bold">
                        <i class="icon fal fa-dolly text-success"></i>
                        150
                      </h3>
                      <p>New Orders</p>
                    </div>

                    <div class="col">
                      <h3>
                        <i class="icon fal fa-chart-line text-success"></i>
                        53 %
                      </h3>
                      <p>Growth</p>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
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
              <Card custom_class="card-warning" id="shipping-details-card">
                <h2 slot="title">Shipping</h2>
                <div slot="body" class="info-box-wrapper">
                  <div class="row">
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
                </div>
              </Card>
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
    SmallBox
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
      checkBoxResults: null
    };
  },

  methods: {
    handleClick() {
      alert("clicked");
    }
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped>
.my-card {
  box-shadow: rgba(36, 37, 38, 0.08) 4px 4px 15px 0px;
  width: 100%;
  border: 1px solid rgba(36, 37, 38, 0.08);
  border-radius: 0.9rem;
  background-color: #fff;
  color: #3a3a3a;
  font-family: "Roboto", sans-serif;
  padding: 0.5rem 1rem;

  .title {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 1.5rem;
    color: #373737;
  }

  .content {
    margin-top: 3rem;
  }
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
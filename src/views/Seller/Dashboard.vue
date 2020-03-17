<template>
  <div>
    <div class="content-header">
      <div class="container-fluid">
        <h1 class="text-dark">Dashboard</h1>
      </div>
    </div>

    <div class="content">
      <div class="container-fluid">
        <div class="row mb-4">
          <div class="col-6">
            <div class="card h-100">
              <div class="card-header border-0">
                <div class="d-flex justify-content-between">
                  <h3 class="card-title">Products/Items</h3>
                  <a href="javascript:void(0);">Details</a>
                </div>
              </div>
              <div class="card-body">
                <p>You have XXX Products with YYY Items</p>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card h-100">
              <div class="card-header border-0">
                <div class="d-flex justify-content-between">
                  <h3 class="card-title">Orders</h3>
                  <a href="javascript:void(0);">Details</a>
                </div>
              </div>
              <div class="card-body">
                <p>
                  To Ship: XXX
                  <br />Intransit: XXX
                  <br />Delivered: XXX
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-6">
            <div class="card h-100">
              <div class="card-header border-0">
                <div class="d-flex justify-content-between">
                  <h3 class="card-title">Products/Items</h3>
                  <a href="javascript:void(0);">Details</a>
                </div>
              </div>
              <div class="card-body">
                <p>New Orders Today: XX</p>
                <p>Growth: +20%</p>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card h-100">
              <div class="card-header border-0">
                <div class="d-flex justify-content-between">
                  <h3 class="card-title">Cod</h3>
                  <a href="javascript:void(0);">Details</a>
                </div>
              </div>
              <div class="card-body">
                <p>COD Value: XXX</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-12">
            <TextBox id="unique" type="text" v-model="val" label="INput here" placeholder="shh....." />
          </div>
          <div class="col-12">
            <NumberField id="number-field" v-model="numberFieldVal" label="Enter Number Here" placeholder="2050" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextBox from "@/components/core/TextBox";
import NumberField from "@/components/core/NumberField";

export default {
  name: "Dashbaord",
  components: {
    TextBox,
    NumberField
  },
  data() {
    return {
      val: null,
      numberFieldVal: null
    };
  }
};
</script>

<style>
</style>
<template>
  <div>
    <div class="content-header">
      <div class="container-fluid">
        <h1 class="text-dark">Dashboard</h1>
      </div>
    </div>

    <div class="content">
      <div class="container-fluid">
        <!-- <div class="row mb-4">
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
        </div>-->

        <div class="row mt-4">
          <div class="col-12">
            <Button id="unique-1" variant="info" size="lg">Info</Button>
            <Button id="unique-2" variant="warning" size="lg">Warning</Button>
            <Button id="unique-3" variant="success" size="sm" @click="handleClick()">Success</Button>

            <Button id="unique-4" variant="warning" size="lg" loading>Loading</Button>

            <TextBox
              id="unique-1"
              type="text"
              v-model="val"
              label="Input here"
              placeholder="shh....."
            />

            <DatePicker v-model="date" />

            <Select
              id="unique-5"
              v-model="select"
              :options="[{title: 'One', value: 1}, {title: 'Two', value: 2}]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextBox from "@/components/core/TextBox";
import Button from "@/components/core/Button";
import DatePicker from "@/components/core/DatePicker";

export default {
  name: "Dashbaord",
  components: {
    TextBox,
    Button,
    DatePicker
  },
  data() {
    return {
      val: null,
      date: null,
      select: null
    };
  },

  methods: {
    handleClick() {
      alert("clicked");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
<template>
  <div>
    <div class="content-header">
      <div class="container">
        <h1 class="text-dark">Dashboard</h1>
      </div>
    </div>

    <div class="content">
      <div class="container">
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
            <MultiSelect
              id="unique-0"
              :options="['one', 'two', 'three']"
              v-model="multiSelect"
              multiple
            />

            <FileUpload :max_size="5" upload_url="asdsad.com" name="asdas" />

            <Button id="unique-1" variant="info" size="lg">Info</Button>
            <Button id="unique-2" variant="warning" size="lg">Warning</Button>
            <Button id="unique-3" variant="success" size="sm" @click="handleClick()" loading>Success</Button>

            <Button id="unique-4" variant="warning" size="lg" loading>Loading</Button>

            <TextBox
              type="text"
              id="unique-1"
              v-model="val"
              label="Input here"
              placeholder="shh....."
            />

            <DatePicker v-model="date" />

            <!-- <br /> -->
          </div>

          <div class="col-12">
            <NumberField
              id="number-field"
              v-model="number_field_value"
              label="Enter Number Here"
              placeholder="2050"
            />
          </div>
          <div class="col-12">
            <RadioGroup
              :options="[{value:'male' , label:'Male'},{value:'female' , label:'Female'},{value:'others' , label:'Others'}]"
              name="gender"
              v-model="radio_field_value"
            />
          </div>
          <div class="col-12">
            <Select
              id="select"
              :options="[{value:'china',name:'China'},{value:'usa',name:'U.S.A'},{value:'egypt',name:'Egypt'}]"
              label="Select:"
              v-model="select_field_value"
            />
          </div>
          <div class="col-12">
            <Card>
              <h2 slot="title">Hello World!</h2>
              <p
                slot="body"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, modi ipsam. Voluptate, eaque dolorum eum sequi alias soluta. Similique molestias nihil ad ab consequuntur harum tenetur! Quidem molestiae alias inventore!</p>
              <p slot="footer">yolo</p>
            </Card>
          </div>
          <div class="col-12">
            <CheckboxGroup
              id="checkbox"
              :options="[{value:'china',name:'China'},{value:'usa',name:'U.S.A'},{value:'egypt',name:'Egypt'}]"
              v-model="checkBoxResults"
            />
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
import CheckboxGroup from "@/components/core/CheckboxGroup";

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
    CheckboxGroup
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
</style>
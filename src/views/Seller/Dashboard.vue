<template>
  <div>
    <div class="content-header">
      <div class="container">
        <h1 class="text-dark">Dashboard</h1>
      </div>
    </div>

    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <Card custom_class="card-primary" id="products-details-card">
              <h2 slot="title">Products</h2>
              <div slot="body" class="info-box-wrapper">
                <div class="row">
                  <div class="col-6">
                    <SmallBox>
                      <div slot="inner">
                        <h3>150</h3>
                        <p>Products</p>
                      </div>
                      <i slot="icon" class="icon fal fa-box-full"></i>
                    </SmallBox>
                  </div>
                  <div class="col-6">
                    <SmallBox>
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
          </div>
          <div class="col-6">
            <Card custom_class="card-warning" id="shipping-details-card">
              <h2 slot="title">Shipping</h2>
              <div slot="body" class="info-box-wrapper">
                <div class="row">
                  <div class="col-4">
                    <SmallBox>
                      <div slot="inner">
                        <h3>12</h3>
                        <p>To Ship</p>
                      </div>
                      <i slot="icon" class="icon far fa-box-alt"></i>
                    </SmallBox>
                  </div>
                  <div class="col-4">
                    <SmallBox>
                      <div slot="inner">
                        <h3>8</h3>
                        <p>In Transit</p>
                      </div>
                      <i slot="icon" class="icon far fa-dolly-flatbed-alt"></i>
                    </SmallBox>
                  </div>
                  <div class="col-4">
                    <SmallBox>
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
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <Card custom_class="card-success" id="orders-details-card">
              <h2 slot="title">Orders</h2>
              <div slot="body" class="info-box-wrapper">
                <div class="row">
                  <div class="col-6">
                    <SmallBox>
                      <div slot="inner">
                        <h3>150</h3>
                        <p>New Orders</p>
                      </div>
                      <i slot="icon" class="icon fal fa-dolly"></i>
                    </SmallBox>
                  </div>
                  <div class="col-6">
                    <SmallBox>
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
          </div>

          <div class="col-6">
            <Card custom_class="card-danger" id="cod-details-card">
              <h2 slot="title">COD</h2>
              <div slot="body" class="info-box-wrapper">
                <div class="row">
                  <div class="col-12">
                    <SmallBox>
                      <div slot="inner">
                        <h3>1500</h3>
                        <p>COD Value</p>
                      </div>
                      <i slot="icon" class="icon far fa-box-usd"></i>
                    </SmallBox>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <h2 class="text-dark">Dashboard Long</h2>
        <div class="container">
          <div class="row">
            <div class="col-6">
              <Card custom_class="card-primary" id="products-details-card">
                <h2 slot="title">Products</h2>
                <div slot="body" class="info-box-wrapper">
                  <div class="row">
                    <div class="col-12">
                      <SmallBox>
                        <div slot="inner">
                          <h3>150</h3>
                          <p>Products</p>
                        </div>
                        <i slot="icon" class="icon fal fa-box-full"></i>
                      </SmallBox>
                    </div>
                    <div class="col-12">
                      <SmallBox>
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
            </div>
            <div class="col-6">
              <Card custom_class="card-warning" id="shipping-details-card">
                <h2 slot="title">Shipping</h2>
                <div slot="body" class="info-box-wrapper">
                  <div class="row">
                    <div class="col-12">
                      <SmallBox>
                        <div slot="inner">
                          <h3>12</h3>
                          <p>To Ship</p>
                        </div>
                        <i slot="icon" class="icon far fa-box-alt"></i>
                      </SmallBox>
                    </div>
                    <div class="col-12">
                      <SmallBox>
                        <div slot="inner">
                          <h3>8</h3>
                          <p>In Transit</p>
                        </div>
                        <i slot="icon" class="icon far fa-dolly-flatbed-alt"></i>
                      </SmallBox>
                    </div>
                    <div class="col-12">
                      <SmallBox>
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
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <Card custom_class="card-success" id="orders-details-card">
                <h2 slot="title">Orders</h2>
                <div slot="body" class="info-box-wrapper">
                  <div class="row">
                    <div class="col-12">
                      <SmallBox>
                        <div slot="inner">
                          <h3>150</h3>
                          <p>New Orders</p>
                        </div>
                        <i slot="icon" class="icon fal fa-dolly"></i>
                      </SmallBox>
                    </div>
                    <div class="col-12">
                      <SmallBox>
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
            </div>
            

            <div class="col-6">
              <Card custom_class="card-danger" id="cod-details-card">
                <h2 slot="title">COD</h2>
                <div slot="body" class="info-box-wrapper">
                  <div class="row">
                    <div class="col-12">
                      <SmallBox>
                        <div slot="inner">
                          <h3>1500</h3>
                          <p>COD Value</p>
                        </div>
                        <i slot="icon" class="icon far fa-box-usd"></i>
                      </SmallBox>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <h2 class="text-dark">Dashboard Long Card</h2>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <Card custom_class="card-primary" id="products-details-card">
                <h2 slot="title">Products</h2>
                <div slot="body" class="info-box-wrapper">
                  <div class="row">
                    <div class="col-6">
                      <SmallBox>
                        <div slot="inner">
                          <h3>150</h3>
                          <p>Products</p>
                        </div>
                        <i slot="icon" class="icon fal fa-box-full"></i>
                      </SmallBox>
                    </div>
                    <div class="col-6">
                      <SmallBox>
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
            </div>
            <div class="col-12">
              <Card custom_class="card-warning" id="shipping-details-card">
                <h2 slot="title">Shipping</h2>
                <div slot="body" class="info-box-wrapper">
                  <div class="row">
                    <div class="col-6">
                      <SmallBox>
                        <div slot="inner">
                          <h3>12</h3>
                          <p>To Ship</p>
                        </div>
                        <i slot="icon" class="icon far fa-box-alt"></i>
                      </SmallBox>
                    </div>
                    <div class="col-6">
                      <SmallBox>
                        <div slot="inner">
                          <h3>8</h3>
                          <p>In Transit</p>
                        </div>
                        <i slot="icon" class="icon far fa-dolly-flatbed-alt"></i>
                      </SmallBox>
                    </div>
                    <div class="col-6">
                      <SmallBox>
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
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <Card custom_class="card-success" id="orders-details-card">
                <h2 slot="title">Orders</h2>
                <div slot="body" class="info-box-wrapper">
                  <div class="row">
                    <div class="col-6">
                      <SmallBox>
                        <div slot="inner">
                          <h3>150</h3>
                          <p>New Orders</p>
                        </div>
                        <i slot="icon" class="icon fal fa-dolly"></i>
                      </SmallBox>
                    </div>
                    <div class="col-6">
                      <SmallBox>
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
            </div>
            

            <div class="col-12">
              <Card custom_class="card-danger" id="cod-details-card">
                <h2 slot="title">COD</h2>
                <div slot="body" class="info-box-wrapper">
                  <div class="row">
                    <div class="col-12">
                      <SmallBox>
                        <div slot="inner">
                          <h3>1500</h3>
                          <p>COD Value</p>
                        </div>
                        <i slot="icon" class="icon far fa-box-usd"></i>
                      </SmallBox>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-12">
            <!-- <ImageUpload /> -->

            <TextBox
              type="text"
              id="unique-1.1"
              v-model="val"
              label="Input here"
              placeholder="shh....."
              rules="required"
            />

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
            <!-- <Card>
              <h2 slot="title">Hello World!</h2>
              <p
                slot="body"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, modi ipsam. Voluptate, eaque dolorum eum sequi alias soluta. Similique molestias nihil ad ab consequuntur harum tenetur! Quidem molestiae alias inventore!</p>
              <p slot="footer">yolo</p>
            </Card>-->
          </div>
          <div class="col-12">
            <CheckBoxGroup
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
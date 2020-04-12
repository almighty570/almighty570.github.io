<template>
  <div>
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-md-6 col-sm-12">
            <h1 class="m-0 text-dark">
              <i class="nav-icon fal fa-arrow-circle-left mr-2 btn-back" @click="cancel()"></i>
              Edit Product
            </h1>
          </div>
          <div class="col-md-6 col-sm-12">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item" v-for="(item, index) in breadcrumbLinks" :key="index">
                <router-link
                  :to="{name: item.pathName}"
                  :class="{'breadcrumb-item': true, 'active': item.isActive}"
                >{{item.title}}</router-link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <section class="content">
      <div class="container-fluid">
        <div class="card">
          <div class="card-body">
            <ValidationObserver v-slot="{ invalid }">
              <form @submit.prevent="handleFormSubmit">
                <div class="row">
                  <div class="col-md-6 col-sm-12">
                    <TextBox
                      type="text"
                      id="item-code"
                      label="Item Code(SKU)"
                      v-model="productEditForm.itemCode"
                      rules="required"
                    />

                    <NumberField
                      id="cost"
                      label="Cost"
                      v-model.number="productEditForm.cost"
                      rules="required"
                    />

                    <TextArea
                      id="description"
                      label="Description"
                      v-model="productEditForm.description"
                      rules="required"
                      rows="4"
                    />

                    <NumberField
                      id="sale-price"
                      label="Sale Price"
                      v-model.number="productEditForm.salePrice"
                      rules="required"
                    />

                    <NumberField
                      id="weight-approx"
                      label="Weight Approx"
                      v-model.number="productEditForm.weightApprox"
                      rules="required"
                    />
                  </div>
                  <!-- <div class="col-md-6 col-sm-12">
                    <div class="row">
                      <div class="col">
                        <Select
                          id="box-size"
                          label="Box Size"
                          :options="boxSizeOptions"
                          v-model="productEditForm.boxSize"
                        />

                        <NumberField
                          v-if="productEditForm.boxSize == 0"
                          id="custom-box-size"
                          placeholder="Custom box size"
                          rules="required"
                          v-model="productEditForm.customBoxSize"
                        />
                      </div>
                      <div class="col">
                        <ImageUpload label="Image" custom_class="ml-4" />
                      </div>
                    </div>

                    <Toggle
                      id="has-bundles"
                      :value="false"
                      color="blue"
                      v-model="productHasBundles"
                      :labels="{true: 'This product has bundle pricing', false: 'This product doesn\'t have bundle pricing' }"
                    />

                    <div v-if="productHasBundles">
                      <RowControls
                        :config="bundlePriceConfig"
                        :value="productEditForm.dealPrices"
                        title="Enter Deal Price"
                      />
                    </div>
                  </div>-->
                  <div class="col-md-6 col-sm-12">
                    <NumberField
                      id="sale-price"
                      label="Sale Price"
                      v-model.number="productEditForm.salePrice"
                      rules="required"
                    />

                    <Toggle
                      id="has-bundles"
                      :value="false"
                      color="blue"
                      v-model="productHasBundles"
                      :labels="{true: 'This product has bundle pricing', false: 'This product doesn\'t have bundle pricing' }"
                    />

                    <div v-if="productHasBundles">
                      <RowControls
                        :config="bundlePriceConfig"
                        v-model="productEditForm.bundlePrices"
                      />
                    </div>

                    <NumberField
                      id="weight-approx"
                      label="Weight Approx"
                      v-model.number="productEditForm.weightApprox"
                      rules="required"
                    />

                    <div class="row">
                      <div class="col">
                        <Select
                          id="box-size"
                          label="Box Size"
                          :options="boxSizeOptions"
                          v-model="productEditForm.boxSize"
                        />

                        <NumberField
                          v-if="productEditForm.boxSize == 0"
                          id="custom-box-size"
                          placeholder="Custom box size"
                          rules="required"
                          v-model="productEditForm.customBoxSize"
                        />

                        <NumberField
                          id="quantity"
                          label="Quantity"
                          placeholder="Product quantity"
                          rules="required"
                          v-model="productEditForm.quantity"
                        />
                      </div>
                      <div class="col">
                        <ImageUpload label="Image" custom_class="ml-4" />
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Product Variations -->
                <div class="row">
                  <div class="col-12">
                    <Toggle
                      id="has-variations"
                      :value="false"
                      color="blue"
                      v-model="productHasVariations"
                      :labels="{true: 'This product has variations', false: 'This product doesn\'t have variation' }"
                    />
                    <div class="mb-2"></div>

                    <div v-if="productHasVariations">
                      <ProductVariation
                        color_scheme="primary"
                        v-model="productEditForm.variations"
                        :value="productEditForm.variations"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col">
                    <hr />
                    <div class="d-flex mt-4 justify-content-center">
                      <button type="submit" class="btn btn-primary mr-4" :disabled="invalid">Submit</button>
                      <button type="button" class="btn btn-secondary" @click="cancel()">Cancel</button>
                    </div>
                  </div>
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TextBox from "@/components/core/TextBox";
import TextArea from "@/components/core/TextArea";
import NumberField from "@/components/core/NumberField";
import ImageUpload from "@/components/core/ImageUpload";
import Select from "@/components/core/Select";
import CheckBoxGroup from "@/components/core/CheckBoxGroup";
import RowControls from "@/components/core/RowControls";
import ProductVariation from "@/components/derived/ProductVariation";
import Toggle from "@/components/core/Toggle";

export default {
  name: "Seller-Product-Edit",
  components: {
    TextBox,
    NumberField,
    TextArea,
    ImageUpload,
    Select,
    CheckBoxGroup,
    RowControls,
    ProductVariation,
    Toggle
  },
  data() {
    return {
      breadcrumbLinks: [
        {
          title: "Dashboard",
          isActive: false,
          pathName: "Seller-Dashboard"
        },
        {
          title: "Products",
          isActive: false,
          pathName: "Seller-Product-List"
        },
        {
          title: this.$route.params.id,
          isActive: true,
          pathName: "Seller-Product-Detail"
        },
        {
          title: "Edit",
          isActive: false,
          pathName: "Seller-Product-Edit"
        }
      ],

      productEditForm: null,

      boxSizeOptions: [
        { name: "Large", value: 1 },
        { name: "Small", value: 2 },
        { name: "Custom", value: 0 }
      ],
      productHasVariations: false,
      productHasBundles: true,

      bundlePriceConfig: {
        items: {
          amount: {
            type: "select",
            rules: "required",
            id: "bundle-amount",
            placeholder: "Amount",
            options: [
              { name: "One", value: 1 },
              { name: "Two", value: 2 },
              { name: "Three", value: 3 }
            ]
          },

          price: {
            type: "number",
            id: "bundle-price",
            rules: "required",
            placeholder: "Price"
          }
        },
        numInstances: 1,
        hasControls: true
      }
    };
  },

  created() {
    this.fetchProduct();
  },

  methods: {
    handleFormSubmit() {},

    cancel() {
      this.$router.push({ name: "Seller-Product-List" });
    },

    fetchProduct() {
      this.$store.dispatch("seller/fetchProductDetail", {
        id: this.$route.params.id,
        callback: data => {
          console.log(data);
          this.productEditForm = data;
          if (data.variations && data.variations.length)
            this.productHasVariations = true;
          if (data.bundlePrices && data.bundlePrices.length)
            this.productHasBundles = true;
        }
      });

      // this.productEditForm = {
      //   itemCode: "123213",
      //   description: "descriptio ksdfa fas d as",
      //   stock: "asda",
      //   cost: 12312,
      //   salePrice: 234,
      //   weightApprox: 345.456,
      //   image: "asdasd",
      //   boxSize: 1,
      //   customBoxSize: null,
      //   variations: [
      //     {
      //       name: "Size",
      //       options: [
      //         {
      //           name: "Large",
      //           price: 1000,
      //           stock: 23,
      //           SKU: "GH75OP"
      //         },
      //         {
      //           name: "Md",
      //           price: 800,
      //           stock: 12,
      //           SKU: "GH75OP"
      //         }
      //       ]
      //     },
      //     {
      //       name: "Color",
      //       options: [
      //         {
      //           name: "Dark",
      //           price: 890,
      //           stock: 5,
      //           SKU: "YR93O"
      //         },
      //         {
      //           name: "Light",
      //           price: 500,
      //           stock: 53,
      //           SKU: "YR93O"
      //         }
      //       ]
      //     }
      //   ],
      //   dealPrices: [
      //     {
      //       key: 1,
      //       val: 100
      //     },
      //     {
      //       key: 2,
      //       val: 150
      //     },
      //     {
      //       key: 3,
      //       val: 200
      //     }
      //   ]
      // };
    }
  }
};
</script>

<style>
</style>
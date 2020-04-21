<template>
  <div>
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-md-6 col-sm-12">
            <h1 class="m-0 text-dark">
              <i class="nav-icon fal fa-arrow-circle-left mr-2 btn-back" @click="cancel()"></i>
              {{$t('products.create_label')}}
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
                      v-model="productCreateForm.sku"
                      rules="required"
                    />

                    <NumberField
                      id="cost"
                      label="Cost"
                      v-model.number="productCreateForm.cost"
                      rules="required"
                    />

                    <TextArea
                      id="description"
                      label="Description"
                      v-model="productCreateForm.description"
                      rules="required"
                      rows="5"
                    />
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <NumberField
                      id="sale-price"
                      label="Sale Price"
                      v-model.number="productCreateForm.salePrice"
                      rules="required"
                    />

                    <NumberField
                      id="weight-approx"
                      label="Weight Approx"
                      v-model.number="productCreateForm.weightApprox"
                      rules="required"
                    />

                    <div class="row">
                      <div class="col">
                        <NumberField
                          id="quantity"
                          label="Quantity"
                          placeholder="Product quantity"
                          rules="required"
                          v-model.number="productCreateForm.quantity"
                        />
                      </div>
                      <div class="col">
                        <ImageUpload label="Image" custom_class="ml-4" />
                      </div>
                    </div>

                    <div class="mt-4"></div>
                    <Toggle
                      id="has-bundles"
                      :value="false"
                      variant="primary"
                      v-model="productHasBundles"
                      :labels="{true: 'This product has bundle pricing', false: 'This product doesn\'t have bundle pricing' }"
                    />

                    <div v-if="productHasBundles">
                      <RowControls
                        :config="bundlePriceConfig"
                        v-model="productCreateForm.bundlePrices"
                      />
                    </div>
                  </div>
                </div>

                <!-- Product Variations -->
                <div class="row">
                  <div class="col-12">
                    <Toggle
                      id="has-variations"
                      :value="false"
                      variant="primary"
                      v-model="productHasVariations"
                      :labels="{true: 'This product has variations', false: 'This product doesn\'t have variation' }"
                    />
                    <div class="mb-2"></div>

                    <div v-if="productHasVariations">
                      <ProductVariation
                        color_scheme="primary"
                        :product="productCreateForm"
                        v-model="productCreateForm.variations"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <hr />
                    <div class="d-flex mt-4 justify-content-center">
                      <Button
                        id="btn-submit"
                        type="submit"
                        variant="primary"
                        custom_class="mr-4"
                        size="lg"
                        :disabled="invalid"
                        :loading="loading"
                      >Submit</Button>

                      <Button
                        id="btn-cancel"
                        type="button"
                        variant="secondary"
                        custom_class="mr-4"
                        size="lg"
                        @click="cancel()"
                      >Cancel</Button>
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
import Button from "@/components/core/Button";
import Toggle from "@/components/core/Toggle";
import TextArea from "@/components/core/TextArea";
import NumberField from "@/components/core/NumberField";
import ImageUpload from "@/components/core/ImageUpload";
import Select from "@/components/core/Select";
import CheckBoxGroup from "@/components/core/CheckBoxGroup";
import RowControls from "@/components/core/RowControls";
import ProductVariation from "@/components/derived/ProductVariation";

export default {
  name: "Seller-Product-Create",
  components: {
    TextBox,
    NumberField,
    TextArea,
    ImageUpload,
    Select,
    CheckBoxGroup,
    RowControls,
    ProductVariation,
    Toggle,
    Button
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
          title: "New Product",
          isActive: true,
          pathName: "Seller-Product-Create"
        }
      ],

      loading: false,
      productCreateForm: {
        sku: null,
        description: null,
        stock: null,
        cost: null,
        salePrice: null,
        weightApprox: null,
        image: null,
        variations: null,
        bundlePrices: null,
        quantity: null
      },

      boxSizeOptions: [
        { name: "Large", value: 1 },
        { name: "Small", value: 2 },
        { name: "Custom", value: 0 }
      ],
      productHasVariations: false,
      productHasBundles: false,

      bundlePriceConfig: {
        items: {
          amount: {
            type: "number",
            rules: "required",
            id: "bundle-amount",
            placeholder: "Amount"
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

  methods: {
    handleFormSubmit() {
      this.loading = true;
      let data = {
        ...this.productCreateForm,
        stock: {
          total: this.productCreateForm.quantity,
          remaining: this.productCreateForm.quantity
        },
        available: "Yes"
      };
      this.$store.dispatch("seller/createProduct", {
        product: data,
        callback: data => {
          this.loading = false;
          this.$router.push({ name: "Seller-Product-List" });
        }
      });
    },

    cancel() {
      if (
        confirm("Are you sure you want to cancel ? All the data will be lost.")
      ) {
        this.$router.push({ name: "Seller-Product-List" });
      }
    }
  }
};
</script>

<style>
</style>
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

    <section class="content d-flex justify-content-center">
      <div class="container-fluid ">
        <div class="product-create card">
           <ValidationObserver v-slot="{ invalid }">
          <form >
            <div class="container">
              <!--Step 1 Product details Part 1-->
              <div class="product-details" v-if="step == 1">
                <Stepper :steps="3" :currentStepIndex="1" variant="primary" />
                <p class="auth-box-body__msg">Add product details</p>
                <div>
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

                  <NumberField
                    id="quantity"
                    label="Quantity"
                    placeholder="Product quantity"
                    rules="required"
                    v-model.number="productCreateForm.quantity"
                  />
                </div>

                <div class="auth-box__cta-wrapper d-flex justify-content-center">
                  <Button
                    id="details-form-button"
                    variant="info"
                    type="button"
                    size="md"
                    :disabled="invalid"
                    @click="step=2"
                  >Add more details</Button>
                </div>
                <div class="mb-4"></div>
              </div>

              <!--Step 2 Product details Part 2-->
              <div class="additional-product-details" v-if="step==2">
                <Stepper :steps="3" :currentStepIndex="2" variant="primary" />
                <p class="auth-box-body__msg">Add additional product details</p>
                <div>
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

                  <ImageUpload label="Image" />

                  <div class="mt-4"></div>
                  <Toggle
                    id="has-bundles"
                    :value="false"
                    variant="primary"
                    v-model="productHasBundles"
                    :labels="{true: 'This product has bundle pricing', false: 'This product doesn\'t have bundle pricing' }"
                  />
                  <div class="mt-4"></div>
                  <div v-if="productHasBundles">
                    <RowControls
                      :config="bundlePriceConfig"
                      v-model="productCreateForm.bundlePrices"
                    />
                  </div>
                </div>
                <div class="auth-box__cta-wrapper d-flex justify-content-center">
                  <Button
                    id="additional-detail-form-button"
                    type="button"
                    variant="info"
                    size="md"
                    :disabled="invalid"
                    @click="step=3"
                  >Add Product Variation</Button>
                </div>
                <div class="mb-4"></div>
              </div>

              <!--Step 3 -->
              <div class="product-variations" v-if="step==3">
                <Stepper :steps="3" :currentStepIndex="3" variant="primary" />
                <p class="auth-box-body__msg">What about product variations?</p>
                <div>
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
                <div class="auth-box__cta-wrapper d-flex justify-content-center">
                  <Button
                    id="btn-submit"
                    type="submit"
                    variant="info"
                    custom_class="mr-4"
                    size="md"
                   :disabled="invalid"
                   @click="handleFormSubmit"
                  >Create Product</Button>
                </div>
                <div class="mb-4"></div>
              </div>
            </div>
          </form>
           </ValidationObserver>
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
import Stepper from "@/components/core/Stepper";
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
    Button,
    Stepper
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
      step: 1,
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
      this.$store.dispatch("products/createProduct", {
        product: data,
        callback: data => {
          this.loading = false;
          console.log(data);
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
.product-create{
  max-width: 700px;
  margin: 0 auto;
}
</style>
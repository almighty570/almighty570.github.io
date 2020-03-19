<template>
  <div>
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">
              <i class="nav-icon fal fa-box-full mr-2"></i>
              Add New Product
            </h1>
          </div>
          <div class="col-sm-6">
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
                  <div class="col">
                    <TextBox
                      type="text"
                      id="item-code"
                      label="Item Code"
                      v-model="productCreateForm.itemCode"
                      rules="required"
                    />

                    <TextArea
                      id="description"
                      label="Description"
                      v-model="productCreateForm.description"
                      rules="required"
                      rows="4"
                    />

                    <NumberField
                      id="cost"
                      label="Cost"
                      v-model="productCreateForm.cost"
                      rules="required"
                    />
                  </div>
                  <div class="col">
                    <NumberField
                      id="sale-price"
                      label="Sale Price"
                      v-model="productCreateForm.salePrice"
                      rules="required"
                    />

                    <NumberField
                      id="weight-approx"
                      label="Weight Approx"
                      v-model="productCreateForm.weightApprox"
                      rules="required"
                    />

                    <ImageUpload label="Image" />

                    <div class="d-flex mt-4">
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

export default {
  name: "Seller-Product-Create",
  components: { TextBox, NumberField, TextArea, ImageUpload },
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

      productCreateForm: {
        itemCode: null,
        description: null,
        stock: null,
        cost: null,
        salePrice: null,
        weightApprox: null,
        image: null
      }
    };
  },

  methods: {
    handleFormSubmit() {},

    cancel() {
      this.$router.push({ name: "Seller-Product-List" });
    }
  }
};
</script>

<style>
</style>
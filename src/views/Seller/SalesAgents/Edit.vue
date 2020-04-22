<template>
  <div>
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-md-6 col-sm-12">
            <h1 class="m-0 text-dark">
              <i class="nav-icon fal fa-arrow-circle-left mr-2 btn-back" @click="cancel()"></i>
              Edit Sales Agent
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
            <div v-if="salesAgentEditForm">
              <ValidationObserver v-slot="{ invalid }">
                <form @submit.prevent="handleFormSubmit">
                  <!-- Name & Email -->
                  <div class="row">
                    <div class="col-md-6 col-sm-12">
                      <TextBox
                        type="text"
                        id="name"
                        label="Name"
                        v-model="salesAgentEditForm.name"
                        rules="required"
                      />
                    </div>
                    <div class="col-md-6 col-sm-12">
                      <TextBox
                        type="email"
                        id="email"
                        label="Email"
                        v-model="salesAgentEditForm.email"
                        rules="required"
                      />
                    </div>
                  </div>

                  <!-- Phone Line Id -->
                  <div class="row">
                    <div class="col-md-6 col-sm-12">
                      <NumberField
                        id="phone-no"
                        label="Phone No."
                        v-model="salesAgentEditForm.phoneNo"
                        rules="required"
                      />
                    </div>
                    <div class="col-md-6 col-sm-12">
                      <TextBox
                        type="text"
                        id="line-id"
                        label="Line ID"
                        v-model="salesAgentEditForm.lineId"
                        rules="required"
                      />
                    </div>
                  </div>

                  <!-- Id Card & Address -->
                  <div class="row">
                    <div class="col-md-6 col-sm-12">
                      <FileUpload name="id_card" label="Id Card" />
                    </div>
                    <div class="col-md-6 col-sm-12">
                      <TextBox
                        type="text"
                        id="address"
                        label="Address"
                        v-model="salesAgentEditForm.address"
                        rules="required"
                      />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col">
                      <CheckBoxGroup
                        label="Permissions"
                        :options="permissionOptions"
                        id="permission"
                        name="permission"
                        :value="salesAgentEditForm.permissions"
                        v-model="salesAgentEditForm.permissions"
                      />
                    </div>
                  </div>
                  <!-- Submit & Cancel Buttons -->
                  <div class="row">
                    <div class="col text-center">
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
                          size="lg"
                          @click="cancel()"
                        >Cancel</Button>
                      </div>
                    </div>
                  </div>
                </form>
              </ValidationObserver>
            </div>
            <div v-else>
              <Spinner size="lg" variation="info" />
            </div>
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
import FileUpload from "@/components/core/FileUpload";
import Select from "@/components/core/Select";
import CheckBoxGroup from "@/components/core/CheckBoxGroup";
import RowControls from "@/components/core/RowControls";
import ProductVariation from "@/components/derived/ProductVariation";
import Spinner from "@/components/core/Spinner";

export default {
  name: "Seller-Product-Create",
  components: {
    TextBox,
    NumberField,
    TextArea,
    FileUpload,
    Select,
    CheckBoxGroup,
    RowControls,
    ProductVariation,
    Toggle,
    Spinner,
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
          title: "Sales Agents",
          isActive: false,
          pathName: "Seller-Sales-Agents"
        },
        {
          title: "New Sales Agent",
          isActive: true,
          pathName: "Seller-Sales-Agent-Create"
        }
      ],

      salesAgentEditForm: null,
      loading: false,

      permissionOptions: [
        { name: "Manage only products", value: 0 },
        { name: "Manage only orders", value: 1 },
        { name: "Manage both orders & products", value: 2 }
      ]
    };
  },

  created() {
    this.fetchSalesAgentData();
  },

  methods: {
    handleFormSubmit() {
      // console.log("YOLO");
      this.loading = true;
      let data = {
        ...this.salesAgentEditForm
      };
      this.$store.dispatch("seller/updateSalesAgent", {
        salesAgent: data,
        callback: data => {
          this.loading = false;
          this.$router.push({ name: "Seller-Sales-Agent-List" });
        }
      });
    },
    cancel() {
      this.$router.push({ name: "Seller-Sales-Agent-List" });
    },
    fetchSalesAgentData() {
      this.$store.dispatch("seller/fetchSalesAgentDetail", {
        id: this.$route.params.id,
        callback: data => {
          this.salesAgentEditForm = data;
        }
      });
    }
  }
};
</script>

<style>
</style>
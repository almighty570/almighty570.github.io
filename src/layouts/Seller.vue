<template>
  <div class="wrapper">
    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#">
            <i class="fas fa-bars"></i>
          </a>
        </li>
      </ul>

      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <button
            type="button"
            class="nav-link btn btn-default text-success"
            data-toggle="modal"
            data-target="#addBalanceModal"
          >
            <i class="fal fa-wallet"></i>
            THB 12435.56
            (Add)
          </button>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="fal fa-sign-out-alt"></i> Sign Out
          </a>
        </li>
      </ul>
    </nav>
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <a href="index3.html" class="brand-link">
        <img src="@/assets/logo.png" alt="AdminLTE Logo" class="brand-image" style="opacity: .8" />
        <span class="brand-text font-weight-bold">Proship</span>
      </a>

      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image mr-2">
            <img src="@/assets/seller.png" class="img-circle elevation-2" alt="User Image" />
          </div>
          <div class="info">
            <a href="#" class="d-block">Seller Panel</a>
          </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li class="nav-item" v-for="(menuItem, index) in menus" :key="index">
              <router-link
                :to="{name: menuItem.pathName[0]}"
                class="nav-link"
                :class="{'active': menuItem.pathName.includes(currentRoute)}"
              >
                <i class="nav-icon" :class="menuItem.icon"></i>
                <p>{{menuItem.title}}</p>
              </router-link>
            </li>
          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper pb-1">
      <slot></slot>
    </div>
    <!-- /.content-wrapper -->

    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Control sidebar content goes here -->
    </aside>
    <!-- /.control-sidebar -->

    <!-- Main Footer -->
    <footer class="main-footer">
      <strong>Proship</strong>
      <div class="float-right d-none d-sm-inline-block">
        <b>Version</b> 1.0.0
      </div>
    </footer>

    <Modal id="addBalanceModal">
      <template slot="header">
        <h5 class="modal-title" id="addBalanceModalLabel">
          <i class="fal fa-wallet mr-2"></i>Add Balance
        </h5>
      </template>

      <template slot="body">
        <p
          class="lead"
        >Please add balance by transferring funds to our bank account. Fill up the details as follows:</p>

        <ValidationObserver v-slot="{ invalid }">
          <form @submit.prevent="handleBalanceAddSubmit">
            <DatePicker label="Date" v-model="addBalanceForm.date" rules="required" />
            <TextBox
              type="text"
              id="time"
              label="Time"
              v-model="addBalanceForm.time"
              rules="required"
            />
            <NumberField
              id="amount"
              label="Amount"
              v-model.number="addBalanceForm.amount"
              rules="required"
            />

            <FileUpload
              :max_size="5"
              upload_url="asdsad.com"
              name="asdas"
              label="Select file"
              v-model="addBalanceForm.files"
            />

            <hr />
            <div class="d-flex justify-content-end">
              <button type="button" class="btn btn-secondary btn-sm mr-2" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-success btn-sm" :disabled="invalid">Submit</button>
            </div>
          </form>
        </ValidationObserver>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/core/Modal";
import TextBox from "@/components/core/TextBox";
import NumberField from "@/components/core/NumberField";
import DatePicker from "@/components/core/DatePicker";
import FileUpload from "@/components/core/FileUpload";
import Swal from "sweetalert2";

export default {
  name: "Seller",
  components: { Modal, TextBox, DatePicker, NumberField, FileUpload },
  data() {
    return {
      currentRoute: null,
      addBalanceErrors: null,
      addBalanceForm: {
        date: null,
        time: null,
        amount: null,
        files: null
      },

      // pathname can contain multiple values
      // routed to the 1st one only
      menus: [
        {
          title: "Dashboard",
          icon: "fal fa-tachometer-fastest",
          pathName: ["Seller-Dashboard", "Seller-Home"]
        },

        {
          title: "Products",
          icon: "fal fa-box-full",
          pathName: [
            "Seller-Product-List",
            "Seller-Product-Create",
            "Seller-Product-Edit",
            "Seller-Product-Detail"
          ]
        },

        {
          title: "Orders",
          icon: "fal fa-dolly",
          pathName: [
            "Seller-Order-List",
            "Seller-Order-Detail",
            "Seller-Order-Create"
          ]
        },

        {
          title: "Sales Agents",
          icon: "fal fa-users",
          pathName: ["Seller-Sales-Agents-List"]
        },

        {
          title: "Reports",
          icon: "fal fa-chart-line",
          pathName: ["Seller-Reports"]
        },

        {
          title: "Settings",
          icon: "fal fa-cogs",
          pathName: ["Seller-Settings"]
        }
      ]
    };
  },

  created() {
    this.setCurrentRoute(this.$route);
  },

  methods: {
    setCurrentRoute(route) {
      this.currentRoute = route.name;
    },

    handleBalanceAddSubmit() {
      // Make API Call here
      Swal.fire(
        "",
        "Once our team verifies your transaction, your account will be updated.",
        "success"
      ).then(() => {
        $("#addBalanceModal").modal("hide");
      });
    },

    validateAddBalanceForm() {
      // setup error object
      this.addBalanceErrors = {};
      Object.keys(this.addBalanceForm).forEach(fieldName => {
        this.addBalanceErrors[fieldName] = [];
      });
      let hasError = false;

      if (!this.addBalanceForm.date) {
        this.addBalanceErrors.date.push("Invalid date");
        hasError = true;
      }
      if (!this.addBalanceForm.time) {
        this.addBalanceErrors.time.push("Invalid time");
        hasError = true;
      }
      if (!this.addBalanceForm.amount) {
        this.addBalanceErrors.amount.push("Invalid amount");
        hasError = true;
      }
      if (!(this.addBalanceForm.files && this.addBalanceForm.files.length)) {
        this.addBalanceErrors.files.push("Invalid file");
        hasError = true;
      }
      return hasError;
    }
  },

  watch: {
    $route(to, from) {
      this.setCurrentRoute(to);
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-icon {
  margin-right: 1.5rem !important;
}
</style>
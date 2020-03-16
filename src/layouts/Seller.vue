<template>
  <div>
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
    </nav>
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img src="@/assets/seller.png" class="img-circle elevation-2" alt="User Image" />
          </div>
          <div class="info">
            <a href="#" class="d-block">Seller</a>
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
                :to="{name: menuItem.pathName}"
                class="nav-link"
                :class="{'active': currentRoute === menuItem.pathName}"
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
    <div class="content-wrapper">
      <slot></slot>
    </div>
    <!-- /.content-wrapper -->

    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Control sidebar content goes here -->
    </aside>
    <!-- /.control-sidebar -->

    <!-- Main Footer -->
    <!-- <footer class="main-footer">
      <strong>
        Copyright &copy; 2014-2019
        <a href="http://adminlte.io">AdminLTE.io</a>.
      </strong>
      All rights reserved.
      <div class="float-right d-none d-sm-inline-block">
        <b>Version</b> 3.0.0
      </div>
    </footer>-->
    <div id="sidebar-overlay"></div>
  </div>
</template>

<script>
export default {
  name: "Seller",
  data() {
    return {
      currentRoute: null,
      menus: [
        {
          title: "Dashboard",
          icon: "fal fa-tachometer-fastest",
          pathName: "Seller-Dashboard"
        },

        {
          title: "Products",
          icon: "fal fa-box-full",
          pathName: "Seller-Product-List"
        },

        {
          title: "Orders",
          icon: "fal fa-dolly",
          pathName: "Order-Product-List"
        },

        {
          title: "Sales Agents",
          icon: "fal fa-users",
          pathName: "Seller-Sales-Agents-List"
        },

        {
          title: "Settings",
          icon: "fal fa-cogs",
          pathName: "Seller-Settings"
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
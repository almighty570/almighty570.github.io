<template>
  <div>
    <div class="content-header">
      <div class="container-fluid">
        <h1 class="text-dark">Settings</h1>
      </div>
    </div>

    <div class="content">
      <div class="container-fluid">
        <div class="tabs">
          <Tabs :tabs="tabs" custom_class="is-info" @tabSelected="handleTabSelected" />
        </div>

        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from "@/components/core/Tabs";

export default {
  name: "Settings",
  components: { Tabs },
  data() {
    return {
      showInventory: false,
      tabs: [
        { label: "Shops", pathName: "Seller-Settings-Shops" },
        { label: "Payment", pathName: "Seller-Settings-Payment" },
        { label: "Shipping", pathName: "Seller-Settings-Shipping" },
        { label: "Account", pathName: "Seller-Settings-Account" },
        { label: "Sales Agents", pathName: "Seller-Settings-Sales-Agents" }

      ]
    };
  },

  methods: {
    handleTabSelected(tab) {
        this.$router.push({name: tab.pathName})
    }
  }
};
</script>

<style lang="scss" scoped>
.setting__header {
  font-weight: bold;
  font-size: 18px;
}
.setting__description {
  font-weight: thin;
  font-size: 13px;
}

.setting {
  &.--inline {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &.--table {
    .setting__text {
      margin-bottom: 20px;
    }
  }

  margin-bottom: 30px;
}

.settings-wrapper {
  margin-top: 24px;
}

.setting-status-tag {
  text-transform: uppercase;

  font-weight: bold;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 2px;
  text-align: center;
  width: 68px;
  height: 29px;

  &.--warning {
    background-color: #ffc107;
    color: black;
  }

  &.--success {
    background-color: #28a745;
    color: white;
  }

  &.--danger {
    background-color: #dc3545;
    color: white;
  }

  &.--info {
    background-color: #007bff;
    color: white;
  }
}
</style>
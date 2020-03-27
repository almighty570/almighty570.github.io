<template>
  <div>
    <div class="content-header">
      <div class="container">
        <h1 class="text-dark">Settings</h1>
      </div>
    </div>

    <div class="content">
      <div class="container">
        <div class="tabs">
          <Tabs
            :tabs="[
        { label: 'General'},
        { label: 'Balance'},
      ]"
            custom_class="is-primary"
          />
        </div>
        <div class="settings-wrapper">
          <div class="setting --inline">
            <div class="setting__text">
              <div class="setting__header">Inventory Management Feature</div>
              <div class="setting__description">Activate or Deactivate Inventory Managment Feature</div>
            </div>
            <div class="setting__toggle">
              <Toggle
                id="inventory-toggle"
                :value="false"
                color="blue"
                v-model="showInventory"
                :labels="{true: 'This product has bundle pricing', false: 'This product doesn\'t have bundle pricing' }"
              />
            </div>
          </div>
          <div class="setting --table">
            <div class="setting__text">
              <div class="setting__header">Balance History</div>
            </div>
            <div class="setting_body">
              <ListTable
                id="products-list"
                :columns="productColumns"
                :rows="productData"
                create_path_name="Seller-Product-Create"
                edit_path_name="Seller-Product-Edit"
                detail_path_name="Seller-Product-Detail"
                color_scheme="primary"
                sample_file_link="#"
              />
            </div>
          </div>
          <div class="setting --inline">
            <div class="setting__text">
              <div class="setting__header">Balance Status</div>
              <div class="setting__description">Balance Payment Status for your account</div>
            </div>
            <div class="setting__toggle">
              <div class="setting-status-tag --danger">Pending</div>
            </div>
          </div>
          <div class="setting --inline">
            <div class="setting__text">
              <div class="setting__header">Balance Status</div>
              <div class="setting__description">Balance Payment Status for your account</div>
            </div>
            <div class="setting__toggle">
              <div class="setting-status-tag --success">Active</div>
            </div>
          </div>
          <div class="setting --inline">
            <div class="setting__text">
              <div class="setting__header">Balance Information</div>
              <div class="setting__description">Your current balance status.</div>
            </div>
            <div class="setting__toggle">
              <div class="setting-status-tag --danger">Poor</div>
            </div>
          </div>
          <div class="setting --inline">
            <div class="setting__text">
              <div class="setting__header">Balance Information</div>
              <div class="setting__description">Your current balance status.</div>
            </div>
            <div class="setting__toggle">
              <div class="setting-status-tag --warning">Average</div>
            </div>
          </div>
          <div class="setting --inline">
            <div class="setting__text">
              <div class="setting__header">Balance Information</div>
              <div class="setting__description">Your current balance status.</div>
            </div>
            <div class="setting__toggle">
              <div class="setting-status-tag --success">Good</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Toggle from "@/components/core/Toggle";
import Tabs from "@/components/core/Tabs";
import ListTable from "@/components/derived/ListTable";

export default {
  name: "Settings",
  components: {
    Toggle,
    Tabs,
    ListTable
  },
  data() {
    return {
      showInventory: false,
      productColumns: [
        {
          name: "item_code",
          title: "Item Code",
          sortField: "item_code"
        },

        {
          name: "product_code",
          title: "Product Code",
          sortField: "product_code"
        },

        {
          name: "description",
          title: "Description",
          sortField: "description"
        },

        {
          name: "available",
          title: "Available",
          sortField: "available",
          formatter(value) {
            let status = {
              Yes: "success",
              No: "warning"
            }[value];
            return `<span class="status text-${status}"> <i class="fas fa-circle mr-1"></i> ${value} </span>`;
          }
        },

        {
          name: "order",
          title: "Order",
          sortField: "order"
        },

        {
          name: "stock",
          title: "Stock",
          sortField: "stock"
        },
        "actions"
      ],
      productData: [
        {
          id: 1,
          item_code: "I-45424",
          product_code: "P-45424",
          description: "Short description 1...",
          available: "No",
          order: "O-2342",
          stock: "some stock 1"
        },

        {
          id: 2,
          item_code: "I-123534",
          product_code: "P-0234",
          description: "Short description 2...",
          available: "Yes",
          order: "O-98934",
          stock: "some stock 2"
        },

        {
          id: 3,
          item_code: "I-123534",
          product_code: "P-0234",
          description: "Short description 2...",
          available: "Yes",
          order: "O-98934",
          stock: "some stock 2"
        },

        {
          id: 4,
          item_code: "I-123534",
          product_code: "P-0234",
          description: "Short description 2...",
          available: "Yes",
          order: "O-98934",
          stock: "some stock 2"
        },

        {
          id: 5,
          item_code: "I-123534",
          product_code: "P-0234",
          description: "Short description 2...",
          available: "Yes",
          order: "O-98934",
          stock: "some stock 2"
        },

        {
          id: 6,
          item_code: "I-123534",
          product_code: "P-0234",
          description: "Short description 2...",
          available: "Yes",
          order: "O-98934",
          stock: "some stock 2"
        }
      ]
    };
  },

  methods: {}
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
    background-color: #DC3545;
    color: white;
  }

  &.--info {
    background-color: #007BFF;
    color: white;
  }
}
</style>
<template>
  <div>
    <div class="content-header">
      <div class="container">
        <h1 class="text-dark">{{$t('settings.label')}}</h1>
      </div>
    </div>

    <div class="content">
      <div class="container">
        <div class="tabs">
          <Tabs
            :tabs="[
            { label: 'Shops'},
            { label: 'Payment'},
            {label:'Shipping'},
            {label:'Account Settings'}
            ]"
            custom_class="is-primary"
          />
        </div>
        <div class="settings-wrapper">
          <div class="setting --inline">
            <div class="setting__text">
              <div class="setting__header">{{$t('settings.feature.inventory')}}</div>
              <div class="setting__description">{{$t('settings.feature.activate_deactivate')}}</div>
            </div>
            <div class="setting__toggle">
              <Toggle
                id="inventory-toggle"
                :value="false"
                color="blue"
                v-model="showInventory"
                :show_label="false"
                :labels="{true: 'This product has bundle pricing', false: 'This product doesn\'t have bundle pricing' }"
              />
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
          name: "sn",
          title: "#",
          sortField: "sn"
        },

        {
          name: "amount",
          title: "Amount",
          sortField: "amount"
        },

        {
          name: "created_at",
          title: "Date Added",
          sortField: "created_at"
        },

        {
          name: "status",
          title: "Status",
          sortField: "status",
          formatter(value) {
            let status = {
              Pending: "warning",
              Active: "success",
              Spent: "danger"
            }[value];
            return `<div class="setting-status-tag --${status}">${value}</div>`;
          }
        }
      ],
      productData: [
        {
          sn: 1,
          amount: "123 THB",
          created_at: "2020-03-12",
          status: "Pending"
        },

        {
          sn: 2,
          amount: "343 THB",
          created_at: "2020-03-16",
          status: "Active"
        },

        {
          sn: 3,
          amount: "1000 THB",
          created_at: "2020-02-11",
          status: "Spent"
        },

        {
          sn: 4,
          amount: "1123 THB",
          created_at: "2019-03-12",
          status: "Spent"
        },

        {
          sn: 5,
          amount: "890 THB",
          created_at: "2020-03-12",
          status: "Spent"
        },

        {
          sn: 6,
          amount: "567 THB",
          created_at: "2020-03-12",
          status: "Spent"
        },

        {
          sn: 7,
          amount: "345345 THB",
          created_at: "2020-03-12",
          status: "Active"
        },

        {
          sn: 8,
          amount: "123423 THB",
          created_at: "2020-03-12",
          status: "Pending"
        },

        {
          sn: 9,
          amount: "123 THB",
          created_at: "2020-03-12",
          status: "Active"
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
    background-color: #dc3545;
    color: white;
  }

  &.--info {
    background-color: #007bff;
    color: white;
  }
}
</style>
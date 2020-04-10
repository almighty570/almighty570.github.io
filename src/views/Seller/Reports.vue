<template>
  <div>
    <div class="content-header">
      <div class="container-fluid">
        <h1 class="text-dark">Reports</h1>
      </div>
    </div>

    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <CardWidget id="balance-history" class="card card-success" card_widget_type="collapse">
              <div slot="title">Balance History</div>
              <div slot="body">
                <DataTable
                  id="balance-history"
                  :columns="balanceInfo.columns"
                  :rows="balanceInfo.data"
                  :per_page="5"
                  searchable
                  :search_fields="['amount', 'status', 'created_at']"
                />
              </div>
            </CardWidget>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataTable from "@/components/core/DataTable";
import CardWidget from "@/components/core/CardWidget";

export default {
  name: "Reports",
  components: { DataTable, CardWidget },
  data() {
    return {
      balanceInfo: {
        columns: [
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
        data: [
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
      }
    };
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
</style>
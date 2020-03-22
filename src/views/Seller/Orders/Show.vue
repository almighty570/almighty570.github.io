<template>
  <div>
    <div class="content-header">
      <div class="container">
        <h1 class="text-dark">View Order</h1>
      </div>
    </div>
    <div class="content-body">
      <div class="container">
        <CardWidget id="test-card-widget" class="card-success" card_widget_type="collapse">
          <div slot="title">Order Details</div>
          <div slot="body">
            <div class="row">
              <div class="col-md-6">
                <TableLeft
                  :values="[{'Order Code': '2030-061-00006'},{'Customer Name':'Jacob'},{'Address':'123 Main Street, New York, NY 10030 is an example of an address.'}
                  ,{'Address': 'Thailand'},{'District':'Some District'},{'Province':'Soe Province'}]"
                />
              </div>
              <div class="col-md-6">
                <TableLeft
                  :values="[{'Order Code': '2030-061-00006'},{'Customer Name':'Jacob'},{'Address':'123 Main Street, New York, NY 10030 is an example of an address.'}
                  ,{'Address': 'Thailand'},{'District':'Some District'},{'Province':'Soe Province'}]"
                />
              </div>
            </div>
          </div>
        </CardWidget>
        <CardWidget id="order-items-card" class="card-info" card_widget_type="collapse">
          <div slot="title">Order item(s)</div>
          <div slot="body">
            <Table
              id="order-items-table"
              :values="[{'No':'1','ItemNumber':'008-asd','SakochanCode':'SO-se324','ItemName':'stf asd ','Quantity':'1'},{'No':'2','ItemNumber':'007-and','SakochanCode':'SO-de324','ItemName':'stf asd asdf','Quantity':'2'}]"
            ></Table>
          </div>
        </CardWidget>
        <CardWidget id="order-history-card" class="card-warning" card_widget_type="collapse">
          <div slot="title">Order history</div>
          <div slot="body">
            <Table
              id="order-history-table"
              :values="[{'No':'1','ItemNumber':'008-asd','SakochanCode':'SO-se324','ItemName':'stf asd ','Quantity':'1'},{'No':'2','ItemNumber':'007-and','SakochanCode':'SO-de324','ItemName':'stf asd asdf','Quantity':'2'}]"
            ></Table>
          </div>
        </CardWidget>
      </div>
    </div>
  </div>
</template>

<script>
import CardWidget from "@/components/core/CardWidget.vue";
import Table from "@/components/core/Table.vue";
import TableLeft from "@/components/core/TableLeft.vue";

export default {
  name: "Dashbaord",
  components: {
    CardWidget,
    Table,
    TableLeft
  }
};
</script>

<style>
</style>
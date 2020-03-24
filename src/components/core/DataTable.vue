<template>
  <div>
    <vuetable
      ref="datatable"
      :api-mode="false"
      :fields="columns"
      :per-page="per_page"
      :data-manager="dataManager"
      :css="cssConfig.table"
      pagination-path="pagination"
      @vuetable:pagination-data="onPaginationData"
    >
      <div slot="actions" slot-scope="props">
        <slot name="actions" v-bind:props="props"></slot>
      </div>
    </vuetable>

    <div style="padding-top:10px">
      <vuetable-pagination
        :css="cssConfig.pagination"
        ref="pagination"
        @vuetable-pagination:change-page="onChangePage"
      ></vuetable-pagination>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import Vuetable from "vuetable-2";
import VuetablePagination from "vuetable-2/src/components/VuetablePagination";

export default {
  name: "DataTable",
  components: { Vuetable, VuetablePagination },
  props: {
    id: {
      type: String,
      required: true
    },

    columns: {
      type: Array,
      required: true
    },

    rows: {
      type: Array,
      required: true
    },

    custom_class: {
      type: String
    },

    responsive: {
      type: Boolean
    },

    per_page: {
      type: Number
    }
  },

  data() {
    return {
      cssConfig: {
        table: {
          tableWrapper: "table-responsive",
          tableHeaderClass: "mb-0",
          tableBodyClass: "mb-0",
          tableClass: "_datatable table table-hover table-bordered",
          loadingClass: "loading",
          ascendingIcon: "fal fa-sort-size-up-alt",
          descendingIcon: "fal fa-sort-size-down-alt",
          ascendingClass: "sorted-asc",
          descendingClass: "sorted-desc",
          sortableIcon: "fal fa-sort",
          detailRowClass: "vuetable-detail-row",
          handleIcon: "fa fa-bars text-secondary",
          renderIcon(classes, options) {
            return `<i class="ml-1 ${classes.join(" ")}"></span>`;
          }
        },
        pagination: {
          wrapperClass: "pagination d-flex justify-content-center",
          activeClass: "active",
          disabledClass: "disabled",
          pageClass: "page-item",
          linkClass: "page-link",
          paginationClass: "pagination",
          paginationInfoClass: "float-left",
          dropdownClass: "form-control",
          icons: {
            first: "fal fa-chevron-double-left",
            prev: "fal fa-chevron-left",
            next: "fal fa-chevron-right",
            last: "fal fa-chevron-double-right"
          }
        }
      }
    };
  },

  methods: {
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
    },
    onChangePage(page) {
      this.$refs.datatable.changePage(page);
    },
    dataManager(sortOrder, pagination) {
      if (this.rows.length < 1) return;
      let local = this.rows;

      // sortOrder can be empty, so we have to check for that as well
      if (sortOrder.length > 0) {
        local = _.orderBy(
          local,
          sortOrder[0].sortField,
          sortOrder[0].direction
        );
      }

      pagination = this.$refs.datatable.makePagination(
        local.length,
        this.per_page
      );

      let from = pagination.from - 1;
      let to = from + this.per_page;

      return {
        pagination: pagination,
        data: _.slice(local, from, to)
        // data: this.rows
      };
    },

    onActionClicked(action, data) {
      console.log("slot actions: on-click", data.name);
    }
  }
};
</script>

<style scoped lang="scss">
</style>

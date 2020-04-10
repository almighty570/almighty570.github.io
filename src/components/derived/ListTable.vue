<template>
  <div>
    <div class="toolbar d-flex mb-2">
      <router-link :to="{name: create_path_name}" :class="buttonClass">
        <i class="fal fa-plus mr-2"></i>
        Add New
      </router-link>
      <button :class="buttonClass" data-toggle="modal" :data-target="'#' + modalId">
        <i class="fal fa-file-import mr-2"></i>
        Import
      </button>
      <button :class="buttonClass" @click="exportData()">
        <i class="fal fa-file-download mr-2"></i>
        Export
      </button>
    </div>

    <slot name="top"></slot>

    <DataTable
      :id="id"
      :columns="columns"
      :rows="rows"
      :per_page="5"
      responsive
      custom_class="table-sm"
    >
      <div slot="actions" slot-scope="props">
        <Button
          :variant="'outline-' + color_scheme"
          size="sm"
          custom_class="mr-1"
          id="btn-action-detail"
          @click="goto('Detail', props.props.rowData.id)"
        >
          <i class="fal fa-eye"></i>
        </Button>
        <Button
          :variant="'outline-' + color_scheme"
          size="sm"
          custom_class="mr-1"
          id="btn-action-edit"
          @click="goto('Edit', props.props.rowData.id)"
        >
          <i class="fal fa-pen"></i>
        </Button>
        <Button
          :variant="'outline-' + color_scheme"
          size="sm"
          id="btn-action-delete"
          @click="deleteItem(props.props.rowData.id)"
        >
          <i class="fal fa-trash-alt"></i>
        </Button>
      </div>
    </DataTable>

    <Modal :id="modalId">
      <template slot="header">
        <h5 class="modal-title">
          <i class="fal fa-file-import mr-2"></i>Import File
        </h5>
      </template>
      <template slot="body">
        <p class="lead text-center">Drop the file here to upload it to the system</p>
        <p class="text-center" v-if="sample_file_link">
          Please Make sure the format matches this
          <a :href="sample_file_link">sample file</a>
        </p>
        <vue-dropzone ref="importDropZone" id="import-dropzone" :options="importDropzoneOptions"></vue-dropzone>
      </template>
    </Modal>
  </div>
</template>

<script>
import DataTable from "@/components/core/DataTable";
import Modal from "@/components/core/Modal";
import Button from "@/components/core/Button";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import Swal from "sweetalert2";
import { Alert } from "@/helpers/alert";

export default {
  name: "ListTable",
  components: { DataTable, Modal, vueDropzone: vue2Dropzone, Button },
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
    create_path_name: {
      type: String
    },
    detail_path_name: {
      type: String
    },
    edit_path_name: {
      type: String
    },
    color_scheme: {
      type: String
    },
    sample_file_link: {
      type: String
    }
  },

  data() {
    return {
      importDropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { "My-Awesome-Header": "header value" }
      }
    };
  },

  methods: {
    exportData() {
      Swal.fire(
        "Export file",
        "File will download in a while",
        "info"
      ).then(() => {});
    },

    goto(type, id) {
      if (type === "Detail")
        this.$router.push({ name: this.detail_path_name, params: { id } });
      else if (type === "Edit")
        this.$router.push({ name: this.edit_path_name, params: { id } });
    },

    deleteItem(id) {
      Alert("Delete", "Are you sure you want to delete this item ?", null, () => {
        // Make Delete API call here
      });
    }
  },

  computed: {
    modalId() {
      return "import-" + this.id + "-modal";
    },

    buttonClass() {
      return `btn btn-sm btn-outline-${this.color_scheme} mr-2`;
    }
  }
};
</script>

<style>
</style>
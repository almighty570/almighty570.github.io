<template>
  <div>
    <div class="toolbar d-flex">
      <router-link :to="{name: create_path}" :class="buttonClass">
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

    <hr />
    <DataTable :id="id" :columns="columns" :rows="rows" responsive custom_class="table-sm" />

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
import ListTable from "@/components/derived/ListTable";
import Modal from "@/components/core/Modal";
import Button from "@/components/core/Button";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import Swal from "sweetalert2";

export default {
  name: "ListTable",
  components: { DataTable, Modal, vueDropzone: vue2Dropzone },
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
    create_path: {
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
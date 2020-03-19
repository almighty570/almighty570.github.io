<template>
  <div class="file-upload">
    <label v-if="label">{{label}}</label>
    <input type="file" @change="onFileSelected" ref="fileInput" multiple />

    <div class="input-group file-upload-handle" @click="$refs.fileInput.click()">
      <div class="form-control" :class="{'is-invalid': errors && errors.length}">
        <label>{{labelText}}</label>
      </div>
      <div class="input-group-append" :class="{'--danger': errors && errors.length}">
        <span class="input-group-text" >
          <i class="fal fa-upload"></i>
        </span>
      </div>
    </div>
    <div class="progress" v-if="uploadPercent > 0">
      <div
        class="progress-bar"
        role="progressbar"
        :style="'width:' + uploadPercent + '%'"
        :aria-valuenow="uploadPercent"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <template v-if="errors">
      <span class="text-danger text-sm" v-for="(error, index) in errors" :key="index">{{error}}</span>
    </template>
    <div class="mb-1"></div>
    <button
      v-if="instant_upload"
      class="btn btn-success btn-sm"
      @click="onUpload()"
      :disabled="!selectedFiles"
    >Upload</button>
  </div>
</template>

<script>
import { http } from "@/helpers/http";

export default {
  name: "FileUpload",
  props: {
    max_size: {
      type: Number
    },

    instant_upload: {
      type: Boolean
    },

    upload_url: {
      type: String
    },

    name: {
      type: String,
      required: true
    },

    label: {
      type: String
    },

    errors: {
      type: Array
    }
  },
  data() {
    return {
      selectedFiles: null,
      uploadPercent: 0,
      uploadLoading: false
    };
  },
  created() {},

  methods: {
    onFileSelected(event) {
      if (event.target.files.length) this.selectedFiles = event.target.files;
      Array.from(this.selectedFiles).forEach((selectedFile, index) => {
        if (
          this.max_size &&
          selectedFile.size / (1000 * 1024) > this.max_size
        ) {
          this.$toast.show(`Max file size(${this.max_size} MB) exceeded`);
          this.selectedFiles = null;
        }
      });
      this.$emit("input", Array.from(this.selectedFiles));
    },

    onUpload() {
      const fd = new FormData();
      Array.from(this.selectedFiles).forEach((selectedFile, index) => {
        fd.append(`${this.name}[${index}]`, selectedFile, selectedFile.name);
      });
      this.uploadLoading = true;
      http
        .post(this.upload_url, fd, {
          onUploadProgress: this.handleUploadProgress
        })
        .then(response => {
          this.$emit("fileUploaded", response.data);
          this.uploadPercent = 0;
          this.selectedFiles = null;
        });
    },

    handleUploadProgress(uploadEvent) {
      this.uploadPercent = Math.round(
        (uploadEvent.loaded / uploadEvent.total) * 100
      );
    }
  },

  computed: {
    labelText() {
      if (!this.selectedFiles) return "None";
      return this.selectedFiles.length > 1
        ? this.selectedFiles.length + " file(s) selected"
        : this.selectedFiles[0].name;
    }
  }
};
</script>

<style lang="scss" scoped>
input[type="file"] {
  display: none;
}

.file-upload-handle {
  cursor: pointer;
  color: #727272;
}

.progress {
  height: 2px;
}
</style>
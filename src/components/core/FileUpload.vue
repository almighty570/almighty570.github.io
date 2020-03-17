<template>
  <div class="file-upload">
    <input type="file" @change="onFileSelected" ref="fileInput" multiple />

    <div class="input-group file-upload-handle" @click="$refs.fileInput.click()">
      <div class="form-control">
        <label>{{selectedFiles && selectedFiles.length > 0 ? selectedFiles.length + " file(s) selected" : "None"}}</label>
      </div>
      <div class="input-group-append">
        <span class="input-group-text">
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
    <div class="mb-1"></div>
    <button class="btn btn-success btn-sm" @click="onUpload()" :disabled="!selectedFiles">Upload</button>
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
    upload_url: {
      type: String
    },
    name: {
      type: String,
      required: true
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
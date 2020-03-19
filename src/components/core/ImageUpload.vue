<template>
  <div>
    <label v-if="label">{{label}}</label>
    <!-- <br />
    <label class="tvc_upload_input">
      <i class="fal fa-plus"></i>
      <input type="file" class="d-none" @change="handleFileInput" />
    </label>
    <div v-if="image && imagePreview" class="tvc_image-list">
      <image :src="imagePreview" class="tvc_upload_image" />
      <button type="button" class="btn btn-default btn-sm">
        <i class="fas fa-trash"></i>
      </button>
    </div>-->

    <div class="image-upload-wrapper" @click="$refs.file.click()">
      <div v-show="image && imagePreview" class="preview">
        <img class="img-preview" :src="imagePreview" />
        <button type="button" class="btn-remove" @click="removeImage()">
          <i class="fal fa-trash-alt"></i>
        </button>
      </div>
      <div v-show="!(image && imagePreview)" class="controls">
        <i class="fal fa-plus"></i>
        <input type="file" ref="file" @change="handleFileInput" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageUpload",
  props: {
    label: {
      type: String
    }
  },

  data() {
    return {
      imagePreview: null,
      image: null
    };
  },

  methods: {
    handleFileInput(e) {
      if (e.target.files) {
        this.image = e.target.files[0];
        var reader = new FileReader();
        reader.onload = e => {
          this.imagePreview = e.target.result;
        };
        reader.readAsDataURL(this.image);
      }
    },

    removeImage() {
      this.image = null;
      this.imagePreview = null;
    }
  }
};
</script>

<style lang="scss" scoped>
.image-upload-wrapper {
  width: 100px;
  height: 100px;
  border: 2px dotted grey;
  border-radius: 5px;
  color: grey;
  text-align: center;
  line-height: 100px;
  font-size: 40px;
  cursor: pointer;

  input[type="file"] {
    display: none;
  }

  .preview {
    position: relative;
    width: 100%;
    height: 100%;
    img.img-preview {
      position: absolute;
      top: 0;
      left: 0;
      width: 96px;
      height: 96px;
      border-radius: 5px;
    }

    .btn-remove {
      border: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 40px;
      width: 40px;
      border-radius: 50%;
      background-color: white;
      font-size: 18px;
      color: #373737;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
      text-align: center;
      line-height: 20px;
    }
  }
}
</style>
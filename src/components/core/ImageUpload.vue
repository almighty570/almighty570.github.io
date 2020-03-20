<template>
  <div :class="custom_class">
    <label v-if="label">{{label}}</label>
    <!-- Validation doesn't work for now -->
    <validation-provider :rules="rules" v-slot="{ errors }">
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
      <template v-if="errors.length">
        <span class="text-danger text-sm" v-for="(error, index) in errors" :key="index">{{error}}</span>
      </template>
    </validation-provider>
  </div>
</template>

<script>
export default {
  name: "ImageUpload",
  props: {
    label: {
      type: String
    },
    rules: {
      type: String
    },
    custom_class: {
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
$size: 80px;
$border-size: 2px;
$border-radius: 5px;

.image-upload-wrapper {
  width: $size;
  height: $size;
  border: $border-size dotted grey;
  border-radius: $border-radius;
  color: grey;
  text-align: center;
  line-height: $size;
  font-size: calc(40 / 100 * #{$size});
  cursor: pointer;

  input[type="file"] {
    display: none;
  }

  .preview {
    position: relative;
    width: 100%;
    height: 100%;
    img.img-preview {
      $img-size: calc(#{$size} - 2 * #{$border-size});
      position: absolute;
      top: 0;
      left: 0;
      width: $img-size;
      height: $img-size;
      border-radius: $border-radius;
    }

    .btn-remove {
      border: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: calc(40 / 100 * #{$size});
      width: calc(40 / 100 * #{$size});
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
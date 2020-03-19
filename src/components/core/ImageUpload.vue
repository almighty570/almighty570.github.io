<template>
  <div>
    <label class="tvc_upload_input">
      <i class="fal fa-plus"></i>
      <input type="file" class="d-none" />
    </label>
    <div v-if="image" class="tvc_image-list">
      <image src="${e.target.result}" class="tvc_upload_image" />
      <button type="button" class="btn btn-default btn-sm">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageUpload",
  props: {
    instances: {
      type: Number
    }
  },

  data() {
    return {
      image: null
    };
  },

  methods: {
    handleFileInput(e) {
      if (e.target.files) {
        console.log(e.target.files);

        // var reader = new FileReader();
        // reader.onload = (e) => {
        // };
        // reader.readAsDataURL(self.files[0]);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.tvc_upload_image {
  border: 2px black solid;
  height: 80px;
  max-width: 80px;
  position: absolute;
  top: -2px;
  left: -2px;
}

.tvc_upload_input {
  position: relative;
  display: inline-block;
  margin: 5px;
  height: 80px;
  width: 80px;
  border: 2px dashed #373737;
  color: #373737;
  text-align: center;
  line-height: 80px;
  font-size: 40px;
  font-weight: bold;
  background: whitesmoke;
  cursor: pointer;
}

.tvc_image-list {
  display: flex;
  flex-direction: column;
}
</style>
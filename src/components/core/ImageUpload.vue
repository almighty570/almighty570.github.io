<template>
  <div>
    <label class="tvc_upload_input" v-for="i in instances" :key="i">
      +
      <input type="file" class="tvc_hidden" />
    </label>
    <div class="tvc_image-list">
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
      files: []
    };
  },

  methods: {
    handleFileInput(self, containerId, index) {
      if (self.files && self.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
          document.getElementById(
            `${containerId}_image_list_${index}`
          ).innerHTML = `
                    <image src="${e.target.result}" class="tvc_upload_image" id="${containerId}_image_${index}" />
                    <button type="button" id="${containerId}_delete_btn_${index}" class="btn btn-default btn-sm">
                        <i class="fas fa-trash"></i>
                    </button>
                  `;
          document
            .getElementById(`${containerId}_delete_btn_${index}`)
            .addEventListener("click", function() {
              document.getElementById(`${containerId}_image_${index}`).remove();
              document.getElementById(
                `${config.containerId}_input_${index}`
              ).value = null;
              document
                .getElementById(`${containerId}_delete_btn_${index}`)
                .remove();
            });
        };
        reader.readAsDataURL(self.files[0]);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.tvc_hidden {
  display: none;
}

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
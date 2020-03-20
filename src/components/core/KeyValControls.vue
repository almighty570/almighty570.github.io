<template>
  <div>
    <div v-for="(dataItem, index) in dataItems" :key="index">
      <div class="row">
        <div class="col">
          <TextBox
            :type="config.key.type"
            :id="config.key.id + '-' + index"
            :placeholder="config.key.placeholder"
            v-model="dataItems[index].key"
            :rules="config.key.rules"
            @input="emitChanges()"
          />
        </div>
        <div class="col">
          <TextBox
            :type="config.val.type"
            :id="config.val.id + '-' + index"
            :placeholder="config.val.placeholder"
            v-model="dataItems[index].val"
            :rules="config.val.rules"
            @input="emitChanges()"
          />
        </div>

        <div class="col" v-if="config.hasControls">
          <div class="d-flex">
            <button
              type="button"
              class="btn btn-default align-self-top mr-1"
              @click="removeAttribute(index)"
            >
              <i class="fas fa-trash-alt"></i>
            </button>
            <button
              type="button"
              class="btn btn-default align-self-top"
              @click="addAttribute()"
              v-if="index === dataItems.length-1"
            >
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <button v-if="dataItems.length === 0" class="btn btn-default" @click="addAttribute()">
      <i class="fas fa-plus mr-2"></i> &nbsp; Add New pair
    </button>
  </div>
</template>

<script>
// The component provides support for only 'text
import TextBox from "@/components/core/TextBox";
// import TextArea from "@/components/core/TextArea";
// import NumberField from "@/components/core/NumberField";
// import Select from "@/components/core/Select";

export default {
  name: "KeyValControls",
  components: { TextBox },

  data() {
    return {
      dataItems: []
    };
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  },

  created() {
    for (let i = 0; i < this.config.numInstances; i++) this.addAttribute();
  },

  methods: {
    updateValue() {
      // this.$emit("input", this.$refs.input.value);
    },

    removeAttribute(index) {
      this.dataItems.splice(index, 1);
    },

    addAttribute() {
      this.dataItems.push({ key: "", value: "" });
    },

    emitChanges() {
      console.log("chage");
      this.$emit("input", this.dataItems);
    }
  },

  watch: {
    dataItems(oldVal, newVal) {
      this.emitChanges();
    }
  }
};
</script>

<style scoped lang="scss">
</style>
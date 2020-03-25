<template>
  <div>
    <label v-if="title">{{title}}</label>
    <br v-if="title" />
    <div v-for="(dataItem, index) in dataItems" :key="index">
      <div class="row">
        <div class="col" v-for="(value, key) in config.items" :key="key">
          <template v-if="value.type === 'text'">
            <TextBox
              :type="value.type"
              :id="value.id + '-' + index"
              :placeholder="value.placeholder"
              v-model="dataItems[index][key]"
              :rules="value.rules"
              @input="emitChanges()"
            />
          </template>
          <template v-else-if="value.type === 'number'">
            <NumberField
              :id="value.id + '-' + index"
              :placeholder="value.placeholder"
              v-model.number="dataItems[index][key]"
              :rules="value.rules"
              @input="emitChanges()"
            />
          </template>
          <template v-else-if="value.type === 'select'">
            <Select
              :id="value.id + '-' + index"
              v-model="dataItems[index][key]"
              :rules="value.rules"
              :options="value.options"
              :value="value.options[0].value"
              @input="emitChanges()"
            />
          </template>
          <template v-else-if="value.type === 'textarea'">
            <TextArea
              :id="value.id + '-' + index"
              v-model="dataItems[index][key]"
              :rules="value.rules"
              :value="dataItems[index][key]"
              @input="emitChanges()"
              rows="2"
            />
          </template>
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

    <button v-if="dataItems.length === 0" class="btn btn-default mb-3" @click="addAttribute()">
      <i class="fas fa-plus mr-2"></i> &nbsp; Add New row
    </button>
  </div>
</template>

<script>
// The component provides support for only 'text', 'select' & 'number'
import TextBox from "@/components/core/TextBox";
import TextArea from "@/components/core/TextArea";
import NumberField from "@/components/core/NumberField";
import Select from "@/components/core/Select";

export default {
  name: "RowControls",
  components: { TextBox, Select, NumberField },

  data() {
    return {
      dataItems: []
    };
  },
  props: {
    config: {
      type: Object,
      required: true
    },

    value: {
      type: Array
    },

    title: {
      type: String
    }
  },

  created() {
    if (this.value) this.dataItems = this.value;
    else for (let i = 0; i < this.config.numInstances; i++) this.addAttribute();
  },

  methods: {
    removeAttribute(index) {
      this.dataItems.splice(index, 1);
    },

    addAttribute() {
      let dataItem = {};
      Object.keys(this.config.items).forEach(key => (dataItem[key] = null));
      this.dataItems.push(dataItem);
    },

    emitChanges() {
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
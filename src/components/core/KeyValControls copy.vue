<template>
  <div>
    <label v-if="title">{{title}}</label>
    <br v-if="title" />
    <div v-for="(dataItem, index) in dataItems" :key="index">
      <div class="row">
        <div class="col">
          <template v-if="config.key.type === 'text'">
            <TextBox
              :type="config.key.type"
              :id="config.key.id + '-' + index"
              :placeholder="config.key.placeholder"
              v-model="dataItems[index].key"
              :rules="config.key.rules"
              @input="emitChanges()"
            />
          </template>
          <template v-else-if="config.key.type === 'number'">
            <NumberField
              :id="config.key.id + '-' + index"
              :placeholder="config.key.placeholder"
              v-model.number="dataItems[index].key"
              :rules="config.key.rules"
              @input="emitChanges()"
            />
          </template>
          <template v-else-if="config.key.type === 'select'">
            <Select
              :id="config.key.id + '-' + index"
              v-model="dataItems[index].key"
              :rules="config.key.rules"
              :options="config.key.options"
              :value="dataItems[index].key"
              @input="emitChanges()"
            />
          </template>
        </div>
        <div class="col">
          <template v-if="config.val.type === 'text'">
            <TextBox
              :type="config.val.type"
              :id="config.val.id + '-' + index"
              :placeholder="config.val.placeholder"
              v-model="dataItems[index].val"
              :rules="config.val.rules"
              @input="emitChanges()"
            />
          </template>
          <template v-else-if="config.val.type === 'number'">
            <NumberField
              :id="config.val.id + '-' + index"
              :placeholder="config.val.placeholder"
              v-model.number="dataItems[index].val"
              :rules="config.val.rules"
              @input="emitChanges()"
            />
          </template>
          <template v-else-if="config.val.type === 'select'">
            <Select
              :id="config.val.id + '-' + index"
              v-model="dataItems[index].val"
              :rules="config.val.rules"
              :options="config.val.options"
              @input="emitChanges()"
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
import NumberField from "@/components/core/NumberField";
import Select from "@/components/core/Select";

export default {
  name: "KeyValControls",
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
      this.dataItems.push({ key: "", value: "" });
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
<template>
  <div class="form-group">
    <label v-if="label" :for="id">{{label}}</label>
    <validation-provider :rules="rules" v-slot="{ errors }">
      <div class="input-group">
        <input
          v-on:keypress="limitKeypress(value, maxval)"
          :type="type"
          ref="input"
          class="form-control"
          :class="{'is-invalid': errors && errors.length}"
          :id="id"
          :placeholder="placeholder"
          :value="value"
          @input="updateValue()"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="addonClicked()"
          >{{addon_btn_text}}</button>
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
  name: "TextBoxAddon",
  props: {
    id: {
      type: String,
      required: true
    },

    type: {
      type: String,
      required: true
    },

    value: {
      type: String
    },

    label: {
      type: String
    },

    placeholder: {
      type: String
    },

    rules: {
      type: String
    },

    has_addon: {
      type: Boolean
    },

    addon_btn_text: {
      type: String
    },

    maxval: {
      type: Number
    },
    value: {
      type: String
    }
  },

  methods: {
    updateValue() {
      this.$emit("input", this.$refs.input.value);
    },

    addonClicked() {
      this.$emit("addonClicked", this.$refs.input.value);
    },

    limitKeypress(value, maxLength) {
      if (value != undefined && value.toString().length >= maxLength) {
        event.preventDefault();
      }
    }
  }
};
</script>

<style scoped lang="scss">
</style>
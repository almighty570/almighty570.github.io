<template>
  <div class="date-range-picker-wrapper" :class="custom_class" :id="id">
    <div class="date-range-picker__intro">
      <slot name="date-range-picker-intro"></slot>
    </div>
    <DatePicker
      class="date-range-picker__date-picker"
      :placeholder="from_placeholder"
      v-model="fromDate"
      @selected="emitFromDate"
    />
    <DatePicker
      class="date-range-picker__date-picker"
      :placeholder="to_placeholder"
      v-model="toDate"
      @selected="emitToDate"
    />
  </div>
</template>

<script>
import DatePicker from "@/components/core/DatePicker.vue";

export default {
  name: "DateRangePicker",
  props: {
    custom_class: String,
    id: String,
    from_placeholder: String,
    to_placeholder: String
  },
  components: {
    DatePicker
  },
  data() {
    return {
      fromDate: null,
      toDate: null
    };
  },
  methods: {
    emitFromDate: () => this.$emit("from-date", "ADASD"),
    emitToDate: () => this.$emit("to-date", "ERERE")
  }
};
</script>

<style>
.date-range-picker-wrapper {
  display: flex;
  max-width: 100px;
}
.date-range-picker__intro {
  padding-top: 10px;
  margin-right: 10px;
}
</style>
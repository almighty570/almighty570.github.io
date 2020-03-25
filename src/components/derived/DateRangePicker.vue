<template>
  <div class="date-range-picker-wrapper" :class="custom_class" :id="id">
    <div class="btn-group" role="group">
      <button
        :class="'btn btn-outline-' + color_scheme + ' btn-sm'"
        @click="openDatePicker('from')"
      >{{dateFormat(dateRange.from) || 'Date From'}}</button>
      <button
        :class="'btn btn-outline-' + color_scheme + ' btn-sm'"
        @click="openDatePicker('to')"
      >{{dateFormat(dateRange.to) || 'Date To'}}</button>
    </div>

    <vue-datepicker
      calendar-class="adjust-calendar"
      ref="from"
      input-class="d-none"
      @selected="emitUpdate"
      v-model="dateRange.from"
      :format="dateFormat"
    ></vue-datepicker>

    <vue-datepicker
      calendar-class="adjust-calendar"
      ref="to"
      input-class="d-none"
      @selected="emitUpdate"
      v-model="dateRange.to"
      :format="dateFormat"
    ></vue-datepicker>
  </div>
</template>

<script>
// import DatePicker from "@/components/core/DatePicker.vue";
import VueDatepicker from "vuejs-datepicker";
import moment from "moment";

export default {
  name: "DateRangePicker",
  props: {
    custom_class: String,
    color_scheme: String,
    id: String,
    date_format: String,
    from_placeholder: String,
    to_placeholder: String
  },
  components: {
    VueDatepicker
  },
  data() {
    return {
      dateRange: {
        from: null,
        to: null
      }
    };
  },
  methods: {
    openDatePicker(datepicker) {
      // console.log(this.$refs.from);
      this.$refs[datepicker].showCalendar();
    },

    emitUpdate() {
      this.$emit("input", this.dateRange);
    },

    dateFormat(date) {
      if (!date) return null;
      return moment(date).format(this.date_format);
    }
  }
};
</script>

<style>
.date-range-picker-wrapper {
  display: relative;
}
.date-range-picker__intro {
  padding-top: 10px;
  margin-right: 10px;
}

.adjust-calendar {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0px);
}
</style>
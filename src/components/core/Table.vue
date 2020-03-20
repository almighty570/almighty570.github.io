/*
@params: [{key:value},{key:value}]
 */

<template>
  <table class="table" :class="custom_class" :id="id">
    <thead :class="thead_class">
      <tr>
        <th scope="col" v-for="(header,count) in getTableHeaders" :key="count">{{ getTableHeaders[count]}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(pair,count) in values" :key="count">
        <td v-for="(value,count) in pair" :key="count">{{value}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Table",
  props: {
    custom_class: String,
    id: String,
    thead_class: String,
    values: Array
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    removeDuplicatesFromArray(array){
        return Array.from(new Set(array))
    }
  },
  computed: {
    getTableHeaders() {
      let headers = [];
      let arrayLength = this.values.length;
      for (let i = 0; i < arrayLength; i++) {
        let obj = this.values[i];
        for (let key in obj) {
          headers.push(this.capitalizeFirstLetter(key));
        }
      }
      return this.removeDuplicatesFromArray(headers);
    }
  }
};
</script>

<style>
</style>
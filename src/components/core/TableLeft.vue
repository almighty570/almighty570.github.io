<template>
  <table class="table" :id="id" :class="custom_class">
    <tbody>
      <tr v-for="(value,i) in values" :key="i">
        <th scope="row" :class="thead_class">{{getKey(value)}}</th>
        <td>{{getValue(value)}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "TableLeft",
  props: {
    custom_class: String,
    id: String,
    thead_class: String,
    values: Array
  },
  methods: {
   getKey: (pair) => Object.keys(pair)[0],
   getValue: (pair) => Object.values(pair)[0]
  }
};
</script>

<style>
</style>
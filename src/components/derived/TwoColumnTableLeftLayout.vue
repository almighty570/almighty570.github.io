<template>
  <div :id="id" :class="custom_class">
    <div class="row">
      <div class="col-md-6" v-for="(array,i) in divideArray(2,values)" :key="i">
        <TableLeft
          :values="array"
        />
      </div>
      
    </div>
  </div>
</template>

<script>
import TableLeft from "@/components/core/TableLeft.vue";

export default {
  name: "TwoColumnTableLeftLayout",
  props: {
    id: String,
    custom_class: String,
    values: Array
  },
  components: {
    TableLeft
  },
  methods: {
    divideArray: (noOfDivisons, array) => {
      let itemsPerArray = Math.round(array.length / noOfDivisons);
      let chunks = [],
        i = 0,
        length = array.length;

      while (i < length) {
        chunks.push(array.slice(i, (i += itemsPerArray)));
      }

      return chunks;
    }
  }
};
</script>
</script>

<style>
</style>
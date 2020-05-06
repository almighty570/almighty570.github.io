<template>
  <div>
    <Card>
      <div slot="body">
        <div class="text-center">
          <h3>Pick default shipping method</h3>

          <div class="shipping-methods d-flex flex-wrap mt-5 mb-5 justify-content-center">
            <div
              class="shipping-method"
              :class="{'--disabled': !sm.available, '--active': shippingSettingsMethod.includes(sm)  }"
              v-for="(sm, index) in shippingSettingsMethods"
              :key="index"
              @click="selectShippingMethod(sm)"
            >{{sm.name}}</div>
          </div>

          <button
            @click="next()"
            class="btn btn-primary pl-4 pr-4"
            :disabled="!shippingSettingsMethod"
          >Save</button>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import Card from "@/components/core/Card";
import { mapGetters } from "vuex";

export default {
  name: "SellerSettingsShipping",
  components: {
    Card
  },
   computed: {
    ...mapGetters("onboard", ["shippingMethod"])
    
  },
  created(){
   this.shippingSettingsMethod = this.shippingMethod.slice();    
  },
  
  data() {
    return {
      shippingSettingsMethod: [],
      shippingSettingsMethods: [
        { name: "EMS", available: true },
        { name: "KERRY", available: true },
        { name: "ALPHA", available: true },
        { name: "FLASH", available: false },
        { name: "BEST", available: false },
        { name: "J&T", available: false },
        { name: "SCG", available: false }
      ]
    };
  },

    methods: {
    selectShippingMethod(sm) {
      if (sm.available) 
      console.log(sm)
      this.shippingSettingsMethod.push(sm);           
    },

    next() {
      alert('Hi');
    }
  }
};
</script>

<style lang="scss" scoped>
.shipping-method {
  margin: 0.5rem 1rem;
  padding: 1rem;
  border: 2px solid map-get($variants, "primary");
  border-radius: 5px;
  color: map-get($variants, "primary");
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  min-width: 100px;

  &.--disabled {
    background-color: whitesmoke;
    border-color: lightgrey;
    color: lightgrey;
  }

  &.--active {
    background-color: map-get($variants, "primary");
    // border-color: lightgrey;
    color: white;
  }
}
.setting__header {
  font-weight: bold;
  font-size: 18px;
}
.setting__description {
  font-weight: thin;
  font-size: 13px;
}

.setting {
  &.--inline {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &.--table {
    .setting__text {
      margin-bottom: 20px;
    }
  }

  margin-bottom: 30px;
}

.settings-wrapper {
  margin-top: 24px;
}

.setting-status-tag {
  text-transform: uppercase;

  font-weight: bold;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 2px;
  text-align: center;
  width: 68px;
  height: 29px;

  &.--warning {
    background-color: #ffc107;
    color: black;
  }

  &.--success {
    background-color: #28a745;
    color: white;
  }

  &.--danger {
    background-color: #dc3545;
    color: white;
  }

  &.--info {
    background-color: #007bff;
    color: white;
  }
}
</style>
<template>
  <div>
    <Card>
      <div slot="body">
        <div>
          <h5 class="text-center text-md-left">Manage Shipping Methods</h5>
          <ShippingMethodInput
            v-model="selectedShippingMethods"
            :values="shippingMethods"
            variant="primary"
            @input="save()"
          />
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import Card from "@/components/core/Card";
import { mapGetters } from "vuex";
import ShippingMethodInput from "@/components/derived/ShippingMethodInput";
import { Toast } from "@/helpers/toastr";

export default {
  name: "SellerSettingsShipping",
  components: {
    Card,
    ShippingMethodInput
  },
  computed: {
    ...mapGetters("onboard", ["shippingMethods"])
  },
  created() {},

  data() {
    return {
      selectedShippingMethods: null
    };
  },

  methods: {
    save() {
      this.$store.dispatch("onboard/storeshippingMethods", {
        shippingMethods: this.selectedShippingMethods,
        callback: (status, data) => {
          // if (status) Toast("Shipping method updated");
        }
      });
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
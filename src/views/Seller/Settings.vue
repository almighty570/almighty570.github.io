<template>
  <div>
    <div class="content-header">
      <div class="container">
        <h1 class="text-dark">Settings</h1>
      </div>
    </div>

    <div class="content">
      <div class="container">
        <div class="settings-wrapper">
          <div class="tabs">
            <Tabs
              :tabs="[
        { label: 'General'},
        { label: 'Balance'},
      ]"
              custom_class="is-primary"
            />
          </div>
          <div class="setting">
            <div class="setting__text">
              <div class="setting__header">Inventory Management Feature</div>
              <div class="setting__description">Activate or Deactivate Inventory Managment Feature</div>
            </div>
            <div class="setting__toggle">
              <Toggle
                id="inventory-toggle"
                :value="false"
                color="blue"
                v-model="showInventory"
                :labels="{true: 'This product has bundle pricing', false: 'This product doesn\'t have bundle pricing' }"
              />
            </div>
          </div>
          <div class="setting">
            <div class="setting__text">
              <div class="setting__header">Inventory Management Feature</div>
              <div class="setting__description">Activate or Deactivate Inventory Managment Feature</div>
            </div>
            <div class="setting__toggle">
              <Toggle
                id="inventory-toggle"
                :value="false"
                color="blue"
                v-model="showInventory"
                :labels="{true: 'This product has bundle pricing', false: 'This product doesn\'t have bundle pricing' }"
              />
            </div>
          </div>
          <div class="setting">
            <div class="setting__text">
              <div class="setting__header">Inventory Management Feature</div>
              <div class="setting__description">Activate or Deactivate Inventory Managment Feature</div>
            </div>
            <div class="setting__toggle">
              <Toggle
                id="inventory-toggle"
                :value="false"
                color="blue"
                v-model="showInventory"
                :labels="{true: 'This product has bundle pricing', false: 'This product doesn\'t have bundle pricing' }"
              />
            </div>
          </div>
          <div class="setting">
            <div class="setting__text">
              <div class="setting__header">Inventory Management Feature</div>
              <div class="setting__description">Activate or Deactivate Inventory Managment Feature</div>
            </div>
            <div class="setting__toggle">
              <Toggle
                id="inventory-toggle"
                :value="false"
                color="blue"
                v-model="showInventory"
                :labels="{true: 'This product has bundle pricing', false: 'This product doesn\'t have bundle pricing' }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Toggle from "@/components/core/Toggle";
import Tabs from "@/components/core/Tabs";

export default {
  name: "Settings",
  components: {
    Toggle,
    Tabs
  },
  data() {
    return {
      showInventory: false
    };
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
.setting__header {
  font-weight: bold;
  font-size: 18px;
}
.setting__description {
  font-weight: thin;
  font-size: 13px;
}

.setting {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>
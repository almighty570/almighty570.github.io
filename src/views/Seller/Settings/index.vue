<template>
  <div>
    <div class="content-header">
      <div class="container-fluid">
        <h1 class="text-dark" id="settings">Settings</h1>
      </div>
    </div>

    <div class="content">
      <div class="container-fluid">
        <div class="tabs" id="tabs">
          <Tabs
            ref="tabs"
            :tabs="tabs"
            custom_class="is-info"
            :active_tab_index="activeTabIndex"
            @tabSelected="handleTabSelected"
          />
        </div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from "@/components/core/Tabs";
import Driver from "driver.js";
import "driver.js/dist/driver.min.css";

export default {
  name: "Settings",
  components: { Tabs },
  data() {
    return {
      activeTabIndex: 0,
      driver: null,
      showInventory: false,
      tabs: [
        { label: "Shops", pathName: "Seller-Settings-Shops" },
        { label: "Payment", pathName: "Seller-Settings-Payment" },
        { label: "Shipping", pathName: "Seller-Settings-Shipping" },
        { label: "Account", pathName: "Seller-Settings-Account" },
        { label: "Sales Agents", pathName: "Seller-Settings-Sales-Agents" }
      ]
    };
  },

  mounted() {
    setTimeout(() => {
      // if (confirm("Show Guide ? - For testing only"))
      this.initGuide();
    }, 1000);
  },

  methods: {
    handleTabSelected(index, callback) {
      this.$router.push({ name: this.tabs[index].pathName }, () => {
        if (callback) callback();
      });
    },

    initGuide() {
      this.driver = new Driver({
        className: "driver-bubble",
        onReset: Element => {
          let elemId = Element.options.element;

          // Payment page
          if (elemId === "#btn-add-new-shop") {
            this.$refs.tabs.setActiveTab(1);
            setTimeout(() => {
              this.driver.defineSteps([
                {
                  element: "#btn-setup-payment",
                  popover: {
                    title: "Add payment details",
                    description:
                      "Fill up the form to provide your bank details to be used for shipping",
                    position: "top",
                    closeBtnText: "View Shipping"
                  }
                }
              ]);
              this.driver.start();
            }, 500);
          }

          // Shipping page
          if (elemId === "#btn-setup-payment") {
            this.$refs.tabs.setActiveTab(2);

            setTimeout(() => {
              this.driver.defineSteps([
                {
                  element: "#shipping-input",
                  popover: {
                    title: "Shipping methods",
                    description: "Choose the shipping methods yu want to use",
                    position: "top",
                    closeBtnText: "Manage Account"
                  }
                }
              ]);
              this.driver.start();
            }, 500);
          }

          // Account page
          if (elemId === "#shipping-input") {
            this.$refs.tabs.setActiveTab(3);

            setTimeout(() => {
              this.driver.defineSteps([
                {
                  element: "#account-form",
                  popover: {
                    title: "Account form",
                    description: "Change your account settings from here",
                    position: "top",
                    closeBtnText: "Add Sales Agents"
                  }
                }
              ]);
              this.driver.start();
            }, 500);
          }

          // Sales Agents Page
          if (elemId === "#account-form") {
            this.$refs.tabs.setActiveTab(4);

            setTimeout(() => {
              this.driver.defineSteps([
                {
                  element: "#sales-agents-table",
                  popover: {
                    title: "Sales agents list",
                    description: "Here you can see a test Sales Agent",
                    position: "top"
                  }
                },

                {
                  element: "#btn-add-sales-agent",
                  popover: {
                    title: "Add new Agent",
                    description: "Here you can add new agent",
                    position: "top",
                    closeBtnText: "Finish Tour"
                  }
                }
              ]);
              this.driver.start();
            }, 500);
          }
        }
      });
      this.driver.defineSteps([
        {
          element: "#tabs",
          popover: {
            title: "Site settings",
            description: "Manage all of your settings from here",
            position: "bottom"
          }
        },
        {
          element: "#shop-details-0",
          popover: {
            title: "🛍️ Congrats",
            description: "This is the shop you just added",
            position: "bottom"
          }
        },
        {
          element: "#btn-add-new-shop",
          popover: {
            title: "Add new shops",
            description: "Just like you did previously",
            position: "top",
            closeBtnText: "Manage Payments",
            nextBtnText: null,
            prevBtnText: null
          }
        }
      ]);
      // Start the introduction
      this.driver.start();
    }
  }
};
</script>

<style lang="scss" scoped>
.driver-bubble {
  .driver-next-btn {
    background-color: map-get($variants, "success");
    color: white;
  }
}
</style>
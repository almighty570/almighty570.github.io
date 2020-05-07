<template>
  <div>
    <Card>
      <div slot="body">
        <div class="text-center">
          <h5>Manage Shops</h5>
        </div>
        <CardWidget id="order-details-card" class="card card-primary">
          <div slot="title">{{details.name}}</div>
          <div slot="body">
            <div class="row">
              <div class="col-6">
                <table>
                  <tbody>
                    <tr>
                      <th>Shop Address:</th>
                      <td>{{details.address}}</td>
                    </tr>
                    <tr>
                      <th>Shipping:</th>
                      <td>
                        <span v-for="(ship,index) in shippingMethods" :key="index">{{ship.name}},</span>
                      </td>
                    </tr>
                    <tr>
                      <th>Phone:</th>
                      <td>{{details.phone}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </CardWidget>
      </div>
    </Card>
    <div class="text-center">
      <Button id="btn-cancel" @click="addNewShop()" type="button" variant="primary" size="sm">
        Add New Shop
        <i class="mr-1 ml-2 mt-1 fas fa-plus"></i>
      </Button>
    </div>
  </div>
</template>

<script>
import Card from "@/components/core/Card";
import CardWidget from "@/components/core/CardWidget";
import Button from "@/components/core/Button";
import { mapGetters } from "vuex";

export default {
  name: "SellerSettingsShops",
  components: {
    Card,
    Button,
    CardWidget
  },
  computed: {
    ...mapGetters("onboard", ["details", "product", "shippingMethods"])
  },
  created() {
    console.log(this.shippingMethods);
  },
  data() {
    return {};
  },

  methods: {
    addNewShop() {
      return this.$router.push({ name: "Onboard-Welcome" });
    }
  }
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
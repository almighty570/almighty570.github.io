<template>
  <div>
    <Card>
      <div slot="body">
        <p class="lead" id="111">Payment Settings</p>

        <Button
          id="btn-setup-payment"
          variant="info"
          size="md"
          data-toggle="modal"
          data-target="#paymentModal"
        >Setup payments</Button>
      </div>
    </Card>

    <Modal id="paymentModal">
      <template slot="header">
        <h5 class="modal-title" id="addShopModalLabel">
          <i class="mr-2 fal fa-coins"></i>
          Payment Settings
        </h5>
      </template>

      <template slot="body">
        <ValidationObserver v-slot="{ invalid }">
          <form @submit.prevent="handleFormSubmit">
            <!-- Account NUmber && Name -->
            <div class="row">
              <div class="col-md-6 sol-sm-12">
                <TextBox
                  type="text"
                  size="sm"
                  id="account-no"
                  label="Account Number"
                  placeholder="Account Number"
                  rules="required"
                  v-model="paymentForm.accountNo"
                />
              </div>
              <div class="col-md-6 sol-sm-12">
                <TextBox
                  type="text"
                  size="sm"
                  id="account-holder-name"
                  label="Account Holder Name"
                  placeholder="Account Holder Name"
                  rules="required"
                  v-model="paymentForm.accountHolderName"
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <SmartAddress
                  label="Bank Address"
                  placeholder="Bank address"
                  id="bank-address"
                  rules="required"
                  :value="paymentForm.bankAddress"
                  v-model="paymentForm.bankAddress"
                  rows="3"
                />
              </div>
            </div>
            <hr />
            <div class="d-flex justify-content-center">
              <Button
                custom_class="pl-4 pr-4"
                type="submit"
                id="btn-update-payment"
                size="sm"
                :disabled="invalid"
                variant="info"
              >Submit</Button>
            </div>
          </form>
        </ValidationObserver>
      </template>
    </Modal>
  </div>
</template>

<script>
import Card from "@/components/core/Card";
import Button from "@/components/core/Button";
import TextBox from "@/components/core/TextBox";
import Modal from "@/components/core/Modal";
import SmartAddress from "@/components/derived/SmartAddress";

export default {
  name: "SellerSettingsPayment",
  components: {
    Card,
    Button,
    Modal,
    TextBox,
    SmartAddress
  },
  data() {
    return {
      paymentForm: null
    };
  },

  created() {
    this.initPaymentForm();
  },

  methods: {
    initPaymentForm() {
      this.paymentForm = {
        accountNo: null,
        accountHolderName: null,
        bankAddress: null
      };
    },

    handleFormSubmit() {
      $("#paymentModal").modal("hide");
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
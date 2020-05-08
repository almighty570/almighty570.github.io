<template>
  <div>
    <Card>
      <div slot="body">
        <div class="toolbar d-flex justify-content-between mb-2">
          <p class="lead mb-0 align-self-center">Sales Agents</p>

          <Button
            variant="outline-primary"
            size="sm"
            custom_class="mr-1 align-self-center"
            id="btn-add-sales-agent"
            data-toggle="modal"
            data-target="#salesAgentModal"
          >
            <i class="fal fa-plus"></i> Add New
          </Button>
        </div>

        <DataTable
          id="sales-agents-table"
          :columns="salesAgentsColumns"
          :rows="salesAgentsData"
          :per_page="5"
          responsive
          custom_class="table-sm"
        >
          <div slot="actions">
            <Button
              variant="outline-primary"
              size="sm"
              custom_class="mr-1"
              data-toggle="modal"
              data-target="#salesAgentModal"
              id="btn-action-edit"
            >
              <i class="fal fa-pen"></i>
            </Button>
            <Button variant="outline-primary" size="sm" id="btn-action-delete">
              <i class="fal fa-trash-alt"></i>
            </Button>
          </div>
        </DataTable>
      </div>
    </Card>

    <Modal id="salesAgentModal">
      <template slot="header">
        <h5 class="modal-title" id="addSalesAgentLabel">
          <i class="fas fa-users mr-2"></i>Add New Sales Agent
        </h5>
      </template>

      <template slot="body">
        <ValidationObserver v-slot="{ invalid }">
          <form @submit.prevent="handleCreateFormSubmit">
            <!-- Name & Email -->
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <TextBox
                  type="text"
                  id="create-name"
                  label="Name"
                  v-model="salesAgentCreateForm.name"
                  rules="required"
                />
              </div>
              <div class="col-md-6 col-sm-12">
                <TextBox
                  type="email"
                  id="create-email"
                  label="Email"
                  v-model="salesAgentCreateForm.email"
                  rules="required"
                />
              </div>
            </div>

            <!-- Phone Line Id -->
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <PhoneNumber
                  label="Phone No"
                  placeholder="Phone Number"
                  id="phone-number"
                  rules="required"
                  v-model="salesAgentCreateForm.phoneNo"
                />
              </div>
              <div class="col-md-6 col-sm-12">
                <TextBox
                  type="text"
                  id="create-line-id"
                  label="Line ID"
                  v-model="salesAgentCreateForm.lineId"
                  rules="required"
                />
              </div>
            </div>

            <!-- Id Card -->
            <div class="row">
              <div class="col">
                <FileUpload name="create_id_card" label="Id Card" />
              </div>
            </div>

            <!-- Address  -->
            <div class="row">
              <div class="col">
                <div class="mb-2"></div>
                <SmartAddress
                  label="Address"
                  placeholder="Address"
                  id="create-address"
                  rules="required"
                  v-model="salesAgentCreateForm.address"
                  rows="3"
                />
              </div>
            </div>

            <div class="row">
              <div class="col">
                <CheckBoxGroup
                  label="Permissions"
                  :options="permissionOptions"
                  id="create-permission"
                  name="create_permission"
                  v-model="salesAgentCreateForm.permissions"
                />
              </div>
            </div>
            <!-- Submit & Cancel Buttons -->
            <div class="row">
              <div class="col text-center">
                <hr />
                <div class="d-flex mt-4 justify-content-center">
                  <Button
                    id="btn-sales-agent-add-submit"
                    custom_class="pl-4 pr-4"
                    type="submit"
                    variant="primary"
                    size="sm"
                    :disabled="invalid"
                  >Submit</Button>
                </div>
              </div>
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
import DataTable from "@/components/core/DataTable";
import TextBox from "@/components/core/TextBox";
import Toggle from "@/components/core/Toggle";
import TextArea from "@/components/core/TextArea";
import NumberField from "@/components/core/NumberField";
import FileUpload from "@/components/core/FileUpload";
import Select from "@/components/core/Select";
import RadioGroup from "@/components/core/RadioGroup";
import CheckBoxGroup from "@/components/core/CheckBoxGroup";
import RowControls from "@/components/core/RowControls";
import ProductVariation from "@/components/derived/ProductVariation";
import Modal from "@/components/core/Modal";
import Spinner from "@/components/core/Spinner";
import PhoneNumber from "@/components/derived/PhoneNumber";
import SmartAddress from "@/components/derived/SmartAddress";

export default {
  name: "SellerSettingsSalesAgents",
  components: {
    Card,
    DataTable,
    Button,
    TextBox,
    NumberField,
    TextArea,
    FileUpload,
    Select,
    CheckBoxGroup,
    RowControls,
    ProductVariation,
    Toggle,
    RadioGroup,
    Modal,
    Spinner,
    PhoneNumber,
    SmartAddress
  },
  data() {
    return {
      salesAgentCreateForm: {
        name: null,
        email: null,
        phoneNo: null,
        lineId: null,
        idCard: null,
        address: null,
        permissions: []
      },

      permissionOptions: [
        { name: "Manage only products", value: 0 },
        { name: "Manage only orders", value: 1 },
        { name: "Manage both orders & products", value: 2 }
      ],
      salesAgentEditForm: {
        name: null,
        email: null,
        phoneNo: null,
        lineId: null,
        idCard: null,
        address: null,
        permissions: []
      }
    };
  },
  created() {
    this.fetchSalesAgents();
  },

  methods: {
    handleCreateFormSubmit() {},
    handleEditFormSubmit() {},
    cancel() {
      this.$router.push({ name: "Seller-Sales-Agent-List" });
    },

    fetchSalesAgents() {
      // make API Call here...
      this.salesAgentsColumns = [
        {
          name: "name",
          title: "Name",
          sortField: "name"
        },

        {
          name: "email",
          title: "Email",
          sortField: "email"
        },

        {
          name: "phone_no",
          title: "Phone No.",
          sortField: "phone_no"
        },

        {
          name: "line_id",
          title: "Line ID",
          sortField: "line_id"
        },

        {
          name: "address",
          title: "Address",
          sortField: "address"
        },
        "actions"
      ];

      this.salesAgentsData = [
        {
          id: 1,
          name: "Seller 1",
          email: "seller1@proship.com",
          phone_no: "2342342342",
          line_id: "seller_line_1",
          address: "Address 1"
        },

        {
          id: 2,
          name: "Seller 2",
          email: "seller2@proship.com",
          phone_no: "456423342",
          line_id: "seller_line_2",
          address: "Address 2"
        },

        {
          id: 3,
          name: "Seller 3",
          email: "seller3@proship.com",
          phone_no: "896423342",
          line_id: "seller_line_3",
          address: "Address 3"
        },

        {
          id: 4,
          name: "Seller 4",
          email: "seller4@proship.com",
          phone_no: "666423342",
          line_id: "seller_line_4",
          address: "Address 4"
        },

        {
          id: 5,
          name: "Seller 5",
          email: "seller5@proship.com",
          phone_no: "23423342",
          line_id: "seller_line_5",
          address: "Address 5"
        },

        {
          id: 6,
          name: "Seller 6",
          email: "seller6@proship.com",
          phone_no: "89423342",
          line_id: "seller_line_6",
          address: "Address 6"
        }
      ];
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
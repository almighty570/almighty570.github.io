<template>
  <div class="payment-details-wrapper p-3">
    <Stepper :steps="2" :currentStepIndex="1" />
    <div class="payment-details-summary mb-4 mt-4">
      <div class="row">
        <div class="col-6">
          <div class="number-orderdate-wrapper text-sm-mobile">
            <div class="number">
              <span>
                <span class="text-bold">Number:</span> #0R00041445
              </span>
            </div>
            <div class="order-date">
              <span>
                <span class="text-bold">Order Date:</span> 2020-05-03
              </span>
            </div>
          </div>
        </div>
        <div class="col-6 text-right">
          <span class="text-lg text-success text-bold">฿ 640.00</span>
        </div>
      </div>
    </div>
    <hr />
    <div class="payment-method mb-4 mt-4">
      <h5 class="header-sm-mobile">Choose a payment method</h5>
      <label class="card mt-1 mb-1 pointer selected">
        <div class="card-body p-3 ">
          <div>
            <input type="radio" name="method" id="method" value="transfer" checked="checked" class="mr-1" />
            <span class="text-sm-mobile">Transfer money</span>
          </div>
        </div>
      </label>
    </div>
    <hr />
    <div class="product-list mb-4 mt-4 text-sm-mobile">
      <h5 class="header-sm-mobile">Product List</h5>
      <div class="products">
        <div class="product p-3 mb-3">
          <div class="row pr-2">
            <div class="col-2 text-left">
              <img
                src="https://bankpig1995.onepage.sale/storage/app/images/584/202004165e988b4ecd38a.jpg"
                class="rounded"
                style="max-height: 100px; max-width: 100%;"
              />
            </div>
            <div class="col-4 d-flex align-items-center">
              <div class="product-name font-weight-bold">Dried Pork 1 KG</div>
            </div>
            <div class="col-3 d-flex align-items-center">
              <div class="amount">x 1</div>
            </div>
            <div class="col-3 text-right d-flex align-items-center justify-content-end">
              <div class="product-cost">
                <span class="text-right">฿ 590.00</span>
              </div>
            </div>
          </div>
        </div>
        <div class="product p-3 mb-3">
          <div class="row pr-2">
            <div class="col-2 text-left">
              <img
                src="https://bankpig1995.onepage.sale/storage/app/images/584/202004165e988b4ecd38a.jpg"
                class="rounded"
                style="max-height: 100px; max-width: 100%;"
              />
            </div>
            <div class="col-4 d-flex align-items-center">
              <div class="product-name font-weight-bold">Dried Pork 1 KG</div>
            </div>
            <div class="col-3 d-flex align-items-center">
              <div class="amount">x 1</div>
            </div>
            <div class="col-3 text-right d-flex align-items-center justify-content-end">
              <div class="product-cost">
                <span class="text-right">฿ 590.00</span>
              </div>
            </div>
          </div>
        </div>
        <div class="product p-3 mb-3">
          <div class="row pr-2">
            <div class="col-2 text-left">
              <img
                src="https://bankpig1995.onepage.sale/storage/app/images/584/202004165e988b4ecd38a.jpg"
                class="rounded"
                style="max-height: 100px; max-width: 100%;"
              />
            </div>
            <div class="col-4 d-flex align-items-center">
              <div class="product-name font-weight-bold">Dried Pork 1 KG</div>
            </div>
            <div class="col-3 d-flex align-items-center">
              <div class="amount">x 1</div>
            </div>
            <div class="col-3 text-right d-flex align-items-center justify-content-end">
              <div class="product-cost">
                <span class="text-right">฿ 590.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="price-details text-sm-mobile text-right">
        <div>
          <div class="cost-of-goods">Cost of Goods: ฿ 590.00</div>
          <div class="delivery-charge">Delievery Fee: ฿ 590.00</div>
          <div class="total text-bold">Total: ฿ 590.00</div>
        </div>
      </div>
    </div>
    <hr />
    <div class="shipping-information mb-4 mt-4">
      <h5 class="header-sm-mobile">Shipping information</h5>
      <div class="card mt-3">
        <div class="card-body text-sm-mobile">
          <div class="recipient">
            <span>Recipient: TEST</span>
          </div>
          <div class="mobile-number">
            <span>Mobile number: 0900000003</span>
          </div>
          <div class="address">
            <span>Address: Whereabouts, Tha Raeng, Bang Khen, Bangkok 10220</span>
          </div>
        </div>
      </div>
    </div>

    <div class="cta">
      <div class="row">
        <div class="col-md-6">
          <button
            type="button"
            class="mb-2 btn btn-md btn-outline-primary"
          >Share This Page / Make Payment Later</button>
        </div>
        <div class="col-md-6">
          <button type="button" class="mb-2 btn btn-primary btn-block">Back To Shop</button>
        </div>
      </div>
    </div>
    <div class="fixed-footer p-2">
      <div style>
        <div>
          <div class="row">
            <div class="col-12 pt-1">
              <h5 class="text-center header-sm-mobile">Account for money transfer</h5>
            </div>
            <div class="col-12">
              <div class="card mt-1 mb-1">
                <div class="card-body p-2">
                  <div class="d-flex flex-row text-sm-mobile">
                    <div>
                      <i class="fa fas-check" aria-hidden="true"></i>
                    </div>
                    <div class="pl-2">
                      <span>9672278122 Kolvacharawong Derm,</span>

                      <br />

                      <span>Siam Commercial Bank</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <button
            class="btn btn-success btn-block"
            data-toggle="modal"
            data-target="#uploadPaymentSlipImage"
          >
            <span>Payment slip notification</span>
          </button>
        </div>
      </div>
    </div>
    <Modal id="uploadPaymentSlipImage">
      <template slot="header">
        <h5 class="modal-title">
          <i class="fas fa-upload"></i>Upload File
        </h5>
      </template>
      <template slot="body">
        <p class="lead text-center">Drop or tap to upload Pay Slip</p>
        <vue-dropzone ref="importDropZone" id="import-dropzone" :options="importDropzoneOptions"></vue-dropzone>
      </template>
    </Modal>
  </div>
</template>

<script>
import Stepper from "@/components/core/Stepper.vue";
import Modal from "@/components/core/Modal.vue";
import vue2Dropzone from "vue2-dropzone";

export default {
  components: {
    Stepper,
    Modal,
    vueDropzone: vue2Dropzone
  },
  data() {
    return {
      showUploadModal: false,
      importDropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { "My-Awesome-Header": "header value" }
      }
    };
  }
};
</script>

<style>


.product {
  background-color: #e1e1e1;
}

.btn {
  width: 100%;
}

.selected{
  border: 1px solid #218838 !important;
}

</style>
<template>
  <div class="payment-details-wrapper p-3 text-sm-xm">
    <Stepper :steps="2" :currentStepIndex="2" />
    <div class="thanks-message-wrapper mb-4 mt-4 text-center">
      <div>
        <i class="text-success thanks__icon mb-2 fal fa-check-circle"></i>
      </div>
      <div class="thanks-message text-success">Thanks for shopping with us</div>
    </div>
    <div class="payment-details-summary mb-4 mt-4 text-sm-mobile">
      <div class="row">
        <div class="col-6">
          <div class="number-orderdate-wrapper">
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
            <div class="order-status">
              <span>
                <span class="text-bold">Status:</span>
                <span class="text-danger">Pending Payments</span>
              </span>
            </div>
          </div>
        </div>
        <div class="col-6 text-right">
          <span class="text-success text-bold text-lg">฿ 640.00</span>
        </div>
      </div>
    </div>
    <hr />
    <div class="operation-steps mb-4 mt-4">
      <h5 class="header-sm-mobile">An Operation</h5>
      <ul class="operations clearfix text-sm-mobile">
        <li class="mb-3">
          <div class="operation-wrapper d-flex align-items-center">
            <div>
              <i class="operation__icon text-success mb-2 fal fa-check-circle"></i>
            </div>
            <div class="operation__text ml-2">
              <div class="operation__name">
                <span>Order</span>
              </div>
              <div class="operation__date">
                <span class="text-sm text-secondary">2020-05-03 13:05:56</span>
              </div>
            </div>
          </div>
        </li>
        <li class="mb-3">
          <div class="operation-wrapper d-flex align-items-center">
            <div>
              <i class="operation__icon fal fa-circle text-success"></i>
            </div>
            <div class="operation__text ml-2">
              <div class="operation__name">
                <span>Waiting Review</span>
              </div>
              <div class="operation__date">
                <span class="text-sm text-secondary">2020-05-03 13:05:56</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <hr />
    <div class="product-list mb-4 mt-4">
      <h5 class="header-sm-mobile">Product List</h5>
      <div class="products text-sm-mobile">
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
      <div class="price-details text-right text-sm-mobile">
        <div>
          <div class="cost-of-goods">Cost of Goods: ฿ 590.00</div>
          <div class="delivery-charge">Delievery Fee: ฿ 590.00</div>
          <div class="total text-bold">Total: ฿ 590.00</div>
        </div>
      </div>
    </div>
    <hr />
    <div class="shipping-information mb-4 mt-4 text-sm-mobile">
      <h5 class="header-sm-mobile">Shipping information</h5>
      <div class="card mt-3">
        <div class="card-body">
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
    <hr />
    <div class="payment-notification mb-4 mt-4">
      <h5 class="header-sm-mobile">Payment Notification</h5>
      <div class="payment-slip-wrapper text-center">
        <img
          class="payment-slip"
          src="https://i.pinimg.com/originals/8b/1a/03/8b1a03731976a8bffd52a9aac98e1a58.png"
          alt
        />
      </div>
    </div>
    <div class="fixed-footer p-2">
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
    </div>

    <!-- Modal -->
  </div>
</template>

<script>
import Stepper from "@/components/core/Stepper.vue";

export default {
  components: { Stepper }
};
</script>

<style scoped lang="scss">
.selected {
  border-color: #218838;
}

.product {
  background-color: #e1e1e1;
}

.btn {
  width: 100%;
}

.payment-slip {
  height: 400px;
  max-width: 100%;
}

.thanks__icon {
  font-size: 60px;
}

ul {
  list-style: none;
  padding: 0;
}

.operation__icon {
  font-size: 24px;
}

.-modal-open .fixed,
.-modal-open .content {
  overflow-y:scroll;
}

.buyer-container{
  background-color: white;
}
</style>
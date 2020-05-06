<template>
  <div class="payment-details-wrapper p-3">
    <div class="payment-details-summary mb-4 mt-4">
      <div class="row">
        <div class="col-6">
          <div class="number-orderdate-wrapper">
            <table>
              <tr>
                <th>Order#:</th>
                <td>#0R00041445</td>
              </tr>
              <tr>
                <th>Date:</th>
                <td>2020-05-03</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="col-6 text-right">฿ 640.00</div>
      </div>
    </div>
    <div class="payment-method mb-4 mt-4">
      <h6>Choose a payment method</h6>
      <label class="card mt-1 mb-1 pointer">
        <div class="card-body p-3 selected">
          <div class="text-bold">
            <input type="radio" name="method" id="method" value="transfer" class="mr-1" />
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">Transfer money</font>
            </font>
          </div>
        </div>
      </label>
    </div>
    <div class="product-list mb-4 mt-4">
      <h6>Product List</h6>
      <div class="products">
        <div class="product p-3 mb-3">
          <div class="row pr-2">
            <div class="col-2 text-left">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfqP7d5KfnDuavP1WcqrrSwdFUw2CMmZ5U1Bla18ryilngE_Sz&usqp=CAU"
                class="rounded"
                style="max-height: 100px; max-width: 100%;margin-top: 5px;"
              />
            </div>
            <div class="col-4 d-flex align-items-center">
              <div class="product-name font-weight-bold">Courier 1 KG</div>
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfqP7d5KfnDuavP1WcqrrSwdFUw2CMmZ5U1Bla18ryilngE_Sz&usqp=CAU"
                class="rounded"
                style="max-height: 100px; max-width: 100%;margin-top: 5px;"
              />
            </div>
            <div class="col-4 d-flex align-items-center">
              <div class="product-name font-weight-bold">Courier 2 KG</div>
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfqP7d5KfnDuavP1WcqrrSwdFUw2CMmZ5U1Bla18ryilngE_Sz&usqp=CAU"
                class="rounded"
                style="max-height: 100px; max-width: 100%;margin-top: 5px;"
              />
            </div>
            <div class="col-4 d-flex align-items-center">
              <div class="product-name font-weight-bold">Courier 3 KG</div>
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
      <div class="price-details text-right">
        <div>
          <div class="cost-of-goods">Cost of Goods: ฿ 590.00</div>
          <div class="delivery-charge">Delievery Fee: ฿ 590.00</div>
          <div class="total text-bold">Total: ฿ 590.00</div>
        </div>
      </div>
    </div>
    <div class="shipping-information mb-4 mt-4">
      <h6>Shipping information</h6>
      <div class="card mt-3">
        <div class="card-body text-sm">
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
            class="mb-2 btn btn-md btn-outline-success"
          >Share This Page / Make Payment Later</button>
        </div>
        <div class="col-md-6">
          <button type="button" class="mb-2 btn btn-outline-success">Back To Shop</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Stepper from "@/components/core/Stepper.vue";

export default {
  components: {}
};
</script>

<style scoped>
.selected {
  border-color: #218838;
}

.product {
  background-color: #e1e1e1;
}

.btn {
  width: 100%;
}
</style>
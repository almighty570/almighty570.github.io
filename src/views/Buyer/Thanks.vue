<template>
  <div class="payment-details-wrapper text-sm">
    <div class="card success-card">
      <div class="status-icon bg-success text-center">
        <i class="far fa-check"></i>
      </div>
      <div class="success-message text-center">
        <h5>Thank You</h5>
        <span>Your orders are under way</span>
      </div>
      <div class="order-status bg-warning"><span class="font-weight-bold">Status:</span> Payment Pending</div>
    </div>
    <div class="payment-detail">
      <div class="card payment-detail-card">
        <div class="number-date-wrapper">
          <div class="row">
            <div class="col-7">
              <div class="number">
                <span>
                  <span class="is-brand">Number:</span> #0R00041445
                </span>
              </div>
              <div class="order-date">
                <span>
                  <span class="is-brand">Order Date:</span> 3rd May,’2020
                </span>
              </div>
            </div>
            <div class="col-5">
              <div class="total-price is-brand text-right">฿ 640.00</div>
            </div>
          </div>
        </div>
        <div class="product-list">
          <div class="product">
            <div class="row">
              <div class="col-4 col-md-2 align-items-center d-flex">
                <div class="product__image-wrapper">
                  <img
                    class="product__image"
                    src="https://bankpig1995.onepage.sale/storage/app/images/584/202004165e988b4ecd38a.jpg"
                    alt
                  />
                </div>
              </div>
              <div class="col-4 col-md-8 align-items-center d-flex">
                <div class="product__name">1 x Dried Pork 1k.g</div>
              </div>
              <div
                class="col-4 col-md-2 align-items-center d-flex text-right text-brand justify-content-end"
              >
                <span class="is-brand">฿ 590.00</span>
              </div>
            </div>
          </div>
          <div class="product">
            <div class="row">
              <div class="col-4 col-md-2 align-items-center d-flex">
                <div class="product__image-wrapper">
                  <img
                    class="product__image"
                    src="https://bankpig1995.onepage.sale/storage/app/images/584/202004165e988b4ecd38a.jpg"
                    alt
                  />
                </div>
              </div>
              <div class="col-4 col-md-8 align-items-center d-flex">
                <div class="product__name">1 x Dried Pork 1k.g</div>
              </div>
              <div
                class="col-4 col-md-2 align-items-center d-flex text-right text-brand justify-content-end"
              >
                <span class="is-brand">฿ 590.00</span>
              </div>
            </div>
          </div>
          <div class="product">
            <div class="row">
              <div class="col-4 col-md-2 align-items-center d-flex">
                <div class="product__image-wrapper">
                  <img
                    class="product__image"
                    src="https://bankpig1995.onepage.sale/storage/app/images/584/202004165e988b4ecd38a.jpg"
                    alt
                  />
                </div>
              </div>
              <div class="col-4 col-md-8 align-items-center d-flex">
                <div class="product__name">1 x Dried Pork 1k.g</div>
              </div>
              <div
                class="col-4 col-md-2 align-items-center d-flex text-right text-brand justify-content-end"
              >
                <span class="is-brand">฿ 590.00</span>
              </div>
            </div>
          </div>
        </div>
        <div class="product__cost-wrapper">
          <div class="row">
            <div class="col-4 text-left">
              <div class="product-cost-type">
                <span class="is-brand">SubTotal</span>
              </div>
              <div class="cost">฿ 640.00</div>
            </div>
            <div class="col-4 text-center">
              <div class="product-cost-type">
                <span class="is-brand">Delievery</span>
              </div>
              <div class="cost">฿ 640.00</div>
            </div>
            <div class="col-4 text-right">
              <div class="product-cost-type">
                <span class="is-brand">Total</span>
              </div>
              <div class="cost">฿ 640.00</div>
            </div>
          </div>
        </div>
        <div class="shipping-infos-wrapper">
          <span class="is-brand">Shipping Info</span>
          <div class="shipping-infos">
            <div class="row">
              <div class="col-6">
                <div class="location d-flex align-items-center">
                  <div class="shipping-info-icon">
                    <i class="fal fa-map-marker-alt is-brand"></i>
                  </div>
                  <span class="location">Whereabouts, Tha Raeng, Bang Khen, Bangkok 10220</span>
                </div>
              </div>
              <div class="col-6">
                <div class="phone d-flex justify-content-end align-items-center">
                  <div class="shipping-info-icon">
                    <i class="fal fa-phone is-brand"></i>
                  </div>
                  <span class="phone">0900000003</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cta-buttons">
        <button class="btn btn-block payment-details-btn --inverted">BACK TO SHOP</button>
        <button class="btn btn-block payment-details-btn">PAY LATER</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$brand-color: #6a7c90;

* {
  font-family: "Cabin";
}

.status-icon{
  width: 44px;
  height: 44px;
  font-size: 24px;
  border-radius: 50%;
  padding: 4px;
  position: absolute;
  top: -20px;
    left: 50%;
  transform: translate(-50%, 0);
}

.order-status {
  padding: 6px;
  width: 80%;
  text-align: center;
  border-radius: 5px;
  left: 50%;
  transform: translate(-50%, 0);
  position: absolute;
  bottom: -10px;
  height: 30px;
}

.success-card {
  position: relative;
  padding: 30px 0 !important;
  min-height: 110px;
  margin-bottom: 30px;
}

.is-brand {
  color: $brand-color;
}

.total-price {
  font-size: 24px;
}

.payment-detail-card {
  margin-bottom: 30px;
}

.card {
  border-radius: 5px;
  padding: 20px;
  border-radius: 20px;
}

.payment-details-wrapper {
  padding: 30px 0;
}

.payment-method-icon {
  &.--detail {
    margin-right: 12px;
  }
}

.number-date-wrapper {
  margin-bottom: 30px;
}

.product__image {
  width: 80px;
  height: 80px;
}

.shipping-infos-wrapper {
  border-top: 1px solid #d0cde1;
  padding-top: 10px;
}

.shipping-infos {
  margin-top: 10px;
}

.product {
  margin-bottom: 15px;
}

.product__cost-wrapper {
  margin: 25px 0;
}

.shipping-info-icon {
  margin-right: 10px;
}

.payment-details-btn {
  background-color: $brand-color;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;

  &.--inverted {
    border: 1px solid $brand-color;
    color: $brand-color;
    background-color: #fff;

    &:hover {
      background-color: $brand-color;
      color: #fff;
    }
  }
}
</style>
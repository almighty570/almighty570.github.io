<template>
  <div>
    <!-- Variation Information -->
    <div class="row">
      <div class="col-md-12">
        <label>Variation Information</label>
        <br />
        <div class="d-flex">
          <TextBox
            id="variation-info-1"
            type="text"
            v-model="variationInfo.price"
            placeholder="Price"
            wrapper_class="mr-1 mb-0"
          />
          <TextBox
            id="variation-info-2"
            type="text"
            v-model="variationInfo.stock"
            placeholder="Stock"
            wrapper_class="mr-1  mb-0"
          />
          <TextBox
            id="variation-info-3"
            type="text"
            v-model="variationInfo.sku"
            placeholder="SKU"
            wrapper_class="mr-1  mb-0"
          />
          <Button
            id="btn-apply-all"
            :variant="'outline-' + color_scheme"
            custom_class="align-self-center text-nowrap"
            @click="applyToAll()"
          >Apply to all</Button>
        </div>
      </div>
    </div>

    <hr />

    <!-- Variation List -->
    <div class="variation-list">
      <div
        class="variation-list-item d-flex flex-column flex-md-row mt-2 mb-2"
        v-for="(variation, index) in variations"
        :key="index"
      >
        <div class="variation-count align-self-center pr-3 pl-2 text-center">
          <!-- Mobile -->
          <div class="d-block d-md-none">
            <span class="float-left">Variation {{index + 1}}</span>

            <Button
              variant="outline-primary"
              custom_class="--circle ml-3 float-left"
              @click="removeVariation(index)"
            >
              <i class="fal fa-times"></i>
            </Button>
          </div>

          <!-- Desktop -->
          <div class="d-none d-sm-block">
            <Button
              variant="outline-primary"
              custom_class="--circle"
              @click="removeVariation(index)"
            >
              <i class="fal fa-times"></i>
            </Button>
            <br />Variation
            <br />
            {{index+1}}
          </div>
        </div>

        <div class="mb-2 d-block d-md-none"></div>

        <div class="variation-details">
          <TextBox
            type="text"
            :id="'variation-name-' + index"
            v-model="variations[index].name"
            placeholder="Enter Variation Name"
          />

          <div class="variation-options-list d-flex flex-column">
            <div
              class="variation-options-list-item d-flex"
              v-for="(option, index2) in variation.options"
              :key="index2"
            >
              <TextBox
                type="text"
                :id="'variation-' + index + '-option-name-' + index2"
                v-model="variations[index].options[index2].name"
                placeholder="Option"
                wrapper_class="mr-2"
              />

              <TextBox
                type="text"
                :id="'variation-' + index + '-option-price-' + index2"
                v-model="variations[index].options[index2].price"
                placeholder="Price"
                wrapper_class="mr-2"
              />

              <TextBox
                type="text"
                :id="'variation-' + index + '-option-stock-' + index2"
                v-model="variations[index].options[index2].stock"
                placeholder="Stock"
                wrapper_class="mr-2"
              />

              <TextBox
                type="text"
                :id="'variation-' + index + '-option-sku-' + index2"
                v-model="variations[index].options[index2].sku"
                placeholder="SKU"
                wrapper_class="mr-2"
              />

              <Button
                variant="default"
                custom_class="align-self-start ml-2"
                @click="removeVariationOption(index, index2)"
              >
                <i class="fal fa-trash-alt"></i>
              </Button>
            </div>

            <div class="mt-1 mb-1">
              <Button
                :variant="'outline-' + color_scheme"
                size="sm"
                @click="addVariationOption(index)"
              >
                <i class="fal fa-plus mr-2"></i>
                Add new option
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mt-3 mb-3">
      <Button :variant="'outline-' + color_scheme" @click="addVariation()">
        <i class="fal fa-plus mr-2"></i> Add new variation
      </Button>
    </div>
  </div>
</template>

<script>
import Button from "@/components/core/Button.vue";
import TextBox from "@/components/core/TextBox.vue";

export default {
  name: "ProductVariation",
  props: {
    color_scheme: String,
    value: Array
  },
  components: {
    Button,
    TextBox
  },

  data() {
    return {
      variations: [],
      variationInfo: {
        price: null,
        stock: null,
        sku: null
      }
    };
  },

  created() {
    if (this.value) this.variations = this.value;
    else this.addVariation();
  },

  methods: {
    addVariation() {
      this.variations.push({
        name: null,
        options: []
      });
      this.addVariationOption(this.variations.length - 1);
    },
    removeVariation(variationIndex) {
      this.variations.splice(variationIndex, 1);
    },
    addVariationOption(variationIndex) {
      this.variations[variationIndex].options.push({
        name: null,
        price: null,
        stock: null,
        sku: null
      });
    },

    removeVariationOption(variationIndex, optionIndex) {
      this.variations[variationIndex].options.splice(optionIndex, 1);
    },

    applyToAll() {
      // apply variation information to all variations
      this.variations.forEach(variation => {
        variation.options.forEach(option => {
          if (this.variationInfo.price) option.price = this.variationInfo.price;
          if (this.variationInfo.stock) option.stock = this.variationInfo.stock;
          if (this.variationInfo.sku) option.sku = this.variationInfo.sku;
        });
      });
    },

    emitInnput() {
      this.$emit("input", this.variations);
    }
  }
};
</script>

<style lang="scss" scoped>
.variation-list {
  .variation-list-item {
    border-bottom: 1px solid lightgrey;
    padding: 0.5rem;
    .variation-count {
      font-family: "Roboto Condensed", sans-serif;
      font-size: 24px;
    }

    .variation-details {
      .variation-options-list {
        border: 1px dotted lightgrey;
        padding: 0.5rem;
      }
    }
  }
}
</style>
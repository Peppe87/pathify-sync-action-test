<template>
  <div>
    <div id="app">
      <input type="checkbox" id="checkbox" v-model="shippingWarranty">
      <label for="checkbox">Activate order's special warranty</label>
    </div>
  </div>
</template>

<script>
import { sync } from "vuex-pathify";

export default {
  computed: {
    shippingWarranty: sync(
      "order/order@shippingWarranty|order/setOrderShippingWarranty"
    )
    /*
    This is the "standard" vuex 2 ways data binding I'm actually using 
    in the project
    order() {
       return this.$store.getters["order/order"];
    },
     shippingWarranty: {
      get() {
        return this.order.shippingWarranty;
      },
      async set(value) {
        await this.$store.dispatch("order/setOrderShippingWarranty", {
          value: value,
          uuid: this.order.uuid
        });
      }
    }
    */
  }
};
</script>
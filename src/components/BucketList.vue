<template>
  <div class="bucket-list">
    <div class="icon">
      <div class="icon--container" @click="toggleVisible">
        <img class="logo__icon" src="../../src/images/cart.png" alt="Cart icon" width="4" height="6">
        <div v-if="cartStore.cartLength > 0" class="chip">
          {{ cartStore.cartLength }}
        </div>
      </div>
    </div>

    <div v-show="isActive" class="bucket-list__bill">
        <div>
          {{ cart.length > 0 ? '' : "The cart is empty"}}
        </div>
        <div v-for="(item, id) in cart" :key="id">
          <BucketListItem
              url="item.url"
              :name="item.name"
              :price="item.price"
              class="bucket__item"
              @removeFromCart="cartStore.deleteFromCart(cart, id)"
          />
        </div>

        <div v-if="cartStore.sumTotal" class="total">
          Total sum: {{ cartStore.sumTotal }}
        </div>
        <div v-if="cartStore.cartLength > 0" class="buttons">
          <button @click="cartStore.deleteAll()" class="button-clean">
            <i class="mdi mdi-trash-can-outline"></i>
          </button>
          <button class="button-order" @click="makeOrder">
            Order
          </button>
        </div>
    </div>

  </div>
</template>

<script>
import { ref } from 'vue'
import { storeToRefs } from "pinia/dist/pinia";
import { useCartStore } from "../stores/cart";
import BucketListItem from "./BucketListItem";

export default {
  name: "BucketList",
  components: { BucketListItem },
  props: {},
  setup(props, { emit }) {
    const cartStore = useCartStore()

    const { cart } = storeToRefs(cartStore)

    const isActive = ref(false)

    const toggleVisible = () => {
      isActive.value = !isActive.value
    }

    const makeOrder = () => {
      isActive.value = false;
      emit('makeOrder')
    }

    return {
      cartStore,
      cart,
      isActive,

      makeOrder,
      toggleVisible
    };
  },
}
</script>

<style scoped>
.mdi {
  border: none;
  background: transparent;
  padding: 0;
  font-size: 25px;
  color: #f12f63;
}

.mdi:hover{
  color: #750624;
  cursor: pointer;
}

.button-clean {
  background: none;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.button-order {
  padding: 10px 10px;
  border-radius: 7px;
  background-color: #3db449;
  box-shadow: 0 0 2px 0 #888888;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  margin-top: 20px;
}

.button-order:hover {
  background-color: #3E8E41;
  cursor: pointer;
}

.bucket-list{
  max-width: 170px;
}

.icon--container{
  position: relative;
  display: flex;
  align-items: flex-end;
}

.logo__icon{
  width: 30%;
}

.bucket-list__bill{
  position: absolute;
  margin-top: 5px;
  border-radius: 15px;
  background-color: #ffffff;
  padding: 2px 10px;
  box-shadow: 0 0 1px 0 #888888;
}

.chip{
  background-color: #ceba75;
  font-size: 14px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  text-align: center;
  padding: 5px;
  line-height: 10px;
  margin-left: 1px;
}

.total {
  display: flex;
  justify-content: flex-start;
  padding: 4px;
  border-top: 1px solid #ccc;


}

.bucket__item:hover{
  background-color: #cccccc;
  border-radius: 10px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 4px;
}

</style>
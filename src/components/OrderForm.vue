<template>
  <div class="form">
    <span class="form__title"> Make an order</span>
    <div class="form__position">
      <span> {{ currentOrder.name }}  </span>
      <span> {{ currentOrder.price }} </span>
    </div>
    <hr>

    <div class="form__address">
      <span> Address </span>
      <div class="inp">
        <input v-model="deliveryData.street" class="form__address-input" type="text"  placeholder="Street" :required="!isValidForm">
        <input v-model="deliveryData.house" class="form__address-input" type="text"  placeholder="House" :required="!isValidForm">
        <input v-model="deliveryData.floor" class="form__address-input" type="text"  placeholder="Floor" :required="!isValidForm">
        <input v-model="deliveryData.entrance" class="form__address-input" type="text"  placeholder="Entrance" :required="!isValidForm">
        <input v-model="deliveryData.doorCode" class="form__address-input" type="text"  placeholder="Door code">
        <input v-model="deliveryData.email" class="form__address-input email" type="text"  placeholder="E-mail" :required="!isValidForm">
      </div>
    </div>

    <div class="form__buttons">
      <button class="form__button form__button-back" @click="closeOrderForm"> Назад </button>
      <button
          class="form__button form__button-order"
          :disabled="!isValidForm"
          @click="closeOrderForm"
      >
        Заказать
      </button>
    </div>

  </div>
</template>

<script>
import { reactive, computed,  } from "vue";
import { useCartStore } from "../stores/cart";

export default {
  name: "OrderForm.vue",
  props: {
    currentOrder: Object
  },
  setup(props, { emit }) {
    const cartStore = useCartStore()

    let deliveryData = reactive({
      street: '',
      house: '',
      entrance: '',
      doorCode: '',
      floor: '',
      email: ''
    })

    const isValidForm = computed(() => {
      return Boolean(
        deliveryData.street &&
        deliveryData.house &&
        deliveryData.entrance &&
        deliveryData.floor &&
        deliveryData.email
      );
    });

    const closeOrderForm = () => {
      cartStore.deleteAll()
      emit('close')
    }

    return {
      cartStore,
      deliveryData,
      isValidForm,

      closeOrderForm
    };
  },
}
</script>

<style scoped>
.form {
  background-color: #f6f3ef;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 2px rgba(0,0,0,0.5);
}

.form__title {
  font-size: 2rem;
  font-weight: bold;
  padding: 0.3rem;
}

.form__position {
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
}

hr {
  width: 100%;
  background-color: #7c7676;
  height: 1px;
  border-color: #7c7676;
}

.form__address {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1.5rem;
}

.inp {
  display: flex;
  flex-direction: column;
  width: 65%
}

.form__address-input {
  height: 2.5rem;
  font-weight: bold;
  border-radius: 12px;
  margin-bottom: 0.3rem;
  border: 1px solid #afa4a4;
  padding: 0.5rem 5px;
}

.form__address-input[required] {
  border: 1px solid #ef0909;
}

.email {
  margin-top: 10px;
}

.form__buttons {
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
}

.form__button {
  border: 0;
  border-radius: 0.3rem;
  font-size: 1rem;
  padding: 0.5rem;
  width: 20%;
  height: 30%;
  cursor: pointer;
}

.form__button-back {
  background-color: #f12f63;
  color: azure;
  margin-top: auto;
}

.form__button-order {
  background-color: #42b983;
  color: azure;
  margin-top: auto;
}

.form__button-order:disabled {
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}

@media screen and (max-width : 770px) {
  .form {
    height: 80%;
    width: 80%;
    margin: 0.5rem;
  }
  .form__address {
    font-weight: bold;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
  }

  .address input {
    height: 2rem;
    font-weight: bold;
    border-radius: 0.6rem;
    margin-bottom: 0.4rem;
    border: 1px solid #afa4a4;
    padding: 0.4rem;
  }

  .inp {
    width: 100%;
  }

  .form__button {
    width: 35%;
  }
}

@media screen and (max-width : 254px) {
  .form__button {
    width: 40%;
  }
}

/*Стилизация горизонтального отображения*/

@media screen and (orientation: landscape) {
  .form {
    padding: 0.5rem;
    margin: 0.1rem;
  }

  .form__position {
    font-size: 1rem;
  }

  .form__address {
    font-size: 1rem;
  }

  .form__address-input {
    height: 1.5rem;
    border-radius: 0.8rem;
    margin-bottom: 0.3rem;
    border: 1px solid #afa4a4;
    padding: 0.3rem;
  }
}

@media screen and (max-width: 570px) and (orientation: landscape){
  .form {
    padding: 0.5rem;
    margin: 0.5rem;
  }

  .form__title {
    font-size: 1rem;
    margin-top: 0.1rem;
  }
}
</style>
<template>
  <div class="form">
    <h1> Make an order</h1>
    <div class="form__price">
      <span>{{currentOrder.name}}  </span>
      <span>{{currentOrder.price}}</span>
    </div>
    <hr>
    <div class="form__address">
      <span> Address </span>
      <div class="inp">
        <input class="form__address-input" type="text"  placeholder="Street">
        <input class="form__address-input" type="text"  placeholder="House">
        <input class="form__address-input" type="text"  placeholder="Floor">
      </div>
    </div>
    <div class="buttons">
      <button class="form__button form__button-back" @click="closeOrderForm"> Назад </button>
      <button class="form__button form__button-order"> Заказать </button>
    </div>

  </div>
</template>

<script>
export default {
  name: "OrderForm.vue",
  props: {
    currentOrder: Object

  },
  methods: {
    closeOrderForm() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.form{
  background-color: #e7e2d2;
  height: 100%;
  width: 60%;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 1rem;

}

.form__price{
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
}

hr {
  width: 100%;
  background-color: #7c7676;
  height: 1px;
  border-color: #7c7676;
}

.form__address{
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1.5rem;
}

.form__address-input{
  height: 2.5rem;
  font-weight: bold;
  border-radius: 10px;
  margin-bottom: 0.3rem;
  border: 1px solid #afa4a4;
  padding: 0.5rem;
}

.inp{
  display: flex;
  flex-direction: column;
  width: 65%
}

.buttons{
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
}

.form__button {
  border: 0;
  border-radius: 0.3rem;
  font-size: 1rem;
  padding: 0.6rem;
  width: 20%;
  height: 30%;
  cursor: pointer;
}

.form__button-back{
  background-color: #f12f63;
  color: azure;
  margin-top: auto;

}

.form__button-order{
  background-color: #42b983;
  color: azure;
  margin-top: auto;
}

@media screen and (max-width : 770px) {
  .form{
    height: 80%;
    width: 80%;
    margin: 0.5rem;

  }
  .form__address{
    font-weight: bold;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
  }

  .address input{
    height: 2rem;
    font-weight: bold;
    border-radius: 0.6rem;
    margin-bottom: 0.4rem;
    border: 1px solid #afa4a4;
    padding: 0.4rem;
  }

  .inp{
    width: 100%;
  }

  .form__button {
    width: 30%;
  }
}

</style>
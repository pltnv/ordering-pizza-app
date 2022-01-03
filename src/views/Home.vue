<template >
  <div class="container">
    <ul class="items-list">
      <li v-for="(item, id) in items" :key="id" class="items-list__item">
        <a @click="openOrderForm(item)">
          <ItemCard class="item-list__card"
              :name="item.name"
              :price="item.price"
              :cover="item.url"
          >
          </ItemCard>
        </a>
        <OrderForm
            v-if="isOrderFormVisible"
            @close="isOrderFormVisible = false"
            class="order-modal"
            :currentOrder="currentOrder"
        ></OrderForm>
      </li>
    </ul>
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard";
import OrderForm from "@/components/OrderForm";

export default {
  name: 'Home',
  components: {
    ItemCard, OrderForm
  },

  data() {
    return {
      items: [
        {name: 'Margherita', price: 400, url: '1.png'},
        {name: 'Pepperoni', price: 450, url: '7.png'},
        {name: 'Quattro Forma', price: 490, url: '8.png'},
        {name: 'Frutti di Mare', price: 590, url: '4.png'},
        {name: 'Pineapple', price: 600, url: '6.png'},
        {name: 'Mushroom', price: 650, url: '5.png'},
        {name: 'Pear', price: 520, url: '2.png'},
        {name: 'Carbonara', price: 300, url: '3.jpg'},
        {name: 'Flexo Testironi', price: 900, url: '1.png'},
      ],
      isOrderFormVisible: false,
      currentOrder: '',
    }
  },
  methods: {
    openOrderForm(item) {
      this.isOrderFormVisible = true;
      this.currentOrder = item;
    },
  },
  // watch: {
  //   isOrderFormVisible(Value) {
  //     if (Value = 'true') {
  //       document.documentElement.style.overflow = "hidden"
  //     }
  //     else if (Value = 'false') { document.documentElement.style.overflow = "scroll"}
  //   }
  // }
}
</script>

<style scoped>


.order-modal{
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  height: auto;
  transform: translate(-50%, -50%);
  z-index: 100;
}

.items-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: 0.1rem;
  height: 100%;
  text-align:center
}

.items-list__item{
  margin: 1rem;
  list-style-type:none;
  width: 22%;
}

.item-list__card:hover{
  cursor: pointer;
}

@media (max-width: 1133px) {
  .order-modal {
    width: 80%;
  }

  .items-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    padding: 1rem;
    width: 100%;
  }

  .items-list__item {
    margin: 0.4rem;
    list-style-type: none;
    width: 45%;
  }
}

  @media (max-width: 304px) {
    .order-modal{
      width: 90%;
    }
    .items-list{
      padding: 1px;
      width: 100%;
    }
    .items-list__item{
      margin: 0.5rem;
      list-style-type:none;
      width: 100%;
    }
  }


/*Стилизация горизонтального отображения*/

@media screen and (orientation:landscape) {
  .order-modal{
    width: 75%;
  }
}

@media screen and (max-width: 570px) and (orientation: landscape) {
  .order-modal{
    top:49%;
    margin: 0.5rem;
    width: 75%;
  }
}

@media screen and (max-width: 840px) and (orientation: landscape) {
  .items-list__item{
    margin: 1rem;
    list-style-type:none;
    width: 29%;
  }
}

@media screen and (max-width: 753px) and (orientation: landscape) {
  .items-list__item{
    margin: 0.8rem;
    width: 28%;
  }
}

</style>

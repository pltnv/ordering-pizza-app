<template >
  <div class="container">
    <ul class="items-list">
      <li v-for="(item, id) in this.$store.state.items" :key="id" class="items-list__item">
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
  <div class="modal-overlay" v-if="isOrderFormVisible" @click="closeOrderForm"></div> 
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
      isOrderFormVisible: false,
      currentOrder: '',
    }
  },
  methods: {
    openOrderForm(item) {
      this.$router.push({query: {id: item.id}})
      this.isOrderFormVisible = true;
      this.currentOrder = item;

    },
    closeOrderForm() {
      this.isOrderFormVisible = false;
      this.$router.push('/');
    },
  },
  watch: {
    isOrderFormVisible (visibleStatus) {
      if (visibleStatus) document.documentElement.style.overflow = "hidden"
      else document.documentElement.style.overflow = "auto"
    },
  },
  mounted() {
    if (this.$route.query.id && this.$store.state.items[this.$route.query.id-1]) {
      this.currentOrder = this.$store.state.items[this.$route.query.id-1]
      this.isOrderFormVisible = true;
    } else {
      this.$router.push('/');
    }
  },
}
</script>

<style scoped>

.items-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: 0.4rem;
  height: 100%;
  text-align:center;
  z-index: 2;
  margin-block-start: 0;
  margin-block-end: 0;
}

.items-list__item{
  margin: 1rem;
  list-style-type:none;
  width: 22%;
}

.item-list__card:hover{
  cursor: pointer;
}

.order-modal{
  position: fixed;
  top: 50%;
  left: 48%;
  width: 80%;
  height: auto;
  transform: translate(-50%, -50%);
  z-index: 3;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.3);
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
    top:50%;
    margin: 0.5rem;
    width: 80%;
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

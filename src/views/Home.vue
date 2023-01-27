<template >
  <div class="bucket">
    <BucketList @makeOrder="isOrderFormVisible = true"/>
  </div>
  <div class="container">
    <ul class="items-list">
      <li v-for="(item, id) in menuStore.items" :key="id" class="items-list__item">
        <a>
          <ItemCard
              class="item-list__card"
              :name="item.name"
              :price="item.price"
              :cover="item.url"
              @addToCart="cartStore.addToCart(item)"
          ></ItemCard>
        </a>

          <OrderForm
            v-if="isOrderFormVisible"
            @close="closeOrderForm"
            class="order-modal"
            :currentOrder="currentOrder"
          ></OrderForm>
      </li>
    </ul>
  </div>
  <div class="modal-overlay" v-if="isOrderFormVisible" @click="closeOrderForm"></div>
</template>

<script>
import { ref, watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useMenuStore } from "../stores/menu";
import { useCartStore } from "../stores/cart";
import ItemCard from "@/components/ItemCard";
import OrderForm from "@/components/OrderForm";
import BucketList from "@/components/BucketList";

export default {
  name: 'Home',
  components: {
    ItemCard, OrderForm, BucketList
  },
  setup(props, ctx) {
    const router = useRouter()
    const route = useRoute()
    const menuStore = useMenuStore()
    const cartStore = useCartStore()

    let isOrderFormVisible = ref(false)
    let currentOrder = ref('')

    const openOrderForm = (item) => {
      router.push({query: {id: item.id}})
      isOrderFormVisible.value = true;
      currentOrder.value = item;
    }

    const closeOrderForm = () => {
      router.push('/');
      isOrderFormVisible.value = false;
      currentOrder.value = '';

    }

    watch(isOrderFormVisible, (visibleStatus) => {
      visibleStatus ? document.documentElement.style.overflow = "hidden" : document.documentElement.style.overflow = "auto"
    });

    onMounted(() => {
      if (route.query.id && menuStore.items[route.query.id-1]) {
        currentOrder.value = menuStore.items[route.query.id-1]
        isOrderFormVisible.value = true;
      }
      router.push('/');
    })

    return {
      menuStore,
      cartStore,
      isOrderFormVisible,
      currentOrder,

      openOrderForm,
      closeOrderForm,

    };
  },
}
</script>

<style scoped>
.bucket {
  display: flex;
  justify-content: flex-end;
}

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
    .order-modal {
      width: 90%;
    }

    .items-list {
      padding: 1px;
      width: 100%;
    }

    .items-list__item {
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

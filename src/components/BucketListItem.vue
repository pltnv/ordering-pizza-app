<template>
  <div class="bucket-list__item">
    <span class="bucket-list--name"> {{ name }} </span>
    <span class="bucket-list--price"> {{ price }} </span>

    <button class="remove" @click="removeFromCart">
      <i class="mdi mdi-close-thick"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "BucketListItem",
  props: {
    name: String,
    price: Number,
    url: String
  },
  setup(props, { emit }) {
    const removeFromCart = () => {
      emit('removeFromCart')
    }
    return {
      removeFromCart
    };
  },
}
</script>

<style scoped>
.mdi {
  border: none;
  background: transparent;
  padding: 0;
}

.bucket-list__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
}

.bucket-list--price {
  padding-left: 4px;
  font-weight: lighter;
}

button {
  background: none;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.remove {
  margin-left: auto
}
</style>
<template>
  <div class="card">
    <div>
      <img class="card__cover" alt="Pizza image" :src="require(`../images/${ cover }`)" >
    </div>

    <span class="card__name"> {{ name }} </span>
    <span class="card__price">
      Price:
      <span> {{ price }} ₽ </span>
    </span>

    <button class="card__button" @click="addToCart"> Add to cart </button>
  </div>
</template>

<script>
export default {
  name: "ItemCard.vue",
  props: {
    name: String,
    price: Number,
    cover: String,
  },
  setup(props, { emit }) {
    const addToCart = () => {
      emit('addToCart')
    }

    return {
      addToCart,
    };
  },
}
</script>

<style scoped>
.card {
  background-color: #f6f3ef;
  height: 90%;
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 3px 0 #888888;
}

.card__cover {
  height:100%;
  width: 100%;
}

.card__name {
  text-align: start;
  font-size: 2rem;
  color: rgb(187, 149, 108);
  font-weight: bold;
  max-width:100%;
  white-space: nowrap;
}

.card__price {
  text-align: justify;
  font-size: 1.4rem;
  color: #7c7676;
  width: 90%;
}


.card__button {
  padding: 10px 20px;
  border-radius: 15px;
  background-color: #3db449;
  box-shadow: 0 0 2px 0 #888888;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  margin-top: 20px;
}

.card__button:hover {
  background-color: #3E8E41;
  cursor: pointer;
}

@media screen and (max-width : 728px) {
  .card {
    font-size: 1rem;
    padding: 0.5rem;
    white-space: nowrap;
  }

  .card__price {
    font-size: 1rem;
    max-width: 100%;
  }

  .card__name {
    font-size: 1.2rem;
    max-width: 100%;
  }
}

@media screen and (max-width : 728px) {
  .card__price {
    font-size: 0.7rem;
    max-width: 100%;
  }

  .card__name {
    font-size: 1rem;
    max-width: 100%;
  }
}

/*Стилизация горизонтального отображения*/

@media screen and (max-width: 840px) and (orientation: landscape) {
  .card__name {
    font-size: 1.4rem;
  }

  .card__price {
    font-size: 1rem;
  }
}


@media screen and (max-width: 753px) and (orientation: landscape) {
  .card__name {
    font-size: 1.2rem;
  }

  .card__price {
    font-size: 1rem;
  }
}
</style>
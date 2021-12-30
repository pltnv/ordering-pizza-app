<template>
  <div class="card">
    <div><img class="card__cover"  :src="require(`../images/${cover}`)" alt="Pizza image"></div>
    <span class="card__name">{{name}}</span>
    <span class="card__price">Price:
      <span>{{price}} ₽</span>
    </span>
  </div>
</template>

<script>
export default {
  name: "ItemCard.vue",
  props: {
    name: String,
    price: Number,
    cover: String,
  }
}

</script>

<style scoped>
.card{
  background-color: #fdddb8;
  height: 90%;
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 1rem;
}

.card__cover{
  height:100%;
  width: 100%;
}

.card__name{
  text-align: start;
  font-size: 2rem;
  color: rgb(187, 149, 108);
  font-weight: bold;
  max-width:100%;
  white-space: nowrap;
}

.card__price{
  font-weight: bold;
  text-align: justify;
  font-size: 1.4rem;
  color: #7c7676;
  width: 90%;
}

@media screen and (max-width : 728px) {
  .card{
    font-size: 1rem;
    padding: 0.5rem;
    white-space: nowrap;
  }

  .card__price{
    font-size: 1rem;
    max-width: 100%;
  }

  .card__name{
    font-size: 1.2rem;
    max-width: 100%;
  }
}

@media screen and (max-width : 728px) {
  .card__price{
    font-size: 0.7rem;
    max-width: 100%;
  }

  .card__name{
    font-size: 1rem;
    max-width: 100%;
  }
}

/*Стилизация горизонтального отображения*/

@media screen and (max-width: 840px) and (orientation: landscape) {
  .card__name{
    font-size: 1.4rem;
  }

  .card__price{
    font-size: 1rem;
  }
}


@media screen and (max-width: 753px) and (orientation: landscape) {
  .card__name{
    font-size: 1.2rem;
  }

  .card__price{
    font-size: 1rem;
  }
}
</style>
import { defineStore } from "pinia";
import { computed, reactive } from "vue";

export const useCartStore = defineStore("cart", () => {
    let cart = reactive([])

    const addToCart = (item) => {
        cart.push(item)
    }

    const deleteFromCart = (cart, index) => {
        cart.splice(index, 1)
    }

    const deleteAll = () => {
        cart.splice(0,cart.length)
    }

    const sumTotal = computed(() => {
        let initialValue = 0;
        return cart.reduce(
            (accumulator, currentValue) => accumulator + currentValue.price,
            initialValue
        );
    })

    const getCart = computed(() => cart)

    const cartLength = computed(() => cart.length)

    return {
        cart,
        getCart,
        sumTotal,
        cartLength,

        addToCart,
        deleteFromCart,
        deleteAll,
    };
});

import { defineStore } from "pinia";
import { reactive } from "vue";

export const useMenuStore = defineStore("menu", () => {
    const items = reactive([
        {name: 'Margherita', id: 1, price: 400, url: '1.png'},
        {name: 'Pepperoni', id: 2, price: 450, url: '7.png'},
        {name: 'Quattro Forma', id: 3, price: 490, url: '8.png'},
        {name: 'Frutti di Mare', id: 4, price: 590, url: '4.png'},
        {name: 'Pineapple', id: 5,price: 600, url: '6.png'},
        {name: 'Mushroom', id: 6, price: 650, url: '5.png'},
        {name: 'Pear', id: 7, price: 520, url: '2.png'},
        {name: 'Carbonara', id: 8, price: 300, url: '3.jpg'},
        {name: 'Flexo Testironi', id: 9, price: 900, url: '1.png'},
    ])

    return { items };
});

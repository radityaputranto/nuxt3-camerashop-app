import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
    state: () => ({
        menu: [
            {
                name: 'camshop',
                icon: 'computer',
                url: '/camshop'
            },
            {
                name: 'pinia',
                icon: 'more_time',
                url: '/pinia'
            },
            {
                name: 'counter',
                icon: 'more_time',
                url: '/counter'
            },
        ],
    }),
    getters: {
        getMenu: (state) => state.menu,
    },
    actions: {
        increment() {
            this.count++
        },
    },
})
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            { id: 1, title: "buy somemilk", isFav: false },
            { id: 2, title: "play Gloomhaven", isFav: true },
            { id: 3, title: "play CS", isFav: true }
        ],
        name: 'Radit'
    }),
    //getter using for manipulating object
    getters: {
        favs() {
            return this.tasks.filter(t => t.isFav);
        },
        favCount() {
            return this.tasks.reduce((p, c) => {
                return c.isFav ? p + 1 : p
            }, 0)
        },
        totalCount: (state) => {
            return state.tasks.length
        },
    }
});
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            { id: 1, titke: "buy somemilk", isFav: false },
            { id: 2, titke: "play Gloomhaven", isFav: true }
        ],
        name: 'yoshi'
    })
});
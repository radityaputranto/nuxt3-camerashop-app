export default defineEventHandler(async (event) => {

    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_3h0APtR2zYjdeq9CjCQkb7WSQVZh0DPBTTiIdkO8')

    return { data }
});
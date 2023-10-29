<template>
    <div>
        <h1 class="font-bold">Products</h1>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="item in products">
                <ProductCard :product="item"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    });

    // fetch the products
    const {data: products} = await useFetch('https://fakestoreapi.com/products')

    useHead({
        title: 'Nuxt Merch',
        meta : [
            {
                name: 'description', content:'camshop product list'
            }
        ]
    });
</script>

<style scoped>
</style>
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
        layout: 'camshop'
    });

    // fetch the products
    const {data: products} = await useFetch('https://fakestoreapi.com/products')
    
    useHead({
        title: 'Learn Nuxt3',
        meta : [
            {
                name: 'description', content:'learn nuxt3 by Raditya Putranto'
            }
        ]
    });
</script>

<style scoped>
</style>
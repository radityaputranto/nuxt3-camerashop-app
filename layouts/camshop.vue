<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Learn Nuxt3</NuxtLink>
                <ul class="flex gap-4">
                    <li>
                        <NuxtLink to="/camshop">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/camshop/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/camshop/products" class="btn">Products</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        
        <!-- output the page content -->
        <div class="container mx-auto p-4">
            <slot/>
        </div>
    </div>
</template>

<script setup>
    useHead({
        title: 'Camshop Nuxt3',
        meta : [
            {
                name: 'description', content:'camshop nuxt3 by Raditya Putranto'
            }
        ]
    });
</script>

<style scoped>
.router-link-exact-active{
    color: #12b488;
}
</style>
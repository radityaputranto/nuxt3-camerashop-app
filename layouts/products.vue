<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/products" class="font-bold">CamShop</NuxtLink>
            </nav>
        </header>
        
        <!-- output the page content -->
        <div class="container mx-auto p-4">
            <slot/>
        </div>

        <footer class="container mx-auto p-4 flex justify-between">
            <ul class="flex gap-4">
                <li>
                    <NuxtLink to="/camshop">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/camshop/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/camshop/products">Products</NuxtLink>
                </li>
            </ul>
        </footer>
    </div>
</template>

<style scoped>
.router-link-exact-active{
    color: #12b488;
}
</style>
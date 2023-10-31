<template>
    <div>
        <h2>App List</h2>
        <!-- <div class="grid grid-cols-1 md:grid-cols-6 place-content-center gap-4 mt-4">
            <div v-for="item in products">
                <NuxtLink :to="`/`" class="card shadow text-center ">
                        <i class="material-icons mr-2">{{ item.icon }}</i>
                        {{ item.name }}
                </NuxtLink>
            </div>
        </div> -->
        <div class="grid grid-cols-1 md:grid-cols-6 place-content-center gap-4 mt-4">
            <div>
                <NuxtLink :to="`/camshop`" class="card shadow text-center px-10 py-4">
                        <i class="material-icons mr-2">computer</i>
                        Camshop
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
  const {data: products} = [
    { name : 'camshop',
    icon : 'computer',
    url : '/camshop'
    }
]
</script>

<style scoped>
h2{
    margin-bottom: 20px;
    font-size: 36px;
}
p{
    margin: 20px 0px;
}
</style>
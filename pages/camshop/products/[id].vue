<template>
    <div>
        <Head>
            <Title>
                Camshop | {{ product.title }}
            </Title>
            <Meta name="description" :content="product.description"/>
        </Head>
        <ProductDetail :product="product"/>
    </div>
</template>

<script setup>
    const id = useRoute().params.id;
    const uri = 'https://fakestoreapi.com/products/' + id;

    // fetch the products
    const {data:product} = await useFetch(uri, {key:id}); 
    //key for re-fetch for trigger nuxt to fetchd ata again
    if(!product.value){
        throw createError({statusCode:404, statusMessage: 'Product not found', fatal:true})
    }
    definePageMeta({
        layout: 'camshop'
    });
</script>

<style  scoped>

</style>
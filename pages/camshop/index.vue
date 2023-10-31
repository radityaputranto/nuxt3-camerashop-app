<template>
    <div>
        <h2>Home</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis perferendis quia ullam consequatur corrupti voluptatum incidunt velit voluptates enim.</p>
    </div>
</template>

<script>

definePageMeta({
        layout: 'camshop'
    });
    export default {
  middleware: 'auth',
  // ...
}

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
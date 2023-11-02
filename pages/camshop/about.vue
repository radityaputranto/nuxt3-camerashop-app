<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis
      perferendis quia ullam consequatur corrupti voluptatum incidunt velit
      voluptates enim.
    </p>
    <div>{{ data }}</div>
    <hr />
    <div>{{ currencies }}</div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "camshop",
});
const { data } = await useFetch("/api/ninja?name=mario", {
  method: "post",
  body: { age: 30 },
});
//const data = await useFetch('/api/ninja')
//const currencies = await useFetch('/api/currencies')
const currencies = await useFetch("/api/currency/GBP");
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0px;
}
</style>
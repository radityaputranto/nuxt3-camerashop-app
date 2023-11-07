<template>
  <div>
    <Header></Header>
    <section class="mb-10 bg-indigo-200">
      <h2 class="mb-4 font-bold text-2xl">Spacing</h2>
      <div class="m-15 bg-red-200">Margin</div>
      <div class="pt-8 bg-red-200">Padding</div>
    </section>

    <section class="mb-10 bg-green-200">
      <h2 class="mb-4 font-bold text-2xl">Sizing</h2>
      <div class="w-32 h32 bg-radit">Kotak 1</div>
    </section>

    <section
      class="mb-4 bg-gradient-to-tr from-indigo-200 via-red-200 to-yellow-300"
    >
      <h2 class="mb-4 font-bold text-2xl font-inter">Typography</h2>

      <div class="mb-4">by Raditya Putranto 2023-11-7</div>
      <p class="mb-4 font-inter">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis vero
        quisquam suscipit nostrum obcaecati magni commodi nemo voluptatum vel
        illo!
      </p>
      <p class="mb-4 font-inter">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis vero
        quisquam suscipit nostrum obcaecati magni commodi nemo voluptatum vel
        illo!
      </p>
    </section>

    <div class="text-center">
      <span
        class="text-4xl font-bold bg-gradient-to-br from-indigo-600 via-blue-400 to-teal-200 bg-clip-text text-transparent"
        >Text Gradient</span
      >
    </div>
  </div>
</template>


<script setup>
</script>

<style scoped>
* {
  border: 1px solid red;
}
</style>
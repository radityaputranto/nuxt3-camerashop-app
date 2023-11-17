<template>
  <div>
    <h2>App List</h2>
    <div
      class="grid grid-cols-1 md:grid-cols-6 place-content-center gap-4 mt-4"
    >
      <div v-for="item in menu" :key="item.id">
        <NuxtLink :to="item.url" class="card shadow text-center">
          <i class="material-icons mr-2">{{ item.icon }}</i>
          {{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const menu = [
  {
    name: "camshop",
    icon: "computer",
    url: "/camshop",
  },
  {
    name: "pinia",
    icon: "more_time",
    url: "/pinia",
  },
  {
    name: "counter",
    icon: "more_time",
    url: "/counter",
  },
  {
    name: "animation",
    icon: "more_time",
    url: "/animation",
  },
  {
    name: "tailwind",
    icon: "more_time",
    url: "/tailwind",
  },
  {
    name: "dashboard",
    icon: "more_time",
    url: "/dashboard",
  },
];
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
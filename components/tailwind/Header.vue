<template>
  <div>
    <h1 class="font-bold text-6xl">Learn TailwindCSS</h1>
    <nav>
      <ul>
        <li v-for="item in menu" :key="item.id">
          <NuxtLink :to="item.url" class="text-center">
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const menu = [
  {
    name: "camshop",
    url: "/camshop",
  },
  {
    name: "pinia",
    url: "/pinia",
  },
  {
    name: "counter",
    url: "/counter",
  },
  {
    name: "animation",
    url: "/animation",
  },
  {
    name: "tailwind",
    url: "/tailwind",
  },
];
</script>
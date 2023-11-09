<template>
  <div class="mb-20">
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
    <hr />
  </div>
</template>

<script setup>
const menu = [
  {
    name: "home",
    url: "/tailwind",
  },
  {
    name: "dark light mode",
    url: "/tailwind/dark-light",
  },
  {
    name: "layout",
    url: "/tailwind/layout",
  },
  {
    name: "grid",
    url: "/tailwind/grid",
  },
];
</script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
  font-weight: 600;
}
</style>
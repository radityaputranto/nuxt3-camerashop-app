<template>
  <div>
    <h2>App List</h2>
    <div
      class="grid grid-cols-1 md:grid-cols-6 place-content-center gap-4 mt-4"
    >
      <div v-for="item in getMenu" :key="item.id">
        <NuxtLink :to="item.url" class="card shadow text-center">
          <i class="material-icons mr-2">{{ item.icon }}</i>
          {{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { useMenuStore } from "@/stores/menu";

export default defineComponent({
  setup() {
    const store = useMenuStore();
    const getMenu = computed(() => store.getMenu);
    return { getMenu };
  },
});
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
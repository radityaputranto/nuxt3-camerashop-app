<template>
  <div class="card text-center">
    <h2 class="text-3xl">Coutner with pinia</h2>
    <hr />
    <p class="mt-2 mb-2">Counter: {{ getCount }}</p>
    <button class="btn mt-2" type="button" @click="increment">Increment</button>
  </div>
</template>

<script>
import { useCounterStore } from "@/stores/counter";

export default defineComponent({
  setup() {
    const store = useCounterStore();
    const getCount = computed(() => store.getCount);
    const { increment } = store;
    return { getCount, increment };
  },
});
</script>

<style lang="scss" scoped>
</style>
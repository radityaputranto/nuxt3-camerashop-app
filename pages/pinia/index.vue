<template>
  <div>
    <h2>Hello {{ taskStore.name }}</h2>
    <nav class="filter mb-4">
      <button @click="filter = 'all'" class="btn mr-2">All tasks</button>
      <button @click="filter = 'favs'" class="btn mr-2">Fav tasks</button>
    </nav>

    <div class="task-list" v-if="filter === 'all'">
      <h5 class="font-bold">All Task : {{ taskStore.totalCount }}</h5>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetail :task="task"></TaskDetail>
      </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <h5 class="font-bold mt-4">Favorites Task : {{ taskStore.favCount }}</h5>
      <div v-for="task in taskStore.favs" :key="task.id">
        <TaskDetail :task="task"></TaskDetail>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useTaskStore } from "@/stores/TaskStore";

export default {
  setup() {
    const taskStore = useTaskStore();
    const filter = ref("all");
    return { taskStore, filter };
  },
};

definePageMeta({
  layout: "pinia",
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
<template>
  <div>
    <div class="new-task-form">
      <TaskForm />
    </div>
    <h2>Hello {{ taskStore.name }}</h2>

    <nav class="filter mt-4 mb-4">
      <button @click="filter = 'all'" class="btn mr-2">All tasks</button>
      <button @click="filter = 'favs'" class="btn mr-2">Fav tasks</button>
    </nav>

    <div class="loading" v-if="loading">Loading tasks...</div>

    <div class="task-list" v-if="filter === 'all'">
      <h5 class="font-bold">All Task : {{ totalCount }}</h5>
      <div v-for="task in tasks" :key="task.id">
        <TaskDetail :task="task"></TaskDetail>
      </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <h5 class="font-bold mt-4">Favorites Task : {{ favCount }}</h5>
      <div v-for="task in favs" :key="task.id">
        <TaskDetail :task="task"></TaskDetail>
      </div>
    </div>

    <div class="text-center">
      <button class="btn" @click="taskStore.$reset">Reset Data</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useTaskStore } from "@/stores/TaskStore";

export default {
  setup() {
    const taskStore = useTaskStore();
    const filter = ref("all");

    const { tasks, loading, favs, totalCount, favCount } =
      storeToRefs(taskStore);
    //fetch tasks
    taskStore.getTasks();

    return { taskStore, filter, tasks, loading, favs, totalCount, favCount };
  },
};

definePageMeta({
  layout: "pinia",
});
</script>

<style scoped>
/* loading state */
.loading {
  max-width: 640px;
  border: 1px solid #ffd859;
  background: #ffe9a0;
  color: #3a3a3a;
  padding: 5px 0;
  text-align: center;
  margin: 30px auto;
}
</style>
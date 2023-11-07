<template >
  <div class="dark:bg-slate-800 dark:text-slate-200">
    <!-- dark:bg-slate-800 dark:text-slate-200 = based system operation theme (light / dark) -->
    <BaseHeader></BaseHeader>

    <!-- output the page content -->
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script>
</script>

<style>
</style>
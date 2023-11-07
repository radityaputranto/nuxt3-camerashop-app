<template>
  <div>
    <BaseHeader></BaseHeader>
    <div id="nav">
      <NuxtLink to="/animation/">Home</NuxtLink> |
      <NuxtLink to="/animation/about">About</NuxtLink> |
      <NuxtLink to="/animation/contact">Contact</NuxtLink>
    </div>
    <div class="container mx-auto p-4">
      <transition name="route" mode="out-in">
        <slot />
      </transition>
    </div>
  </div>
</template>
  
  <style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  background: #f2f2f2;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}

/* route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}

/* page animation */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
</style>
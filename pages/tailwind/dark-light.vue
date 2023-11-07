<template>
  <div>
    <TailwindHeader></TailwindHeader>
    <div class="flex justify-center">
      <span class="text-small text-slate-500 mr-2">Light</span>
      <input type="checkbox" name="" id="toggle" class="hidden" />
      <label for="toggle">
        <div
          class="w-9 h-5 bg-slate-500 rounded-full flex items-center p-1 cursor-pointer"
        >
          <div class="w-4 h-4 bg-white rounded-full toggle-circle"></div>
        </div>
      </label>
      <span class="text-small text-slate-500 ml-2">Dark</span>
    </div>
    <button
      class="my-10 bg-sky-500 px-5 py-2 rounded-full text-white font-semibold font-inter block mx-auto hover:bg-sky-700 active:bg-sky-800 focus:ring focus:ring-sky-300"
    >
      Save
    </button>

    <div
      class="max-lw-lg my-10 border border-slate-200 rouded-xl mx-auto p-5 shadow-md font-inter group hover:bg-sky-500 font-serif"
    >
      <h5
        class="font-bold text-inter text-slate-700 text-lg mb-3 group-hover:text-white"
      >
        My Card
      </h5>
      <p
        class="text-slate-600 group-hover:text-white selection:bg-lime-300 selection:text-slate-500 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:float-left first-letter:mr-3"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
        perferendis nihil, perspiciatis eum, aliquam soluta adipisci officiis
        quasi, placeat commodi molestias libero! Blanditiis tempora quis aut
        consequatur ipsa cupiditate assumenda vitae architecto vel quisquam et
        alias libero repellendus, voluptatibus quos.
      </p>
    </div>

    <div
      class="max-w-lg border border-slate-200 rounded-xl mx-auto shadow-md font-inter p-5"
    >
      <form action="">
        <label for="email">
          <span
            class="block font-semibold mb-1 text-slate-700 after:content-['*'] after:text-pink-500 after:ml-0.5"
            >Email</span
          >
          <input
            type="email"
            name="email"
            placeholder="Input your email.."
            class="px-3 py-2 border shadow rounded w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
          />
          <p class="text-sm m-1 text-pink-600 invisible peer-invalid:visible">
            Email not valid
          </p>
        </label>
      </form>
    </div>
  </div>
</template>

<script>
/* const checkbox = document.querySelector("#toggle");
const html = document.querySelector("html");

checkbox.addEventListener("click", function () {
  checkbox.checed ? html.classList.add("dark") : html.classList.remove("dark");
}); */
</script>

<style scoped>
#toggle:checked ~ label div.toggle-circle {
  @apply translate-x-3;
}
</style>
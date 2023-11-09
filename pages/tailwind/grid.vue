<template>
  <div>
    <TailwindHeader></TailwindHeader>
    <h2 class="mt-24 mb-4 font-bold text-center text-4xl text-slate-700">
      Grid Gallery
    </h2>

    <div
      class="mt-4 p-2 font-inter grid grid-cols-2 gap-2 md:grid-cols-4 md:p-4"
    >
      <h2
        class="h-15 text-xl font-semibold text-slate-700 md:col-start-4 md:row-start-2 md:flex"
      >
        <span class="self-center"> Welcome Test</span>
      </h2>
      <div
        class="h-15 text-lg font-bold text-slate-600 md:col-start-2 md:row-start-2 md:flex"
      >
        <span class="self-end">Testing </span>
      </div>

      <div class="grid-card group" v-for="n in 10" :key="n">
        <div
          class="photo-card group-hover:rotate-12 group-hover:scale-125 bg-[url('https://source.unsplash.com/600x400')]"
        ></div>
      </div>
    </div>

    <hr class="my-24 border-t-4" />

    <h2 class="mt-24 mb-4 font-bold text-center text-4xl text-slate-700">
      Tailwind 3.1
    </h2>

    <div class="square">test</div>

    <div class="flex items-center justify-center h-80 bg-gray-100">
      <div class="px-8 py-6 mt-4 text-left shadow-lg rounded-md bg-tema/10">
        <h3 class="text-2xl font-bold text-center text-tema/90">My Form</h3>

        <form action="">
          <div class="mt-4">
            <div>
              <label for="email" class="block text-tema/80"> Email </label>
              <input
                class="text-sm w-full px-4 py-2 mt-2 border rounded-md transition ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tema/60"
              />
            </div>

            <div class="flex items-baseline justify-center">
              <button
                class="px-6 py-2 mt-4 text-white transition ease-in-out bg-tema/60 rounded-md hover:bg-tema/90"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
</script>
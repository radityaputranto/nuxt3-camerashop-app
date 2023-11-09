<template>
  <div>
    <TailwindHeader></TailwindHeader>
    <div class="container px-8 mx-auto text-left">
      <div class="border rounded-lg shadow-lg p-10 relative">
        <div
          class="w-10 h-10 bg-pink-200 rounded-full flex absolute -top-5 -right-5 cursor-pointer"
        >
          <span class="text-md m-auto">❌</span>
        </div>

        <div
          class="bg-blue-200 rounded flex absolute -top-5 left-1/2 -translate-x-1/2 cursor-pointer p-2"
        >
          <span class="text-md m-auto">Test center</span>
        </div>

        <img
          src="https://source.unsplash.com/1000x600?computer"
          alt="laptop"
          class="float-left mr-4"
          width="150"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
          quae corporis alias est exercitationem minima neque quidem soluta
          dolorum, cumque, obcaecati, deserunt officiis non natus omnis
          voluptate libero vel voluptas esse! Nemo, minus perferendis
          praesentium excepturi magnam soluta omnis nesciunt autem dignissimos
          tempora tenetur quibusdam sint aperiam incidunt, inventore vitae
          voluptates? Qui, excepturi facere. Beatae et provident optio quisquam
          rem aliquid perferendis tenetur animi deserunt odit ratione impedit
          temporibus, adipisci repellendus neque corrupti facere inventore
          voluptatem ducimus a, explicabo, libero soluta! Officia, eius qui,
          repellendus earum repudiandae dolor ipsum maiores unde, reiciendis
          explicabo quaerat! Explicabo neque animi quis minima sit!
        </p>
      </div>
    </div>

    <h2 class="mt-24 mb-10 font-bold text-center text-4xl text-slate-700">
      My Gallery
    </h2>
    <div
      class="container mx-auto border rounded-lg shadow-lg p-10 mt-20 columns-4 font-inter sm:flex sm:flex-wrap sm:gap-6 sm:justify-evenly"
    >
      <div
        class="rounded-lg shadow-lg mb-4 overflow-hidden sm:w-100 md:w-80 lg:w-72"
        v-for="n in 5"
        :key="n"
      >
        <img
          src="https://source.unsplash.com/600x400"
          alt="Image"
          width="250"
          class="w-full"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-slat-700">Image Title</div>
          <p class="text-sm text-slate-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
            commodi illo pariatur laborum et explicabo non tempora ipsa ea
            libero.
          </p>
        </div>
      </div>
    </div>

    <hr class="my-24 border-t-4" />

    <div
      class="container px-6 font-inter max-w-md mx-auto sm:bg-green-200 md:bg-transparent sm:max-w-xl md:max-w-5xl lg:flex lg:max-w-full lg:p-0"
    >
      <div class="lg:p-12 lg:flex-1">
        <h3 class="text-4xl font-bold text-slate-800 sm:text-5xl">
          <span class="text-sky-500">Radit</span>ya Putranto
        </h3>
        <img
          src="https://source.unsplash.com/1280x960"
          alt="Image"
          class="my-4 rounded-xl shadow-xl sm:mt-6 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
        />

        <h2 class="text-2xl font-semibold text-slate-800 sm:mt-8 sm:text-4xl">
          Lorem ipsum dolor sit amet.
        </h2>
        <p class="mt-2 text-slate-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eaque
          veniam, nemo dignissimos alias sint at autem aut enim nesciunt, odio
          ullam quod eum nostrum blanditiis recusandae quia ratione totam quos
          non repellat ipsa amet? Sint labore tenetur eveniet cum?
        </p>

        <div class="mt-4 sm:mt-6">
          <a
            href="#"
            class="inline-block px-5 py-3 bg-red-600 text-white rounded-lg shadow-lg uppercase font-semibold tracking-wider text-sm sm:text-base"
            >Subscribe Channel</a
          >
        </div>
      </div>
      <div class="hidden lg:block lg:w-1/2 bg-red-500">
        <img
          src="https://source.unsplash.com/1280x960"
          alt="Image"
          class="object-cover rounded-l-full"
        />
      </div>
    </div>

    <div
      class="w-20 h-20 bg-slate-300 rounded-full flex bottom-5 right-5 cursor-pointer fixed"
    >
      <a href="#" class="text-3xl m-auto">🔝</a>
    </div>
  </div>
</template>

<script setup>
const n = 0;
</script>

<style></style>
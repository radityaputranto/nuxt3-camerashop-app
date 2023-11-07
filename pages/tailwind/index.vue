<template>
  <div>
    <TailwindHeader></TailwindHeader>
    <section class="mb-10 bg-indigo-200">
      <h2 class="mb-4 font-bold text-2xl">Spacing</h2>
      <div class="m-15 bg-red-200">Margin</div>
      <div class="pt-8 bg-red-200">Padding</div>
    </section>

    <section class="mb-10 bg-green-200">
      <h2 class="mb-4 font-bold text-2xl">Sizing</h2>
      <div class="w-32 h32 bg-radit">Kotak 1</div>
    </section>

    <section
      class="mb-4 bg-gradient-to-tr from-indigo-200 via-red-200 to-yellow-300"
    >
      <h2 class="mb-4 font-bold text-2xl font-inter">Typography</h2>

      <div class="mb-4">by Raditya Putranto 2023-11-7</div>
      <p class="mb-4 font-inter">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis vero
        quisquam suscipit nostrum obcaecati magni commodi nemo voluptatum vel
        illo!
      </p>
      <p class="mb-4 font-inter">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis vero
        quisquam suscipit nostrum obcaecati magni commodi nemo voluptatum vel
        illo!
      </p>
    </section>

    <div class="text-center mb-4">
      <span
        class="text-4xl font-bold bg-gradient-to-br from-indigo-600 via-blue-400 to-teal-200 bg-clip-text text-transparent"
        >Text Gradient</span
      >
    </div>

    <section class="bg-[#e3e3e3]">
      <h2 class="mb-4 font-bold text-2xl font-inter">Arbitrary</h2>
      <p>arbitrary : customize value of utilities and properties value</p>
      <div
        class="max-w-xl h-96 bg-[#bada55] mx-auto mt-[42px] bg-fixed overflow-y-scroll"
        style="
          background-image: url('https://source.unsplash.com/1000x600?sky');
        "
      >
        <p class="p-5 text-2xl">
          background overflow-y-scroll bg-fixed bg-scroll bg-local
          <br /><br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla
          nisi quaerat sed, ipsam, non fugit labore amet ut ea deserunt harum.
          Reiciendis, suscipit qui deserunt aspernatur soluta, placeat, facere
          esse inventore vel numquam magnam pariatur nesciunt. Cum, harum
          voluptatibus. Autem sunt incidunt libero iure atque temporibus natus
          officiis velit adipisci esse enim dolor blanditiis eos corporis, vitae
          nostrum maxime quidem totam facilis, similique odio soluta! Magni
          neque porro ea magnam hic debitis sapiente sit sequi tempora vel,
          rerum nulla. Sunt minus ipsa cumque iste iure laborum omnis laboriosam
          itaque deleniti aspernatur. Cumque nemo dignissimos voluptatibus.
          Repellendus harum itaque rem deserunt, quis, praesentium et ipsam
          natus id sapiente quae, eligendi quibusdam repudiandae laborum eum ab
          similique perspiciatis. Quod corporis officia, blanditiis voluptatibus
          aperiam, hic dolore explicabo optio aliquid et labore! Distinctio quis
          atque tempora quasi optio. Consectetur, a! Aspernatur quisquam fugiat
          autem suscipit magnam! Minima nesciunt, rerum possimus pariatur
          ducimus totam, consequatur adipisci quisquam corporis neque, molestiae
          beatae deserunt ex quos corrupti consequuntur perferendis culpa id
          maiores quasi earum. Maiores recusandae rerum ipsum, amet dicta minima
          deleniti, mollitia, minus fuga consequuntur blanditiis et! Veritatis
          et fugit quos! Quam laborum reprehenderit officia magni enim provident
          explicabo inventore nemo, repellat consequatur commodi.
        </p>
      </div>

      <h1>background image size</h1>
      <p>bg-auto bg-cover bg-contain</p>
      <p>bg-repeat-x bg-repeat-y bg-no-repeat</p>
      <div
        class="max-w-xl mb-4 h-96 bg-[#bada55] mx-auto mt-[42px] bg-contain bg-no-repeat bg-bottom rounded-t-2xl border-slate-950 shadow-lg shadow-teal-800 overflow-hidden border-8"
        style="
          background-image: url('https://source.unsplash.com/1000x600?computer');
        "
      >
        <div class="w-full h-full bg-blue-300 mix-blend-multiply"></div>
      </div>
    </section>
  </div>
</template>


<script setup>
</script>

<style scoped>
* {
  border: 1px solid red;
}
</style>
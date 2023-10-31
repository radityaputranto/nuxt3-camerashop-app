<template>
    <form @submit.prevent="login">
      <input v-model="username" type="text" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Lakukan verifikasi login di sini
        // Misalnya, dengan mengirimkan permintaan HTTP ke server
  
        // Setelah berhasil login, panggil store untuk menyimpan token dan pengguna yang masuk
        this.$pinia.store.auth.login('contoh_token', { username: this.username });
  
        // Redirect atau lakukan tindakan lain yang diperlukan
      },
    },
  };
  </script>
  
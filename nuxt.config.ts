// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: ["~/assets/css/main.css"],
    modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
    app: {
        head: {
            title: "Learn Nuxt3",
            meta: [{ name: "description", content: "everything about nuxt3" }],
            link: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
                },
            ],
        },
        pageTransition: { name: "page", mode: "out-in" },
    },
    runtimeConfig: {
        currencyKey: process.env.CURRENCY_API_KEY,
    },
    components: [
        {
            path: "~/components",
            pathPrefix: false,
        },
    ],
});

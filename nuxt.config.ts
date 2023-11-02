// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
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

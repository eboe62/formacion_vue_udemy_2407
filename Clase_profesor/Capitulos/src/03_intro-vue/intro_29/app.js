console.log(Vue);
const { createApp, ref } = Vue;

const app = createApp({
    template: `
        <h1>Hola Mundo</h1>
        <p>Desde app.js</p>
    `,
    //composition API
    setup() {
        const message = ref("I'm Batman");
        const author = ref("I'm Batman");

        setTimeout(() => {
            message.value = 'Hola, soy Goku';
            author.value = 'Goku'
            console.log('Ejecutando');
        }, 1500);
        return {
            author,
            message,
        }
    }
})

app.mount('#myApp');
console.log(Vue);
const { createApp, ref } = Vue;

const app = createApp({
/* 
    template: `
        <h1>{{message}}</h1>
        <p>- {{author}}</p>
    `,
 */    
    //composition API
    setup() {
        const message = ref("I'm Batman");
        const author = ref("I'm Batman");
/* 
        setTimeout(() => {
            message.value = 'Hola, soy Goku';
            author.value = 'Goku'
            console.log('Ejecutando');
        }, 1500);
*/

        const changeQuote = () => {
            message.value = 'Hola, soy Goku';
            author.value = 'Goku';
        }

        return {
            author,
            message,
            changeQuote,
        }
    }
})

app.mount('#myApp');

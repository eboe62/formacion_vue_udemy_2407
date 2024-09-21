import type { GIFResponse } from "../interfaces/gif.response";

const apiKey = 'ngNgCKhtmdhxmiT9f1NflX4vbJzkEQ7i'

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
    .then( (resp) => resp.json())
    .then( (body: GIFResponse ) => {
        console.log(body.data.images.downsized_medium.url );
        })
    .catch( (err) => console.log( err )) ;

/* CODIGO EXTENDIDO
fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
    .then( resp => {
        return resp.json()
    })
    .then( body => console.log({ body }) )
    .catch( err => console.log( err )) ;    
 */
/* COMPROBACION SIMPLE DE ACCESO A LA API
fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
    .then( resp => console.log(resp) )
    .catch( err => console.log( err )) ;    
 */
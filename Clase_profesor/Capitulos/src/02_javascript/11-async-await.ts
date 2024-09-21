import type { GIFResponse } from "../interfaces/gif.response";
import { giphyApi } from "./10-axios";

export const getImage = async() => {
    try {
        const resp = await giphyApi.get<GIFResponse>('/random');
        return resp.data.data.images.downsized_large.url;
    } catch (error) {
        throw 'URL no encontrada'
    }
}

getImage ()
    .then((url) => console.log({ url }))
    .catch( error => console.log(error) )

/* 
export const getImagePromise = () => {
    return new Promise( resolve => {
        resolve('https://url-de-mi-sitio-web/image1.jpg')
    });
}

console.log(getImagePromise())
 */
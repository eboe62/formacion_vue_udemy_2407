/* 
console.log('inicio');

new Promise ( ( resolve, reject ) => {
    console.log('Cuerpo de la promesa');
    setTimeout( () => {
        resolve ('Mi amigo cumplió');

        reject ('Mi amigo no cumplió');
    }, 1000);
})
    .then( ( message ) => console.log( message ) )
    .catch( errorMessage  => console.log( errorMessage ))
    .finally( () => console.log('Fin de la promesa') );

console.log('final');
*/
/* VERSION EXTENDIDA
const getHeroByIdAsync = ( id: number ):Promise<Hero> => {
    return new Promise( ( resolve, reject ) => {
        setTimeout(() => {



            const hero = getHeroById( id );
// Averigüar si el objeto existe
//            if ( !!hero ) {
//            if ( hero === undefined ) {
            if ( hero ) {
                resolve(hero)
            } else {
                reject(`Hero no encontrado #${ id }`)
            }
        }, 1500);
    })
}

getHeroByIdAsync(200)
.then( hero => console.log('El nombre es', hero.name) )
.catch( message => alert(message) )
*/
// VERSION ABREVIADA
import { Hero } from "../data/heroes";
import { getHeroById } from "./07-imp-exp";

const getHeroByIdAsync = ( id: number ):Promise<Hero> => {
    return new Promise( ( resolve, reject ) => {
        setTimeout(() => {
            const hero = getHeroById( id );
            hero ? resolve(hero) : reject(`Hero no encontrado #${ id }`)            
        }, 1500);
    });
}

getHeroByIdAsync(200)
    .then( hero => console.log('El nombre es', hero.name) )
    .catch( alert )

import heroes, { type Owner } from "../data/heroes";

export const getHeroById = ( id: number ) => {
    return heroes.find( hero => hero.id === id );
}

console.log ( getHeroById (100) );

export const getHeroByOwner1 = (owner: Owner) => {    
    return heroes.find ( hero => hero.owner === owner ) // Devuelve el primero
}

console.log ( getHeroByOwner1 ('DC') );

export const getHeroByOwner2 = (owner: Owner) => {
    return heroes.filter ( hero => hero.owner === owner ) // Devuelve un array
}

console.log ( getHeroByOwner2 ('DC') );
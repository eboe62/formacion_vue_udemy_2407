// function greetPerson( name: string ) {
//    return `Hola ${ name }`;
// }

// const greetPerson = (name: string) => {
//    return `Hola ${ name }`;
// }

export const greetPerson = (name: string) => `Hola ${ name }`;

export const getUser2 = ( uid: string ) => ({
    uid: uid,
    username: 'Tony001'
})

const heroes = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
        power: 'Super fuerza',
    }
]

const hero1 = heroes.find( (h) => h.id === 3 )
console.log( hero1?.name );

const hero2 = heroes.find( (h) => h.id === 1 )
console.log( hero2?.power?.toUpperCase() );

const hero3 = heroes.find( (h) => h.id === 2 )
console.log( hero3?.power?.toUpperCase() );
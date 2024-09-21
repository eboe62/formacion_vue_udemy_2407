export const person: Hero = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman',
    // power: 'Money'
}

// const { age, name, power = 'No tiene poder' } = person; // puede ser un Obj o un Array
// console.log({ age, name, power })

interface Hero {
    name: string;
    age: number;
    codeName: string;
    power?: string;
}

const createHero1 = ( args: any ) => ({
    id: 123123,
    name: args.name,
    age: args.age,
    codeName: args.codeName,
    power: args.power ?? 'No tiene poder', // ?? si power = false pone "No tiene..."
})

const createHero2 = ({ name, age, codeNam, power }: any ) => ({
    id: 123123,
    name: name,
    age: age,
    codeName: codeNam,
    power: power ?? 'No tiene poder', // ?? si power = false pone "No tiene..."
})

const createHero3 = ({ name, age, codeName, power }: Hero ) => ({
    id: 123123,
    name: name,
    age: age,
    codeName: codeName,
    power: power ?? 'No tiene poder', // ?? si power = false pone "No tiene..."
})

console.log( createHero1 ( person ));
console.log( createHero2 ( person ));
console.log( createHero3 ( person ));

/*
console.log(person.name);
console.log(person.age);
console.log(person.codeName);

console.log({
    name: person.name,
    age: person.age,
})
*/
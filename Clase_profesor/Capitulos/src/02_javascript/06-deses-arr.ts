const character = ['Goku', 'Vegeta', 'Trunks', 'Goten'];

const [ , , v, , g3 = 'Yamoshi', g4] = character;

console.log({ v, g3, g4});

const returnArray = () => {
    return [123, 'ABC'] as const;
}

const [ numbers, letters ] = returnArray();

console.log(numbers * 2, letters.toLowerCase() )
/* eslint-disable linebreak-style */
/* eslint-disable max-len */

export const arrayMap = (data) => {
  const arrayCopy = data.map((pokemon) => ({
    id: pokemon.id,
    num: pokemon.num,
    name: pokemon.name,
    img: pokemon.img,
    height: parseFloat(pokemon.height.split('m')),
    weight: parseFloat(pokemon.weight.split('kg')),
    egg: pokemon.egg,
    spawn_chance: pokemon.spawn_chance,
    spawn_time: pokemon.spawn_time,
  }));
  return arrayCopy;
};

export const arrayMapEgg = (data) => {
  const arrayCopy = data.map((pokemon) => ({
    id: pokemon.id,
    num: pokemon.num,
    name: pokemon.name,
    img: pokemon.img,
    height: pokemon.height,
    weight: pokemon.weight,
    egg: parseInt(pokemon.egg.split('km'), 10),
  }));
  return arrayCopy;
};

export const orderByHeight = (data) => {
  const dataCopy = arrayMap(data);
  return dataCopy.sort((a, b) => (a.height - b.height));
};

export const orderByWeight = (data) => {
  const dataCopy = arrayMap(data);
  return dataCopy.sort((a, b) => (a.weight - b.weight));
};

export const orderByEggs = (data) => {
  let dataCopy = arrayMap(data);
  dataCopy = dataCopy.filter((item) => (item.egg !== 'Not in Eggs'));
  dataCopy = arrayMapEgg(dataCopy);
  return dataCopy.sort((a, b) => (a.egg - b.egg));
};

export const ordenarAZ = (data) => {
  const newData = [];
  for (let index = 0; index < data.length; index += 1) {
    newData.push(data[index]);
  }
  newData.sort((a, b) => (a.name > b.name ? 1 : -1));
  return newData;
};

export const ordenarZA = (data) => {
  const newData = [];
  for (let index = 0; index < data.length; index += 1) {
    newData.push(data[index]);
  }
  newData.sort((a, b) => (a.name < b.name ? 1 : -1));
  return newData;
};

export const ordenarNumber = (data) => {
  const newData = [];
  for (let index = 0; index < data.length; index += 1) {
    newData.push(data[index]);
  }
  newData.sort((a, b) => (a.id > b.id ? 1 : -1));
  return newData;
};

// eslint-disable-next-line no-shadow
export const searchPokemonByName = (data, name) => data.filter((data) => (data.name === name));
// eslint-disable-next-line no-shadow
export const searchPokemonById = (data, id) => data.filter((data) => (data.id === id));
// eslint-disable-next-line no-shadow
export const findPokemonByCandy = (data, number) => data.filter((data) => (data.candy_num === number));

export const appearsPokemons = (data) => {
  const newData = [];
  for (let index = 0; index < data.length; index += 1) {
    newData.push(data[index]);
  }
  newData.sort((a, b) => (a.spawns < b.spawns ? 1 : -1));
  return newData;
};

export const filterType = (data, array) => {
  let count = 0;
  const pokemons = [];
  for (let index = 0; index < data.length; index += 1) {
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      const element = data[index].type;
      // eslint-disable-next-line no-loop-func
      element.filter(((item) => {
        if (item === array[index2]) {
          count += 1;
        }
        if (data[index].type[data[index].type.length - 1] === item && count === array.length) {
          pokemons.push(data[index]);
          count = 0;
        }
        if (data[index].type[data[index].type.length - 1] === item && array[array.length - 1] === array[index2]) {
          count = 0;
        }
        return count;
      }));
    }
  }
  return pokemons;
};

export const filterWeak = (data, array) => {
  let count = 0;
  const pokemons = [];
  for (let index = 0; index < data.length; index += 1) {
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      const element = data[index].weaknesses;
      // eslint-disable-next-line no-loop-func
      element.filter(((item) => {
        if (item === array[index2]) {
          count += 1;
        }
        if (data[index].weaknesses[data[index].weaknesses.length - 1] === item && count === array.length) {
          pokemons.push(data[index]);
          count = 0;
        }
        if (data[index].weaknesses[data[index].weaknesses.length - 1] === item && array[array.length - 1] === array[index2]) {
          count = 0;
        }
        return count;
      }));
    }
  }
  return pokemons;
};

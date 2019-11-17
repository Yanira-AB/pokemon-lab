/* eslint-disable linebreak-style */
import {
  searchPokemonByName, findPokemonByCandy, filterType, filterWeak, readPokemon, ordenarAZ,
  ordenarZA, ordenarNumber, appearsPokemons,
} from '../src/data';

describe('searchPokemonByName', () => {
  it('debería ser una función', () => {
    expect(typeof searchPokemonByName).toBe('function');
  });
  it('debería retornar un array con un obj con el nombre buscado sin modificar la data original', () => {
    const data = [{ name: 'Bulbasaur' }, { name: 'Ivysaur' }, { name: 'Venusaur' }];
    const result = [{ name: 'Ivysaur' }];
    expect(searchPokemonByName(data, 'Ivysaur')).toStrictEqual(result);
  });
});

describe('findPokemonByCandy', () => {
  it('debería ser una función', () => {
    expect(typeof findPokemonByCandy).toBe('function');
  });
  it('debería retornar un array con un obj con el # de candys buscado', () => {
    const data = [{ candy_num: 50 }, { candy_num: 25 }, { candy_num: 30 }];
    const result = [{ candy_num: 25 }];
    expect(findPokemonByCandy(data, 25)).toStrictEqual(result);
  });
});

describe('filterType', () => {
  it('debería ser una función', () => {
    expect(typeof filterType).toBe('function');
  });
  it('debería retornar un array con un obj con los tipos de pokemon buscados', () => {
    const data = [{ type: ['Fire', 'Bug', 'Rock'] }, { type: ['Fire', 'Bug'] }, { type: ['Poison'] }];
    const result = [{ type: ['Fire', 'Bug', 'Rock'] }, { type: ['Fire', 'Bug'] }];
    expect(filterType(data, ['Bug', 'Fire'])).toStrictEqual(result);
  });
});

describe('filterWeak', () => {
  it('debería ser una función', () => {
    expect(typeof filterWeak).toBe('function');
  });
  it('debería retornar un array con un obj con las debilidades de los pokemons buscados', () => {
    const data = [{ weaknesses: ['Fire', 'Bug', 'Rock'] }, { weaknesses: ['Fire', 'Bug'] }, { weaknesses: ['Poison'] }];
    const result = [{ weaknesses: ['Fire', 'Bug', 'Rock'] }, { weaknesses: ['Fire', 'Bug'] }];
    expect(filterWeak(data, ['Bug', 'Fire'])).toStrictEqual(result);
  });
});

describe('readPokemon', () => {
  it('debería ser una función', () => {
    expect(typeof readPokemon).toBe('function');
  });
  it('debería retornar un array con un obj con las debilidades de los pokemons buscados', () => {
    const data = [{
      id: 1,
      num: '001',
      peso: 48,
      altura: 1.50,
      name: 'Pikachu',
      img: 'pokemon.img',
      candy: 'candy pika',
      candy_count: 25,
      egg: 4,
      spawn_chance: 69,
      spawn_time: '8:30',
    }];
    const result = [{
      id: 1,
      num: '001',
      name: 'Pikachu',
      img: 'pokemon.img',
      candy: 'candy pika',
      candy_num: 25,
      spawns: 69,
      time: '8:30',
    }];
    expect(readPokemon(data)).toStrictEqual(result);
  });
});

describe('ordenarAZ', () => {
  it('debería ser una función', () => {
    expect(typeof ordenarAZ).toBe('function');
  });
  it('debería retornar un nuevo array ordenado alfabeticamente de A-Z sin modificar la data original', () => {
    const data = [{ name: 'xli' }, { name: 'dali' }, { name: 'bali' }, { name: 'mali' }, { name: 'ali' }];
    const dataCopy = [{ name: 'xli' }, { name: 'dali' }, { name: 'bali' }, { name: 'mali' }, { name: 'ali' }];
    const result = [{ name: 'ali' }, { name: 'bali' }, { name: 'dali' }, { name: 'mali' }, { name: 'xli' }];
    expect(ordenarAZ(data)).toStrictEqual(result);
    expect(data).toStrictEqual(dataCopy);
  });
});

describe('ordenarZA', () => {
  it('debería ser una función', () => {
    expect(typeof ordenarZA).toBe('function');
  });
  it('debería retornar un nuevo array ordenado alfabeticamente de Z-A sin modificar la data original', () => {
    const data = [{ name: 'xli' }, { name: 'dali' }, { name: 'bali' }, { name: 'mali' }, { name: 'ali' }];
    const dataCopy = [{ name: 'xli' }, { name: 'dali' }, { name: 'bali' }, { name: 'mali' }, { name: 'ali' }];
    const result = [{ name: 'xli' }, { name: 'mali' }, { name: 'dali' }, { name: 'bali' }, { name: 'ali' }];
    expect(ordenarZA(data)).toStrictEqual(result);
    expect(data).toStrictEqual(dataCopy);
  });
});

describe('ordenarNumber', () => {
  it('debería ser una función', () => {
    expect(typeof ordenarNumber).toBe('function');
  });
  it('debería retornar un nuevo array ordenado por id de menor a mayor sin modificar la data original', () => {
    const data = [{ id: 5 }, { id: 7 }, { id: 4 }, { id: 1 }, { id: 2 }];
    const dataCopy = [{ id: 5 }, { id: 7 }, { id: 4 }, { id: 1 }, { id: 2 }];
    const result = [{ id: 1 }, { id: 2 }, { id: 4 }, { id: 5 }, { id: 7 }];
    expect(ordenarNumber(data)).toStrictEqual(result);
    expect(data).toStrictEqual(dataCopy);
  });
});

describe('appearsPokemons', () => {
  it('debería ser una función', () => {
    expect(typeof appearsPokemons).toBe('function');
  });
  it('debería retornar un nuevo array ordenado por spawns de mayor a menor sin modificar el array original', () => {
    const data = [{ spawns: 0.042 }, { spawns: 0.017 }, { spawns: 0.253 }, { spawns: 0.012 },
      { spawns: 0.0031 }];
    const dataCopy = [{ spawns: 0.042 }, { spawns: 0.017 }, { spawns: 0.253 }, { spawns: 0.012 },
      { spawns: 0.0031 }];
    const result = [{ spawns: 0.253 }, { spawns: 0.042 }, { spawns: 0.017 }, { spawns: 0.012 },
      { spawns: 0.0031 }];
    expect(appearsPokemons(data)).toStrictEqual(result);
    expect(data).toStrictEqual(dataCopy);
  });
});

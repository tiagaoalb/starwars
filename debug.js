/* const pessoas = [
  {
    name: 'Tiago',
    idade: 38,
    altura: 187,
  },
  {
    name: 'Viviane',
    idade: 37,
    altura: 168,
  },
  {
    name: 'Toão',
    idade: 51,
    altura: 185,
  },
  {
    name: 'Maria',
    idade: 50,
    altura: 178,
  },
]; */

const planets = require('./planets.json');

const condition = [
  /* {
    tipo: 'texto',
    param: '',
    valor: 'Tatoo',
  }, */
  {
    tipo: 'numero',
    param: 'diameter',
    condicao: 'maior',
    valor: 5000,
  },
  {
    tipo: 'numero',
    param: 'population',
    condicao: 'menor',
    valor: 1000000,
  },
];

const filtrar = (condicoes) => {
  const arr = [];
  condicoes.forEach((cond) => {
    if (cond.tipo === 'texto') {
      arr.push((i) => i.name.includes(`${cond.valor}`));
    } else if (cond.condicao === 'maior') {
      arr.push((i) => i[cond.param] > cond.valor);
    } else if (cond.condicao === 'menor') {
      arr.push((i) => i[cond.param] < cond.valor);
    } else if (cond.condicao === 'igual') {
      arr.push((i) => i[cond.param] === cond.valor);
    }
  });
  let lista = [...planets];
  while (arr.length > 0) {
    lista = lista.filter(arr.pop());
  }
  return lista;
};

const res = filtrar(condition);

console.log(res);

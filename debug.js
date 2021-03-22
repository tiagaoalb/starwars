const pessoas = [
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
];

const planets = require('./planets');

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

const cond = [
  {
    tipo: 'numero',
    param: 'rotation_period',
    condicao: 'menor',
    valor: 25,
  },
];

// {
//   tipo: 'texto',
//   param: '',
//   valor: 'Tato',
// },
// {
//   tipo: 'numero',
//   param: 'idade',
//   condicao: 'menor',
//   valor: 56,
// },

const res = filtrar(cond);

console.log(res);

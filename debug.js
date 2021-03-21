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
    name: 'João',
    idade: 38,
    altura: 185,
  },
  {
    name: 'Maria',
    idade: 50,
    altura: 178,
  },
];

// nome = i.includes('ap')

const filtrar = (condicoes) => {
  const len = condicoes.length;
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

  return pessoas.filter(arr[0]).filter(arr[1]);
};

const cond = [
  {
    tipo: 'texto',
    param: '',
    valor: 'Ti',
  },
  {
    tipo: 'numero',
    param: 'idade',
    condicao: 'maior',
    valor: 50,
  },
];

const res = filtrar(cond);

console.log(res);

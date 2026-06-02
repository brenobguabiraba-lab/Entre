const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

function soma(a, b) {
  return Number(a) + Number(b);
}

function subtracao(a, b) {
  return Number(a) - Number(b);
}

function multiplicacao(a, b) {
  return Number(a) * Number(b);
}

function divisao(a, b) {
  return Number(a) / Number(b);
}

app.get('/', (req, res) => {
  res.send('oie');
});

app.post('/soma', (req, res) => {
  const { a, b } = req.body;
  const resultado = soma(a, b);

  res.json({
    operacao: 'soma',
    a,
    b,
    resultado
  });
});

app.post('/subtracao', (req, res) => {
  const { a, b } = req.body;
  const resultado = subtracao(a, b);

  res.json({
    operacao: 'subtracao',
    a,
    b,
    resultado
  });
});

app.post('/multiplicacao', (req, res) => {
  const { a, b } = req.body;
  const resultado = multiplicacao(a, b);

  res.json({
    operacao: 'multiplicacao',
    a,
    b,
    resultado
  });
});

app.post('/divisao', (req, res) => {
  const { a, b } = req.body;

  if (Number(b) === 0) {
    return res.status(400).json({
      erro: 'Não é possível dividir por zero'
    });
  }

  const resultado = divisao(a, b);

  res.json({
    operacao: 'divisao',
    a,
    b,
    resultado
  });
});

app.delete('/remover', (req, res) => {
    const id = req.body.id; 
    
    res.json({
        mensagem: `Registro com o ID ${id} foi deletado com sucesso!`
    });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

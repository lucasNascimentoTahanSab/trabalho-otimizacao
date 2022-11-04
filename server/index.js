const express = require('express');
const solver = require('javascript-lp-solver');

const PORT = 8080;

const app = express();

app.use(express.json());

app.post('/optimize', (req, res) => {
  try {
    const solution = solver.Solve(req.body);

    res.send(solution);
  } catch (error) {
    res.status(500);
    res.statusMessage = 'Não foi possível solucionar o modelo proposto.';
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
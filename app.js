// Separamos a lógica do app da inicialização do servidor
// para que os testes possam carregar o app sem iniciar o servidor.
//
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res
    .status(200)
    .send("Olá Mundo DevOps, Proteger a Branch main e CD em aula!");
});

module.exports = app; // Exportamos o app ci/cd

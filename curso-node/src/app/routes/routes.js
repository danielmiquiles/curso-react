module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  app.get("/livros", (req, res) => {
    res.marko(
        require('../views/livros/listagem/listagem.marko'),
        {
          livros: [
            {
              id: 1,
              titulo: "Node Js"
            },
            {
              id: 2,
              titulo: "PHP"
            }
          ]
        }
    );
  });
};

const server = require("./server");
const port = process.env.PORT || 4000;

server.get('/', async (req, res, next) => {
    try {
      res.json('welcome to webdb-ii-challenge');
    } catch (error) {
      next(new Error('cannot connect to the API'));
    }
});

server.listen(port, () => {
    console.log(`listening on ${port}`);
});
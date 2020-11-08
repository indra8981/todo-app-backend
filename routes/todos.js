const router = require("express").Router();
let ToDo = require("../models/todo.model");
const ipMiddleware = function (req, res, next) {
  req.ip =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    (req.connection.socket ? req.connection.socket.remoteAddress : null);
  next();
};
router.route("/").get(ipMiddleware, (req, res) => {
  ToDo.find({ ip: req.ip, active: true })
    .then((todos) => res.json(todos))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post(ipMiddleware, (req, res) => {
  const ip = req.ip;
  const title = req.body.title;
  const description = req.body.description;

  const newToDo = new ToDo({
    ip,
    title,
    description,
  });

  newToDo
    .save()
    .then(() => res.json(newToDo))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  ToDo.findById(req.params.id)
    .then((todo) => res.json(todo))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  ToDo.findByIdAndDelete(req.params.id)
    .then(() => res.json("ToDo deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  ToDo.findById(req.params.id)
    .then((todo) => {
      todo.title = req.body.title;
      todo.description = req.body.description;
      todo
        .save()
        .then(() => res.json("ToDo updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

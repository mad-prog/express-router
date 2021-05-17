var express = require("express");
var router = express.Router();
const posts = require("./posts");
const addToArray = require("./addToArray");
/*
const posts = [
  {
    id: 3,
    user: "Sara",
    post: "I'm on holiday",
  },
  {
    id: 4,
    user: "Claire",
    post: "I have passed my exam",
  },
  {
    id: 5,
    user: "Emma",
    post: "I have started working at McDonalds",
  },
];
*/
//verify router working
router.get("/health", function (req, res) {
  res.send("server running");
});

//GET/ lists/renders all posts in array
router.get("/all", function (req, res, next) {
  res.send(posts);
});

//get using name, just so I remember how to use a different parameter
//gets one specified post
//http://localhost:3000/posts?user=sara
router.get("/:user?", (req, res) => {
  const { user } = req.query;
  const foundPost = posts.find((post) => post.user.toLowerCase() === user);
  res.send(foundPost);
});

//POST/creates another post
router.post("/add", (req, res) => {
  posts.push(req.body);
  addToArray(req.body);
  res.send(posts);
});

//PATCH/edits a post
//Javi!! Esto funciona solamente con los post orignales de mi array
//del script, por alguna razon no edita los nuevos que añado desde postman?
//por eso intenté crear una funciona que agreaga el post a mi array.
//entonces añade dos posts. Uno puedo editar y el otro no. Raro.
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const postInfo = req.body;
  const index = posts.findIndex((post) => post.id === +id);
  posts[index] = { ...posts[index], ...postInfo };
  res.send(posts[index]);
});

//DELETE/deletes a post
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = posts.findIndex((post) => post.id === +id);
  posts.splice(index, 1);
  res.send(posts);
});

module.exports = router;

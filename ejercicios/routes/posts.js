var express = require("express");
var router = express.Router();
const posts = require("./postsList");

//verify router working
router.get("/health", function (req, res) {
  res.send("server running");
});

//GET/ lists/renders all posts in array
router.get("/all", function (req, res, next) {
  res.send(posts);
});

//GET/post by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundPost = posts.find((post) => post.id === +id);
  res.send(foundPost);
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
  // addToArray(req.body);
  res.send(posts);
});

//PATCH/edits a post
//adds comment if added
//overwrites a comment if edited again
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;
  req.comment = comment;
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

//DELETE/deletes a post
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = posts.findIndex((post) => post.id === +id);
  posts.splice(index, 1);
  res.send(posts);
});

module.exports = router;

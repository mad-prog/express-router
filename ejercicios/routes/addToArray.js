const posts = require("./posts");

let addPostToArray = (post) => {
  posts.push(post);
  console.log(posts);
};

module.exports = addPostToArray;

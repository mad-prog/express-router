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

let addPostToArray = (post) => {
  posts.push(post);
  console.log(posts);
};

module.exports = posts;

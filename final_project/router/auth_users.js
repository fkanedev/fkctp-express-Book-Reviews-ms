const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

//check if the username is valid
const isValid = (username)=>{ //returns boolean

let userswithsamename = users.filter((user)=>{
    return user.username === username
  });
  if(userswithsamename.length > 0){
    return true;
  } else {
    return false;
  }
}

//check if username and password match the one we have in records.
const authenticatedUser = (username,password)=>{ //returns boolean

  let validusers = users.filter((user)=>{
    return (user.username === username && user.password === password)
  });
  if(validusers.length > 0){
    return true;
  } else {
    return false;
  }
}

//only registered users can login
regd_users.post("/login", (req,res) => {
  
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
      return res.status(404).json({message: "Error logging in"});
  }
  if (authenticatedUser(username,password)) {
    let accessToken = jwt.sign({
      data: password
    }, 'access', { expiresIn: 60 * 60 });
    req.session.authorization = {
      accessToken,username
  }
  return res.status(200).send(JSON.stringify({message: "User successfully logged in", token: accessToken},null,4));
  } else {
    return res.status(208).json({message: "Invalid Login. Check username and password"});
  }
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  
  const isbn = req.params.isbn;
  const user_review = req.body.review;
  const review_username = req.session.authorization['username'];

  let key_book = Object.keys(books).filter((key) => books[key].isbn === isbn)[0];
  books[key_book].reviews[review_username] = user_review; //Object.assign(books[key_book].reviews, {review_username: user_review});

  res.send(JSON.stringify(books[key_book],null,4))

});

// Delete a book review
regd_users.delete("/auth/review/:isbn", (req, res) => {
  
  const isbn = req.params.isbn;
  const review_username = req.session.authorization['username'];

  let key_book = Object.keys(books).filter((key) => books[key].isbn === isbn)[0];
  delete books[key_book].reviews[review_username];
  
  res.send(JSON.stringify({message: review_username+"'s review successfully deleted", "books":books[key_book]},null,4))

});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;

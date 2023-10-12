/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [];

  // for (let i = 0; i < pronoun.length; i++) {
  //   let randomPronoun = Math.floor(Math.random() * pronoun.length);
  //   console.log(pronoun[randomPronoun]);
  // }
  // for (let i = 0; i < adj.length; i++) {
  //   let randomAdj = Math.floor(Math.random() * adj.length);
  //   console.log(adj[randomAdj]);
  // }
  // for (let i = 0; i < noun.length; i++) {
  //   let randomNoun = Math.floor(Math.random() * noun.length);
  //   console.log(noun[randomNoun]);
  // }

  let part1 = pronoun[Math.floor(Math.random() * pronoun.length)];
  let part2 = adj[Math.floor(Math.random() * adj.length)];
  let part3 = noun[Math.floor(Math.random() * noun.length)];
  let part4 = ".com";

  domain.push(part1);
  domain.push(part2);
  domain.push(part3);
  domain.push(part4);

  let string = domain.join("");

  console.log(string);
};

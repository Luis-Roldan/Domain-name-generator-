/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// option 1

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

// option 2

// let part1 = pronoun[Math.floor(Math.random() * pronoun.length)];
// let part2 = adj[Math.floor(Math.random() * adj.length)];
// let part3 = noun[Math.floor(Math.random() * noun.length)];
// let part4 = ".com";

// domain.push(part1);
// domain.push(part2);
// domain.push(part3);
// domain.push(part4);

// let string = domain.join("");

// console.log(string);

window.onload = function() {
  // write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  function generateDomain(parts, currentIndex, currentDomain) {
    if (currentIndex === parts.length) {
      // Base case: If currentIndex reaches the length of parts, we have a complete domain.
      console.log(currentDomain);
      return;
    }
    for (let i = 0; i < parts[currentIndex].length; i++) {
      const nextPart = parts[currentIndex][i];
      generateDomain(parts, currentIndex + 1, currentDomain + nextPart);
    }
  }
  generateDomain([pronoun, adj, noun, [".com"]], 0, "");

  // option 3, with additional ending .net

  // let pronoun = ["the", "our"];
  // let adj = ["great", "big"];
  // let noun = ["jogger", "racoon"];
  // let last = [".com", ".net"];

  // for (let i = 0; i < pronoun.length; i++) {
  //   for (let j = 0; j < adj.length; j++) {
  //     for (let k = 0; k < noun.length; k++) {
  //       for (let l = 0; l < last.length; l++) {
  //         let domain = pronoun[i] + adj[j] + noun[k] + last[l];
  //         console.log(domain);
  //       }
  //     }
  //   }
  // }
};

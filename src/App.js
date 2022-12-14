import React, { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [joke, setjoke] = useState([]);
  useEffect(() => {
    async function fetchJokes() {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Programming,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
      );
      const data = await response.json();
      setjoke(data);
    }
    fetchJokes();
    changeColor();
  }, []);
  const changeColor = () => {
    const colors = ["#9b59b6", "#3498db", "#bdc3c7", "#f1c40f", "#2ecc71", "#ecf0f1"]
    let randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
  }
  const getNewJoke = () => {
    const myFrom = document.getElementById("form");
    if (myFrom.value === "english") {
      async function fetchJokes() {
        const response = await fetch(
          "https://v2.jokeapi.dev/joke/Programming,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
        );
        const data = await response.json();
        setjoke(data);
      }
      fetchJokes();
      changeColor();
    } else if (myFrom.value === "deutsch") {
      async function fetchJokes() {
        const response = await fetch(
          "https://v2.jokeapi.dev/joke/Programming,Pun?lang=de&blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
        );
        const data = await response.json();
        setjoke(data);
      }
      fetchJokes();
      changeColor();
    } else {
      setjoke(
          {
            joke: "Select Language"
          }
      );
    }
  };

  return (
    <div className="wrapper container" id="quote-box">
      <div id="text">
        {joke.joke ? (
          <>
            <p id="joke" className="fw-bolder">{joke.joke}</p>
          </>
        ) : (
          <>
            <h4>Loading</h4>
          </>
        )}
      </div>
      <div id="author">
        {joke.category ? (
          <>
            <p id="category">Category : {joke.category}</p>
          </>
        ) : (
          <>
            <h4>Loading</h4>
          </>
        )}
      </div>
      <div className="row">
        <div className="col">
          <button
            id="new-quote"
            className="btn btn-primary"
            onClick={getNewJoke}
          >
            New joke
          </button>
        </div>
        <div className="col">
          <button className="btn btn-primary">
            <a id="tweet-quote" href="twitter.com/intent/tweet">
            </a>
            Tweet joke
          </button>
        </div>
        <div className="col-5">
          <select className="form-select" id="form">
            <option selected>Sprache/Language</option>
            <option value="english">English</option>
            <option value="deutsch">Deutsch</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default App;

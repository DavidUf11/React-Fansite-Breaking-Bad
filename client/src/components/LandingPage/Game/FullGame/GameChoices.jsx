/*jshint esversion: 6 */
import React, { useEffect, useState } from 'react';
import './GameChoices.css';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

function GameChoices() {
  //rewrite Rita's code to make this less repetitive
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [imageOne, setImageOne] = useState();
  const [nameOne, setNameOne] = useState();
  const [imageTwo, setImageTwo] = useState();
  const [nameTwo, setNameTwo] = useState();
  const [imageThree, setImageThree] = useState();
  const [nameThree, setNameThree] = useState();
  const [quote, setQuote] = useState();
  // const [newQuote, setNewQuote] = useState(false);
  // const [refetch, setRefetch] = useState(false);
  const [count, setCount] = useState(0);
  const [click, setClick] = useState(0);
  const [score, setScore] = useState(0);
  let randomQuote;
  let randomAuthor;
  let author;

  const history = useHistory();

  useEffect(() => {
    fetch('https://breakingbadapi.com/api/quote/random')
      .then((response) => response.json())
      .then((data) => {
        randomQuote = data[0].quote;
        if (
          data[0].author === 'Gus Fring' ||
          data[0].author === 'Jimmy McGill' ||
          data[0].author === 'Kim Wexler' ||
          data[0].author === 'Chuck McGill' ||
          data[0].author === 'Hank Schrader'
        ) {
          if (data[0].author === 'Gus Fring') {
            randomAuthor = 'Gustavo Fring';
          }
          if (data[0].author === 'Jimmy McGill') {
            randomAuthor = 'Saul Goodman';
          }
          if (data[0].author === 'Kim Wexler') {
            randomAuthor = 'Kimberly Wexler';
          }
          if (data[0].author === 'Chuck McGill') {
            randomAuthor = 'Charles McGill';
          }
          if (data[0].author === 'Hank Schrader') {
            randomAuthor = 'Henry Schrader';
          }
        } else randomAuthor = data[0].author;
        let stringArray = randomAuthor.split(' ');
        author = stringArray[0] + '+' + stringArray[1];
        setQuote(data[0].quote);
        fetch(`https://breakingbadapi.com/api/characters?name=${author}`)
          .then((response) => response.json())
          .then((data) => {
            setImage(data[0]?.img);
            setName(data[0]?.name);
            // let name = data[0].name;
          });
      })
      .then(
        fetch(`https://breakingbadapi.com/api/character/random`)
          .then((random) => random.json())
          .then((randomdata) => {
            setNameOne(randomdata[0].name);
            setImageOne(randomdata[0]?.img);
          })
      )
      .then(
        fetch(`https://breakingbadapi.com/api/character/random`)
          .then((randomone) => randomone.json())
          .then((randomdataone) => {
            setNameTwo(randomdataone[0].name);
            setImageTwo(randomdataone[0]?.img);
          })
      )
      .then(
        fetch(`https://breakingbadapi.com/api/character/random`)
          .then((randomtwo) => randomtwo.json())
          .then((randomdatatwo) => {
            setNameThree(randomdatatwo[0].name);
            setImageThree(randomdatatwo[0]?.img);
          })
      );
    console.log(
      'correct: ',
      name,
      image,
      '1: ',
      nameOne,
      imageOne,
      '2: ',
      nameTwo,
      imageTwo,
      '3: ',
      nameThree,
      imageThree
    );
  }, [click]);
  let answer;
  answer = [
    [name, image],
    [nameOne, imageOne],
    [nameTwo, imageTwo],
    [nameThree, imageThree]
  ];
  answer.sort(function () {
    return 0.5 - Math.random();
  });
  const handleAnswerOptionClick = (event) => {
    event.preventDefault();
    if (event.currentTarget.innerText === name) {
      swal('Correct!', { icon: 'success' });
      setScore(score + 1);
      setCount(0);
      setClick(click + 1);
    } else {
      swal("Wrong! Don't miss the next one!", {
        icon: 'error'
      });
      setCount(count + 1);
      setClick(click + 1);
      if (count === 1) {
        swal(`Game over! Your final score: ${score}`, {
          icon: 'warning'
        }).then(history.push('/game-start'));
      }
    }
  };
  return (
    <div className="full-game-container">
      <h2 className="who-said">Who said...</h2>
      <div className="game-status-bar">
        <div className="quote-div">
          <p className="quote">
            <em>"{quote}"</em>
          </p>
        </div>

        <div className="score-box">
          <h2>Score</h2>
          <span className="score-number"> {score} </span>
        </div>
      </div>
      <div className="game-options-container">
        <div className="options-row options-one">
          <a id="card-link-tag">
            <div
              id="character-card"
              className="card card-for-game"
              onClick={handleAnswerOptionClick}
            >
              <h5 className="card-title">{answer[0][0]}</h5>
              <img
                src={answer[0][1]}
                className="card-img-top"
                alt={answer[0][0]}
              />
            </div>
          </a>
          <a id="card-link-tag">
            <div
              id="character-card"
              className="card card-for-game"
              onClick={handleAnswerOptionClick}
            >
              <h5 className="card-title">{answer[1][0]}</h5>
              <img
                src={answer[1][1]}
                className="card-img-top"
                alt={answer[1][0]}
              />
            </div>
          </a>
        </div>
        <div className="options-row options-three">
          {' '}
          <a id="card-link-tag">
            <div
              id="character-card"
              className="card card-for-game"
              onClick={handleAnswerOptionClick}
            >
              <h5 className="card-title">{answer[2][0]}</h5>
              <img
                src={answer[2][1]}
                className="card-img-top"
                alt={answer[2][0]}
              />
            </div>
          </a>
          <a id="card-link-tag">
            <div
              id="character-card"
              className="card card-for-game"
              onClick={handleAnswerOptionClick}
            >
              <h5 className="card-title">{answer[3][0]}</h5>
              <img
                src={answer[3][1]}
                className="card-img-top"
                alt={answer[3][0]}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
export default GameChoices;

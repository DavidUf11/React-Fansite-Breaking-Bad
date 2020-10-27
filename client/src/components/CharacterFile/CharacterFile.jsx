import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './CharacterFile.css';

function CharacterFile(props) {
  const [dataFiles, setDataFiles] = useState({
    char_id: 56,
    name: 'Officer Saxton',
    birthday: 'Unknown',
    occupation: ['APD Officer'],
    img:
      'https://vignette.wikia.nocookie.net/breakingbad/images/f/f3/Officer_Saxton_-_I.F.T..png/revision/latest?cb=20131025090606',
    status: 'Alive',
    nickname: 'Saxton',
    appearance: [3],
    portrayed: 'Stoney Westmoreland',
    category: 'Breaking Bad',
    better_call_saul_appearance: []
  });
  const [dataQuote, setDataQuote] = useState({});

  let characterID = Number(useLocation().pathname.slice(16));
  characterID > 0
    ? (characterID = characterID - 1)
    : (characterID = characterID);

  // id = Number(id);
  // let id = location.pathname.splice(0, 16);

  // let { char_id } = useParams;

  // console.log(char_id); // wy print ing three timnes? does it matter? why undefined?

  useEffect(() => {
    // const dataPull = () => {
    fetch('https://breakingbadapi.com/api/characters')
      .then((response) => response.json())
      .then((data) => {
        let characterObject = data[characterID];
        setDataFiles(characterObject);
      });
    // setDataFiles();
    // console.log(data[Math.floor(Math.random() * data.length)]);
    // fetch('https://breakingbadapi.com/api/quote/random?author')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setDataQuote(data);
    //     console.log(data);
  }, []);
  // }, []);
  // };
  // , [];

  // fetch("https://breakingbadapi.com/api/quote/random?author=Skyler+White")
  //         .then((response) => response.json())
  //         .then((data) => {
  //             randomQuote = data[0].quote;
  //             randomAuthor = data[0].author;
  //             let stringArray = randomAuthor.split(" ")
  //             author = stringArray[0]+"+"+stringArray[1]
  //             console.log(author);
  //             console.log(data[0].quote);
  //             setQuote(data[0].quote);
  //             fetch(`https://breakingbadapi.com/api/characters?name=${author}`)
  //             .then((response) => response.json())
  //             .then((data) => {
  //               console.log(data[0].img);
  //               setImage(data[0].img);
  //               setName(data[0].name);
  //             })

  return (
    <div className="filecontainer">
      <div>
        <h1>{dataFiles.name}</h1>
      </div>
      <div className="filecard">
        <div className="cardImage">
          <img src={dataFiles.img} alt="character"></img>
        </div>
        <div className="carddata">
          <div className="leftfilecard">
            <div id="characterdata">
              <h1>About</h1>
              <p id="name">Nickname: {dataFiles.nickname}</p>
              <p id="age">Status: {dataFiles.status}</p>
              <p id="deaths">Occupation: {dataFiles.occupation}</p>
              <p id="description">Description: Who is who</p>
            </div>
          </div>
        </div>
      </div>
      <div className="quotecontainer">
        <div className="quotebox">
          <h1>Quote</h1>
          <p>dkdkdkdkd</p>
        </div>
        <div>
          <button className="quotebutton">New Quote</button>
        </div>
      </div>
    </div>
  );
}
export default CharacterFile;

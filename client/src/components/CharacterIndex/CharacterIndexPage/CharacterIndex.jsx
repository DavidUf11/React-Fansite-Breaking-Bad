import CharacterIndexSearchBar from './CharacterIndexSearchBar';
import React, { useEffect, useState } from 'react';
import './CharacterIndex.css';

const CharacterIndex = () => {
  const [state, setState] = useState({});

  const handleClick = async () => {
    // console.log(state);
    let response = await fetch(
      'https://breakingbadapi.com/api/character/random'
    );
    response = await response.json();
    setState(response[0]);
  };
  // set timeout to get image to render
  // console.log(state);

  useEffect(() => {
    console.log('use effect has run');
  }, [state]);

  return (
    <div>
      <h1>CharacterIndex Page</h1>
      <div className="character-card">
        <h3>{state.name}</h3>

        <img src={state.img} />
        <button onClick={() => handleClick()}>Click Me</button>
      </div>
    </div>
  );
};

export default CharacterIndex;

// import React, { useState, useEffect } from 'react';
// import { Form, Dropdown, ButtonGroup, Button, Card } from 'react-bootstrap';
// import CharacterCard from '../CharacterCard/CharacterCard';
// import CharacterIndexSearchBar from './CharacterIndexSearchBar';

// const CharacterIndex = () => {

//   const [apiData, setApiData] = useState({});
//   const [state, setState] = useState(true);

//   useEffect(() => {
//     fetch('https://breakingbadapi.com/api/character/random')
//       .then((response) => response.json())
//       .then((response) => setApiData(response[0]));
//   }, [state]);

//   function switchCharacter() {
//     setState(!state);
//   }

//   return (
//     <div>
//       <h1>Character Index Page Goes Here</h1>
//       <Form>
//         <Form.Label>Search by Name</Form.Label>
//         <Form.Control
//           className="character-search"
//           type="text"
//           placeholder="Search by name"
//         />
//       </Form>
//       <div className="dropdowns">
//         <Dropdown as={ButtonGroup}>
//           <Button variant="success">Sort A -> Z</Button>

//           <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

//           <Dropdown.Menu>
//             <Dropdown.Item href="#/action-1">A -> Z</Dropdown.Item>
//             <Dropdown.Item href="#/action-2">Z -> A</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>

//         <Card style={{ width: '18rem' }} className="character-card">
//           <Card.Img
//             className="character-image"
//             variant="top"
//             src={apiData.img}
//           />
//           <Card.Body>
//             <Card.Title>{apiData.name}</Card.Title>
//             <Button variant="primary">Learn More</Button>
//             <Button variant="primary" onClick={() => switchCharacter()}>
//               Switch Character Test
//             </Button>
//           </Card.Body>
//         </Card>
//       </div>
//     </div>
//   );
// };

// call api to generate array of characters as JSON objects

// render the characters on the page in random order (?)

// create onClick functions for sort dropdowns to sort that array in warious ways, reset state to re-render characters
// based on sort criterion

// remove broken api characters

// clear search bar after submit

// const CharacterIndex = () => {
// const [apiData, setApiData] = useState({});
// const [state, setState] = useState(true);

// const getAllCharacters = async function getAllCharacters() {
//   let characters = await fetch('https://breakingbadapi.com/api/characters');
//   characters = await characters.json();
//   let allCharacters = characters.map((character) => character);
// allCharacters.map((character) => console.log(character.name));
// };
// getAllCharacters();
// useEffect(() => {
//   fetch('https://breakingbadapi.com/api/character/random')
//     .then((response) => response.json())
//     .then((response) => setApiData(response[0]));
// }, [state]);

// function switchCharacter() {
//   setState(!state);
// }

//   const [characterSearch, setCharacterSearch] = useState('Saul');
//   const [apiData, setApiData] = useState({});

//   function handleSearch(event) {
//     event.preventDefault();
//     setCharacterSearch(event.target.elements[0].value);
//   }

//   useEffect(() => {
//     async function getCharacterData() {
//       let response = await fetch(
//         `https://breakingbadapi.com/api/characters?name=Walter` //interpolate variable
//       );
//       response = await response.json();
//       setApiData(response);
//       // console.log(apiData);
//     }
//     getCharacterData();
//   }, [characterSearch]);

//   return (
//     <div>
//       <CharacterIndexSearchBar handleSearchProp={handleSearch} />
//       <CharacterCard
//         name={characterSearch.name}
//         imageURL={
//           'https://images-na.ssl-images-amazon.com/images/I/61ec6C1F2yL._AC_SX466_.jpg'
//         }
//       />
//     </div>
//   );
// };

// export default CharacterIndex;

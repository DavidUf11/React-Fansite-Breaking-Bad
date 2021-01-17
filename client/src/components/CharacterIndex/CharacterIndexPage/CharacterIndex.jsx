import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './CharacterIndex.css';

const CharacterIndex = () => {
  const [characterList, setCharacterList] = useState([]);
  const [state, setState] = useState(true);
  const [sorted, setSorted] = useState('');
  const [filtered, setFiltered] = useState(0);
  const [charactersFiltered, setCharactersFiltered] = useState([]);

  const history = useHistory();

  const changeSeasonsFilter = (seasonNumber) => {
    let season = seasonNumber;
    let results = characterList.filter(
      (item) => item.appearance && item.appearance.includes(seasonNumber)
    );
    setCharactersFiltered(results);
    setFiltered(seasonNumber);
    setState(!state);
  };

  function characterCards(loopVar) {
    return loopVar.map((character) => {
      return (
        <a
          key={character.char_id}
          id="card-link-tag"
          onClick={() => history.push(`/character-file/${character.char_id}`)}
        >
          <div id="character-card" className="card">
            <h5 className="card-title">{character.name}</h5>
            <img
              src={character.img}
              className="card-img-top"
              alt={character.name}
            />
          </div>
        </a>
      );
    });
  }

  const displayAllCharacters = () => {
    console.log('displayallchars has run');
    setCharactersFiltered([]);
    setFiltered(0);
  };

  const sortAToZ = () => {
    if (filtered) {
      setCharactersFiltered(
        charactersFiltered.sort((a, b) => (a.name > b.name ? 1 : -1))
      );
      setSorted('a');
    } else {
      setCharacterList(
        characterList.sort((a, b) => (a.name > b.name ? 1 : -1))
      );

      setSorted('a');
    }
  };

  const sortZToA = () => {
    if (filtered) {
      setCharactersFiltered(
        charactersFiltered.sort((a, b) => (a.name > b.name ? -1 : 1))
      );
      setSorted('z');
    } else {
      setCharacterList(
        characterList.sort((a, b) => (a.name > b.name ? -1 : 1))
      );

      setSorted('z');
    }
  };

  // create state for currentSeasonsFilter; useEffect checks if seasonmsFilter is falsy before running; if truthy,
  //set characterList to subset
  // make useEffect run async function only if sorted = "" and filterd = ""
  // all sorting/filtering functions will toggle "state" variable
  // useEffect will check firstly for filter, then for state. It will populate an array. then pass that array to characterCards or
  // new function that will render the cards from that array. Key is to only call the API on mounting. Perhaps I should add a conditional
  // statement to ensure this.
  useEffect(() => {
    console.log('useEffect has run');

    if (sorted) {
      console.log('sorted');
      // characterCards(charactersFiltered);

      // if (sorted === 'z') {
      //   console.log('sorted z to a');
      // } else if (sorted === 'a') {
      //   console.log('sorted a to z');
      // }
    } else {
      async function populateCharArray() {
        let response = await fetch('https://breakingbadapi.com/api/characters');
        response = await response.json();
        let charArray = [];
        for (let i = 0; i < response.length; i++) {
          if (
            response[i].char_id !== 39 &&
            response[i].char_id !== 117 &&
            response[i].char_id !== 112 &&
            response[i].char_id !== 113 &&
            response[i].char_id !== 114 &&
            response[i].char_id !== 115 &&
            response[i].char_id !== 116
          ) {
            charArray.push(response[i]);
          }
        }
        setCharacterList(charArray);
      }
      populateCharArray();
    }
  }, [state]);

  return (
    <div className="character-index-page-container">
      <h1>Characters</h1>

      <div className="buttons-container">
        <div className="alphabetical-sort">
          <button onClick={() => sortAToZ()}> A → Z</button>
          <button onClick={() => sortZToA()}> Z → A</button>
        </div>
        <div className="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            // data-offset="100px"
          >
            {filtered ? `Season ${filtered}` : 'Filter by Season'}
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button
              class="dropdown-item"
              type="button"
              onClick={() => displayAllCharacters()}
            >
              See All Characters
            </button>
            <button
              class="dropdown-item"
              type="button"
              onClick={() => changeSeasonsFilter(1)}
            >
              Season 1
            </button>
            <button
              class="dropdown-item"
              type="button"
              onClick={() => changeSeasonsFilter(2)}
            >
              Season 2
            </button>
            <button
              class="dropdown-item"
              type="button"
              onClick={() => changeSeasonsFilter(3)}
            >
              Season 3
            </button>
            <button
              class="dropdown-item"
              type="button"
              onClick={() => changeSeasonsFilter(4)}
            >
              Season 4
            </button>
            <button
              class="dropdown-item"
              type="button"
              onClick={() => changeSeasonsFilter(5)}
            >
              Season 5
            </button>
          </div>
        </div>
      </div>

      <div className="character-cards-container">
        {charactersFiltered.length === 0
          ? characterCards(characterList)
          : characterCards(charactersFiltered)}
      </div>
    </div>
  );
};

export default CharacterIndex;

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './CharacterIndex.css';
import TestCharPage from './TestCharPage';
import CharacterFile from '../../CharacterFile/CharacterFile';

// handle Holly (remove from state variable before passing?) & handle "Ortgea"
// serve error messages for 503s?
// reduce delay when clicking sort by creating static array from api call then sorting that array instead of calling api every time sort is clicked
// left-right scroll is auto-enabled?
// fix overflow of image (e.g. hector and leonel salamanca overflow b/c title is two )
// stacey appears twice (55 & 117)
// creat if statements to account for characters whose ids are out of order
// get rid of auto-0render walter before character index page loads
// pass the whole character array as props to CharacterFile? this would eliminate the load time and empty image

// filter out characters that don't match user's selected season input

// give user dropdown button with options to check seasons, then click "apply".
// "Apply" should submit a form that populates an array (fills empty array, or replaces array [1, 2, 3, 4, 5])
// function should have a for loop that iterates over seasons array, and for each season, another for loop which
// iterates over the API response array of full characters
// for each character, if their "appearances" property contains the season, that character object should be added to a "toAppear" array
// the "to Appear" should repalce the charArray as current state
// the dropdown button should

const CharacterIndex = () => {
  const [characterList, setCharacterList] = useState([]);
  const [state, setState] = useState(true);

  let seasonsFilter = [];
  let toInclude = [];
  let toExclude = [];
  // let combinedArray = [];

  // add reset seasons filter button

  // const changeSeasonsFilter = (seasonNumber) => {

  //   seasonsFilter = [seasonNumber];
  //   console.log('seasonsFilter: ' + seasonsFilter);
  //   console.log(characterList);
  //   filterSeasons();
  // };

  const changeSeasonsFilter = (seasonNumber) => {
    let allCharacters = [
      [
        {
          char_id: 1,
          name: 'Walter White',
          birthday: '09-07-1958',
          occupation: ['High School Chemistry Teacher', 'Meth King Pin'],
          img:
            'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
          status: 'Presumed dead',
          nickname: 'Heisenberg',
          appearance: [1, 2, 3, 4, 5],
          portrayed: 'Bryan Cranston',
          category: 'Breaking Bad',
          better_call_saul_appearance: [1, 2, 3, 4]
        },
        {
          char_id: 2,
          name: 'Jesse Pinkman',
          birthday: '09-24-1984',
          occupation: ['Meth Dealer'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441',
          status: 'Alive',
          nickname: "Cap n' Cook",
          appearance: [1, 2, 3, 4, 5],
          portrayed: 'Aaron Paul',
          category: 'Breaking Bad',
          better_call_saul_appearance: [1, 2, 3, 4]
        },
        {
          char_id: 3,
          name: 'Skyler White',
          birthday: '08-11-1970',
          occupation: [
            'House wife',
            'Book Keeper',
            'Car Wash Manager',
            'Taxi Dispatcher'
          ],
          img:
            'https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg',
          status: 'Alive',
          nickname: 'Sky',
          appearance: [1, 2, 3, 4, 5],
          portrayed: 'Anna Gunn',
          category: 'Breaking Bad',
          better_call_saul_appearance: [2, 3, 4]
        },
        {
          char_id: 4,
          name: 'Walter White Jr.',
          birthday: '07-08-1993',
          occupation: ['Teenager'],
          img:
            'https://media1.popsugar-assets.com/files/thumbor/WeLUSvbAMS_GL4iELYAUzu7Bpv0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/12/910/n/1922283/fb758e62b5daf3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg',
          status: 'Alive',
          nickname: 'Flynn',
          appearance: [1, 2, 3, 4, 5],
          portrayed: 'RJ Mitte',
          category: 'Breaking Bad',
          better_call_saul_appearance: [1, 2]
        },
        {
          char_id: 5,
          name: 'Henry Schrader',
          birthday: 'Unknown',
          occupation: ['DEA Agent'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/b/b7/HankS5.jpg/revision/latest/scale-to-width-down/700?cb=20120620014136',
          status: 'Deceased',
          nickname: 'Hank',
          appearance: [1, 2, 3, 4, 5],
          portrayed: 'Dean Norris',
          category: 'Breaking Bad',
          better_call_saul_appearance: [3, 4]
        },
        {
          char_id: 6,
          name: 'Marie Schrader',
          birthday: 'Unknown',
          occupation: ['Housewife', 'Clepto'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/1/10/Season_2_-_Marie.jpg/revision/latest?cb=20120617211645',
          status: 'Alive',
          nickname: 'Marie',
          appearance: [1, 2, 3, 4, 5],
          portrayed: 'Betsy Brandt',
          category: 'Breaking Bad',
          better_call_saul_appearance: [4]
        },
        {
          char_id: 7,
          name: 'Mike Ehrmantraut',
          birthday: 'Unknown',
          occupation: ['Hitman', 'Private Investigator', 'Ex-Cop'],
          img:
            'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_mike-ehrmantraut-lg.jpg',
          status: 'Deceased',
          nickname: 'Mike',
          appearance: [2, 3, 4, 5],
          portrayed: 'Jonathan Banks',
          category: 'Breaking Bad, Better Call Saul',
          better_call_saul_appearance: [1, 2, 3, 4]
        },
        {
          char_id: 8,
          name: 'Saul Goodman',
          birthday: 'Unknown',
          occupation: ['Lawyer'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/1/16/Saul_Goodman.jpg/revision/latest?cb=20120704065846',
          status: 'Alive',
          nickname: 'Jimmy McGill',
          appearance: [2, 3, 4, 5],
          portrayed: 'Bob Odenkirk',
          category: 'Breaking Bad, Better Call Saul',
          better_call_saul_appearance: [1, 2, 3, 4]
        },
        {
          char_id: 9,
          name: 'Gustavo Fring',
          birthday: 'Unknown',
          occupation: [
            'Los-Pollos co-Founder',
            'Philanthropist',
            'Cartel Leader'
          ],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/1/1f/BCS_S4_Gustavo_Fring.jpg/revision/latest?cb=20180824195925',
          status: 'Deceased',
          nickname: 'Gus',
          appearance: [2, 3, 4],
          portrayed: 'Giancarlo Esposito',
          category: 'Breaking Bad, Better Call Saul',
          better_call_saul_appearance: [1, 2, 3, 4]
        },
        {
          char_id: 10,
          name: 'Hector Salamanca',
          birthday: 'Unknown',
          occupation: ['Former Senior Cartel Leader'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/b/b4/Hector_BCS.jpg/revision/latest?cb=20170810091606',
          status: 'Deceased',
          nickname: 'Don Hector',
          appearance: [1, 2, 3, 4],
          portrayed: 'Mark Margolis',
          category: 'Breaking Bad, Better Call Saul',
          better_call_saul_appearance: [1, 2, 3, 4]
        },
        {
          char_id: 11,
          name: 'Domingo Molina',
          birthday: 'Unknown',
          occupation: ['Meth Distributor'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/e/e7/Krazy8.png/revision/latest?cb=20130208041554',
          status: 'Deceased',
          nickname: 'Krazy-8',
          appearance: [1],
          portrayed: 'Maximino Arciniega',
          category: 'Breaking Bad',
          better_call_saul_appearance: [3, 4]
        },
        {
          char_id: 12,
          name: 'Tuco Salamanca',
          birthday: 'Unknown',
          occupation: ['Meth Distributor'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/a/a7/Tuco_BCS.jpg/revision/latest?cb=20170810082445',
          status: 'Deceased',
          nickname: 'Tuco',
          appearance: [1, 2],
          portrayed: 'Raymond Cruz',
          category: 'Breaking Bad, Better Call Saul',
          better_call_saul_appearance: [1, 2, 3, 4]
        },
        {
          char_id: 13,
          name: 'Marco & Leonel Salamanca',
          birthday: 'Unknown',
          occupation: ['Cartel Hitman'],
          img:
            'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_the-cousins-lg.jpg',
          status: 'Deceased',
          nickname: 'The Cousins',
          appearance: [3],
          portrayed: 'Luis & Daniel Moncada',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 14,
          name: 'Lydia Rodarte-Quayle',
          birthday: 'Unknown',
          occupation: ['Executive at Madrigal'],
          img:
            'https://media1.popsugar-assets.com/files/thumbor/wERDST0TUb-iHCSb2r5ZpsvaZLo/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2013/07/17/675/n/1922283/fae2f583f04bb80f_Laura-Fraser-is-back-as-Lydia-Rodarte-Quayle_gallery_primary/i/Laura-Fraser-Lydia-Rodarte-Quayle.jpg',
          status: 'Alive',
          nickname: 'Lydia',
          appearance: [5],
          portrayed: 'Laura Fraser',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 15,
          name: 'Todd Alquist',
          birthday: 'Unknown',
          occupation: ['Lab Assistant', 'Enforcer', 'Meth Cook'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/9/95/Todd_brba5b.png/revision/latest?cb=20130717134303',
          status: 'Deceased',
          nickname: 'Ricky Hitler',
          appearance: [5],
          portrayed: 'Jesse Plemons',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 16,
          name: 'Jane Margolis',
          birthday: 'Unknown',
          occupation: ['Tattoo Artist', 'Landlord'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/b/b4/Jane.jpg/revision/latest?cb=20090621233653',
          status: 'Deceased',
          nickname: 'Apology Girl',
          appearance: [2],
          portrayed: 'Krysten Ritter',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 17,
          name: 'Skinny Pete',
          birthday: 'Unknown',
          occupation: ['Low-level meth distributer'],
          img:
            'https://vignette.wikia.nocookie.net/breaking-bad-tv/images/c/ce/Sp.png/revision/latest?cb=20121016143623',
          status: 'Alive',
          nickname: 'Skinny',
          appearance: [1, 2, 3, 4, 5],
          portrayed: 'Charles Baker',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 18,
          name: 'Brandon Mayhew',
          birthday: 'Unknown',
          occupation: ['Low-level meth distributer'],
          img:
            'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_badger-lg.jpg',
          status: 'Alive',
          nickname: 'Badger',
          appearance: [1, 2, 3, 4, 5],
          portrayed: 'Matt L. Jones',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 19,
          name: 'Huell Babineaux',
          birthday: 'Unknown',
          occupation: ['Bodyguard'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/c/c1/4x11_-_Huell.png/revision/latest?cb=20130913100459&path-prefix=es',
          status: 'Alive',
          nickname: 'Huell',
          appearance: [4, 5],
          portrayed: 'Lavell Crawford',
          category: 'Breaking Bad',
          better_call_saul_appearance: [1, 2, 3, 4]
        },
        {
          char_id: 20,
          name: 'Steven Gomez',
          birthday: 'Unknown',
          occupation: ['DEA Agent'],
          img:
            'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_steven-gomez-lg.jpg',
          status: 'Deceased',
          nickname: 'Gomie',
          appearance: [1, 2, 3, 4, 5],
          portrayed: 'Steven Michael Quezada',
          category: 'Breaking Bad',
          better_call_saul_appearance: [1, 2, 3, 4]
        },
        {
          char_id: 21,
          name: 'Theodore Beneke',
          birthday: 'Unknown',
          occupation: ['Former President Beneke Fabricators'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/b/bd/Cast_bb_700x1000_todd-beneke-lg.jpg/revision/latest?cb=20170723165057',
          status: 'Alive',
          nickname: 'Ted',
          appearance: [2, 3, 4, 5],
          portrayed: 'Christopher Cousins',
          category: 'Breaking Bad',
          better_call_saul_appearance: [3, 4]
        },
        {
          char_id: 22,
          name: 'Gale Boetticher',
          birthday: 'Unknown',
          occupation: ['Chemist', 'Meth manufacturer'],
          img:
            'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_gale-boetticher-lg.jpg',
          status: 'Deceased',
          nickname: 'GB',
          appearance: [3],
          portrayed: 'David Costabile',
          category: 'Breaking Bad',
          better_call_saul_appearance: [2, 3, 4]
        },
        {
          char_id: 23,
          name: 'Andrea Cantillo',
          birthday: 'Unknown',
          occupation: ['Unknown'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/5/51/Andrea_-_To%27hajilee.png/revision/latest?cb=20131025094457',
          status: 'Deceased',
          nickname: 'Andrea',
          appearance: [3, 4, 5],
          portrayed: 'Emily Rios',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 24,
          name: 'Brock Cantillo',
          birthday: 'Unknown',
          occupation: ['Kid'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/9/97/Brock.png/revision/latest?cb=20170725193144',
          status: 'Alive',
          nickname: 'Brock',
          appearance: [3, 4, 5],
          portrayed: 'Ian Posada',
          category: 'Breaking Bad',
          better_call_saul_appearance: [1, 2]
        },
        {
          char_id: 25,
          name: 'Carmen Molina',
          birthday: 'Unknown',
          occupation: ['High School Principal'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/d/de/Carmen.JPG/revision/latest?cb=20100410125233',
          status: 'Alive',
          nickname: 'Carmen',
          appearance: [1, 2, 3, 5],
          portrayed: 'Carmen Serano',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 26,
          name: 'Gretchen Schwartz',
          birthday: 'Unknown',
          occupation: ['Co-owner Gray Matter'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/5/5e/Gretchen_Schwartz.png/revision/latest?cb=20131005103735&path-prefix=es',
          status: 'Alive',
          nickname: 'Gretchen',
          appearance: [1, 2, 5],
          portrayed: 'Jessica Hecht',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 27,
          name: 'Elliot Schwartz',
          birthday: 'Unknown',
          occupation: ['Co-Founder Gray Matter'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/8/8a/Elliott_Schwartz.png/revision/latest?cb=20131005103743&path-prefix=es',
          status: 'Alive',
          nickname: 'Elliot',
          appearance: [1, 5],
          portrayed: 'Adam Godley',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 28,
          name: 'Gonzo',
          birthday: 'Unknown',
          occupation: ["Tuco's Bodyguard"],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/d/d6/Gonzo.JPG/revision/latest?cb=20100415212944',
          status: 'Deceased',
          nickname: 'Gonzo',
          appearance: [1, 2],
          portrayed: 'Jesus, Payan, Jr.',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 29,
          name: 'Christian Ortgea',
          birthday: 'Unknown',
          occupation: ['Low-level meth distributor'],
          img:
            'https://res.cloudinary.com/dwvrok1le/image/upload/v1540314304/c8acek3pimb0hb4efrvf.jpg',
          status: 'Deceased',
          nickname: 'Combo',
          appearance: [1, 2, 3],
          portrayed: 'Rodney Rush',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 30,
          name: 'Mrs. Pinkman',
          birthday: 'Unknown',
          occupation: ['unknown'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/a/a2/Tess_Harper.jpg/revision/latest?cb=20120923235754',
          status: 'Alive',
          nickname: "Jesse's mom",
          appearance: [1, 2, 3],
          portrayed: 'Tess Harper',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 31,
          name: 'Adam Pinkman',
          birthday: 'Unknown',
          occupation: ['unknown'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/c/c9/AdamPinkman.png/revision/latest?cb=20141117180836&path-prefix=es',
          status: 'Alive',
          nickname: "Jesse's dad",
          appearance: [1, 2, 3],
          portrayed: 'Michael Bofshever',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 32,
          name: 'Jake Pinkman',
          birthday: 'Unknown',
          occupation: ['Kid', "Jesse's little brother"],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/a/a4/Jake.jpg/revision/latest?cb=20121214201656&path-prefix=de',
          status: 'Alive',
          nickname: 'Jake',
          appearance: [1],
          portrayed: 'Ben Petry',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 33,
          name: 'No-Doze',
          birthday: 'Unknown',
          occupation: ['Juarez Cartel Lieutenant'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/c/ca/No_Doze_2.png/revision/latest?cb=20131014073210',
          status: 'Deceased',
          nickname: 'No-Doze',
          appearance: [1, 2],
          portrayed: 'Cesar Garcia',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 34,
          name: 'Emilio Koyama',
          birthday: 'Unknown',
          occupation: ['Low-level meth distributor'],
          img:
            'https://vignette.wikia.nocookie.net/trbreakingbad/images/9/9c/Emilio.jpeg/revision/latest?cb=20161029192022',
          status: 'Deceased',
          nickname: 'Emilio',
          appearance: [1],
          portrayed: 'John Koyama',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 35,
          name: 'Dr. Delcavoli',
          birthday: 'Unknown',
          occupation: ['Physician'],
          img:
            'https://res.cloudinary.com/dwvrok1le/image/upload/v1540314509/lj5qlbe6xvmmpxnspz6y.jpg',
          status: 'Alive',
          nickname: 'Dr. Delcavoli',
          appearance: [1, 2],
          portrayed: 'David House',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 36,
          name: 'Wendy S.',
          birthday: 'Unknown',
          occupation: ['Prostitute'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/c/cc/Wendy.jpg/revision/latest?cb=20170721162715',
          status: 'Alive',
          nickname: 'Wendy',
          appearance: [1, 2, 3],
          portrayed: 'Julie Minesci',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 37,
          name: 'Bogdan Wolynetz',
          birthday: 'Unknown',
          occupation: ['Former owner of A1A Car Wash'],
          img:
            'https://i.pinimg.com/originals/d5/c0/34/d5c0345ae70fbdbaa33b7537d685da54.jpg',
          status: 'Alive',
          nickname: 'Bogdan',
          appearance: [1, 3, 4],
          portrayed: 'Marius Stan',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 38,
          name: 'Ken',
          birthday: 'Unknown',
          occupation: ['Stock Broker'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/8/8c/Ken.png/revision/latest?cb=20170721163649',
          status: 'Alive',
          nickname: 'Ken Wins',
          appearance: [1],
          portrayed: 'Kyle Bornheimer',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 39,
          name: 'Holly White',
          birthday: 'Unknown',
          occupation: ['Infant'],
          img:
            'https://pmctvline2.files.wordpress.com/2013/09/breaking-bad-elanor-anne-wenrich-325.jpg?w=325&h=240',
          status: 'Alive',
          nickname: 'Holly',
          appearance: [2, 3, 4, 5],
          portrayed: 'Unknown',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 40,
          name: 'George Merkert',
          birthday: 'Unknown',
          occupation: ['Former Head of Albuquerque DEA'],
          img:
            'https://m.media-amazon.com/images/M/MV5BMTkwMTkxNjUzM15BMl5BanBnXkFtZTgwMTg5MTczMTE@._V1_UY317_CR175,0,214,317_AL_.jpg',
          status: 'Alive',
          nickname: 'ASAC Merkert',
          appearance: [2, 3, 4, 5],
          portrayed: 'Michael Shamus Wiles',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 41,
          name: 'Donald Margolis',
          birthday: 'Unknown',
          occupation: ['Air-Traffic Controller', 'Landlord'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/1/12/Donald_Margolis.png/revision/latest?cb=20120802212034',
          status: 'Unknown',
          nickname: "Jane's dad",
          appearance: [2, 3],
          portrayed: 'John de Lancie',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 42,
          name: 'Clovis',
          birthday: 'Unknown',
          occupation: ['Mechanic'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/0/0f/Clovis.JPG/revision/latest?cb=20100415221013',
          status: 'Alive',
          nickname: 'Clovis',
          appearance: [2, 3],
          portrayed: 'Tom Kiesche',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 43,
          name: 'SAC Ramey',
          birthday: 'Unknown',
          occupation: ['DEA agent'],
          img:
            'https://res.cloudinary.com/dwvrok1le/image/upload/v1539360786/o7thsjdorobfbetqaefj.jpg',
          status: 'Alive',
          nickname: 'SAC Ramey',
          appearance: [2, 4, 5],
          portrayed: 'Todd Terry',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 44,
          name: 'Victor',
          birthday: 'Unknown',
          occupation: ['Henchman of Gustavo Fring'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/4/48/Victor2.png/revision/latest?cb=20131009225027',
          status: 'Deceased',
          nickname: 'Victor',
          appearance: [2, 3, 4],
          portrayed: 'Jeremiah Bitsui',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 45,
          name: 'Tomás Cantillo',
          birthday: 'Unknown',
          occupation: ['Kid', 'Gang member for a rival dealer in ABQ'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/e/ec/Tomas.png/revision/latest?cb=20130131043014',
          status: 'Deceased',
          nickname: "Andrea's brother",
          appearance: [2, 3],
          portrayed: 'Angelo Martinez',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 46,
          name: 'Francesca Liddy',
          birthday: 'Unknown',
          occupation: [
            'Department of Motor Vehicles',
            'Secretary for Saul Goodman Associates'
          ],
          img:
            'https://res.cloudinary.com/dwvrok1le/image/upload/v1539362182/o9mstjonfn6dsdi3uij6.jpg',
          status: 'Alive',
          nickname: 'Honey Tits',
          appearance: [2, 3, 4, 5],
          portrayed: 'Tina Parker',
          category: 'Breaking Bad, Better Call Saul',
          better_call_saul_appearance: []
        },
        {
          char_id: 47,
          name: 'Cynthia',
          birthday: 'Unknown',
          occupation: ['Los Pollos Hermanos Manager'],
          img:
            'https://res.cloudinary.com/dwvrok1le/image/upload/v1539362375/z63youp272k5mbqbuqj9.jpg',
          status: 'Alive',
          nickname: 'Cynthia',
          appearance: [2, 3, 4],
          portrayed: 'Ashley Kajiki',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 48,
          name: 'Tortuga',
          birthday: 'Unknown',
          occupation: ['Juarez Cartel member', 'DEA informant'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/5/58/BBWA_Tortuga.jpg/revision/latest?cb=20131101172007',
          status: 'Deceased',
          nickname: 'Tortuga',
          appearance: [2, 3],
          portrayed: 'Danny Trejo',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 49,
          name: 'Tim Roberts',
          birthday: 'Unknown',
          occupation: ['Detective for the APD'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/8/8d/2x02_-_Tim_Roberts.jpg/revision/latest?cb=20110927053954',
          status: 'Alive',
          nickname: 'Detective Roberts',
          appearance: [2, 4],
          portrayed: 'Nigel Gibbs',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 50,
          name: 'Juan Bolsa',
          birthday: 'Unknown',
          occupation: ['Mexican drug cartel boss'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/3/38/Bolsa.png/revision/latest?cb=20180825204033',
          status: 'Deceased',
          nickname: 'Don Juan',
          appearance: [3, 4],
          portrayed: 'Javier Grajeda',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 51,
          name: 'Group Leader',
          birthday: 'Unknown',
          occupation: ['Drug & Alcohol Rehabilitation Counselor'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/8/81/Group_Leader_Brown_Shirt_-_Kafkaesque.png/revision/latest?cb=20131025095333',
          status: 'Alive',
          nickname: 'Counselor',
          appearance: [3, 4],
          portrayed: 'Jere Burns',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 52,
          name: 'Kaylee Ehrmantraut',
          birthday: 'Unknown',
          occupation: ['Kid'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/c/cc/Kaylee.png/revision/latest?cb=20170810082843',
          status: 'Alive',
          nickname: "Mike's Granddaughter",
          appearance: [3, 5],
          portrayed: 'Kaija Rose Bales',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 53,
          name: 'Pamela',
          birthday: 'Unknown',
          occupation: ['Attorney'],
          img:
            'https://res.cloudinary.com/dwvrok1le/image/upload/v1539373707/bbb6muek0tcmbc3g2sog.jpg',
          status: 'Alive',
          nickname: "Skyler's attorney",
          appearance: [3],
          portrayed: 'Julie Dretzin',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 54,
          name: 'Duane Chow',
          birthday: 'Unknown',
          occupation: ['Owner of Golden Moth Chemical'],
          img:
            'https://res.cloudinary.com/dwvrok1le/image/upload/v1539373871/ssk1t4hvo9tmhvdt5hcn.jpg',
          status: 'Deceased',
          nickname: 'Chow',
          appearance: [3, 5],
          portrayed: 'James Ning',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 55,
          name: 'Stacey Ehrmantraut',
          birthday: 'Unknown',
          occupation: ['Unknown'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/b/b3/StaceyEhrmantraut.png/revision/latest?cb=20150310150049',
          status: 'Alive',
          nickname: "Mike's daugter-in-law",
          appearance: [3],
          portrayed: 'Kerry Condon',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
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
        },
        {
          char_id: 57,
          name: 'Jack Welker',
          birthday: 'Unknown',
          occupation: ['Criminal Gang Leader'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/c/ce/Jack5x13.png/revision/latest?cb=20130912225922',
          status: 'Deceased',
          nickname: 'Uncle Jack',
          appearance: [5],
          portrayed: 'Michael Bowen',
          category: 'Breaking Bad',
          better_call_saul_appearance: []
        },
        {
          char_id: 112,
          name: 'Kimberly Wexler',
          birthday: 'Unknown',
          occupation: ['Lawyer'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/f/f7/BCS_S4_Kim_Wexler.jpg/revision/latest?cb=20180824195845',
          status: 'Alive',
          nickname: 'Kim',
          appearance: null,
          portrayed: 'Rhea Seehorn',
          category: 'Better Call Saul',
          better_call_saul_appearance: [3, 4]
        },
        {
          char_id: 113,
          name: 'Howard Hamlin',
          birthday: 'Unknown',
          occupation: ['Lawyer'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/5/57/BCS_S4_Howard_Hamlin.jpg/revision/latest?cb=20180824195855',
          status: 'Alive',
          nickname: 'Howard',
          appearance: null,
          portrayed: 'Patrick Fabian',
          category: 'Better Call Saul',
          better_call_saul_appearance: []
        },
        {
          char_id: 114,
          name: 'Charles McGill',
          birthday: 'Unknown',
          occupation: ['Lawyer'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/3/3e/BCS_S3_ChuckMcGill.jpg/revision/latest?cb=20170327185308',
          status: 'Deceased',
          nickname: 'Chuck',
          appearance: null,
          portrayed: 'Michael McKean',
          category: 'Better Call Saul',
          better_call_saul_appearance: []
        },
        {
          char_id: 115,
          name: 'Ignacio Varga',
          birthday: 'Unknown',
          occupation: ['Crimal Gang Lieutenant'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/b/b1/BCS_S4_Nacho_Varga.jpg/revision/latest?cb=20180824195910',
          status: 'Alive',
          nickname: 'Nacho',
          appearance: null,
          portrayed: 'Michael Mano',
          category: 'Better Call Saul',
          better_call_saul_appearance: []
        },
        {
          char_id: 116,
          name: 'Eduardo Salamanca',
          birthday: 'Unknown',
          occupation: ['Cartel Member'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/8/85/LaloProfileBCS.png/revision/latest?cb=20180925050152',
          status: 'Alive',
          nickname: 'Lalo',
          appearance: null,
          portrayed: 'Tony Dalton',
          category: 'Better Call Saul',
          better_call_saul_appearance: []
        },
        {
          char_id: 117,
          name: 'Stacey Ehrmantraut',
          birthday: 'Unknown',
          occupation: ['Mother'],
          img:
            'https://vignette.wikia.nocookie.net/breakingbad/images/b/b3/StaceyEhrmantraut.png/revision/latest?cb=20150310150049',
          status: 'Alive',
          nickname: 'Stacey',
          appearance: null,
          portrayed: 'Kerry Condon',
          category: 'Better Call Saul',
          better_call_saul_appearance: []
        }
      ]
    ];
    // sesonsfilter is just 1 number

    toInclude = [];
    // toExclude = [];
    // let loopVariable;
    // combinedArray.length > 0
    //   ? (loopVariable = combinedArray)
    //   : (loopVariable = characterList);

    characterList.forEach((character) => {
      if (character.appearance && character.appearance.includes(seasonNumber)) {
        toInclude.push(character);
      } /* else toExclude.push(character);*/
    });
    console.log(toInclude);
    // console.log(toExclude);
    // combinedArray = toInclude.concat(toExclude);

    setCharacterList(toInclude);
    setState(!state);
  };

  // filterSeasons();
  // setCharacterList(toInclude);
  const sortAToZ = () => {
    setCharacterList(characterList.sort((a, b) => (a.name > b.name ? 1 : -1)));
    setState(!state);
  };

  const sortZToA = () => {
    setCharacterList(characterList.sort((a, b) => (a.name > b.name ? -1 : 1)));
    setState(!state);
  };

  useEffect(async () => {
    let response = await fetch('https://breakingbadapi.com/api/characters');
    response = await response.json();
    let charArray = [];
    for (let i = 0; i < response.length; i++) {
      charArray.push(response[i]);
    }
    setCharacterList(charArray);
  }, []);

  // add function that rubns on button click which invokes filterSeasons and populates array with form value
  return (
    <div className="character-index-page-container">
      <h1>Characters</h1>

      <div className="buttons-container">
        <button onClick={() => sortAToZ()}>Sort A -> Z</button>
        <button onClick={() => sortZToA()}>Sort Z -> A</button>

        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
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
        {characterList.map((character) => {
          //fixthis if (characterList[0].img)
          return (
            <a id="card-link-tag" href={`/character-file/${character.char_id}`}>
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
        })}
      </div>
    </div>
  );
};

export default CharacterIndex;

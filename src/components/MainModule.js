import React, { useState } from 'react';
import Key from './Key.js';
import Chords from './Chords.js';
import Fretboard from './Fretboard.js';


function MainModule () {

  const notesArray                    = ["b","c","c♯","d","d♯","e","f","f♯","g","g♯","a","a♯","b","c","c♯","d","d♯","e","f","f♯","g","g♯","a","a♯","b"];
  const equivalents                   = {a:"a", b:"b", c:"c", d:"d", e:"e", f:"f", g:"g", "c♯":"d♭","d♯":"e♭", "e♯":"f", "f♯":"g♭","g♯":"a♭","a♯":"b♭", "b♯":"c"}
  const ionian                        = {num: 1, name:"Ionian",     isMajor: true,  intervals:[2,2,1,2,2,2,1], chords:["maj","min","min","maj","maj","min","dim"], sharps:["c","g","d","a","e","b","f♯"]};
  const dorian                        = {num: 2, name:"Dorian",     isMajor: false, intervals:[2,1,2,2,2,1,2], chords:["min","min","maj","maj","min","dim","maj"], sharps:["d","a","e","b","f♯","c♯","g#"]};
  const phrygian                      = {num: 3, name:"Phrygian",   isMajor: false, intervals:[1,2,2,2,1,2,2], chords:["min","maj","maj","min","dim","maj","min"], sharps:["e","b","f♯","c♯","g♯","d♯","a♯"]};
  const lydian                        = {num: 4, name:"Lydian",     isMajor: true,  intervals:[2,2,2,1,2,2,1], chords:["maj","maj","min","dim","maj","min","min"], sharps:["f","c","g","d","a","e","b"]};
  const myxolydian                    = {num: 5, name:"Myxolydian", isMajor: true,  intervals:[2,2,1,2,2,1,2], chords:["maj","min","dim","maj","min","min","maj"], sharps:["g","d","a","e","b","f♯","c♯"]};
  const aeolian                       = {num: 6, name:"Aeolian",    isMajor: false, intervals:[2,1,2,2,1,2,2], chords:["min","dim","maj","min","min","maj","maj"], sharps:["a","e","b","f♯","c♯","g♯","d♯"]};
  const locrian                       = {num: 7, name:"Locrian",    isMajor: false, intervals:[1,2,2,1,2,2,2], chords:["dim","maj","min","min","maj","maj","min"], sharps:["b","f♯","c♯","g#","d♯","a♯","f"]};
  const modes                         = [ionian, dorian, phrygian, lydian, myxolydian, aeolian, locrian]


  const [key, setKey]                           = useState({tonic:"c", mode:ionian});
  const [notes, setNotes]                       = useState(["c","d","e","f","g","a","b"]);
  const [chords, setChords]                     = useState(["maj","min","min","maj","maj","min","dim"])
  const [numerals, setNumerals]                 = useState(["I","II","iii","IV","V","vi","vii°"]);




  const nameToNum = (x) => {
    let arr = [];
    for (var i = 0; i < x.length; i++) {
      switch (x[i]) {
        case "min":
          arr.push( numerals[i].replace("°","").toLowerCase() );
          break;
        case "maj":
          arr.push( numerals[i].replace("°","").toUpperCase() );
          break;
        case "dim":
          arr.push( numerals[i].replace("°","").toLowerCase().concat("°") );
          break;
        case "aug":
          arr.push( numerals[i].replace("°","").toUpperCase().concat("+") );
          break;
        default: arr.push( numerals[i].replace("°","").toUpperCase() );
      }
    }
    setNumerals(arr);
  }



  return (
    <div id="mainModule">


      <div id="upperRow">

        <div id="upperLeft">
          <Key

            modes= {modes}
            scale= {key}
            setNotes = {setNotes}
            setKey = {setKey}
            setChords = {setChords}
            notesArray= {notesArray}
            eqvl= {equivalents}
            nameToNum= {nameToNum}
          />
        </div>

        <div id="upperRight">
          <Chords
            notes={notes}
            chords={chords}
            numerals={numerals}
            modes={modes}
          />

        </div>

      </div>


      <div id="lowerRow">
        <Fretboard
          scale     = {key}
          notes   = {notes}
          eqvl    = {equivalents}
        />
      </div>




    </div>
  )
}

export default MainModule;

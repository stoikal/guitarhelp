import React from 'react';

function Chords (props) {

  const chordList = props.notes.map((str, i) => {
    let quality;
    switch (props.chords[i]) {
      case "min":
        quality = "m";
        break;
      case "maj":
        quality = "";
        break;
      case "dim":
        quality = "°";
        break;
      case "aug":
        quality = "+";
        break;
      default: quality = props.chords[i]
    }

    return (
      <div key={str + i} className={`chords ${props.chords[i]}`}>
        <div className={`chordName ${props.chords[i]}`}>
          {str.toUpperCase() + quality
          }
        </div>
        <div className={`chordNumeral ${props.chords[i]}`}>
          {props.numerals[i]}
        </div>
      </div>
    )
  });


  return (
    <div className="chordsContainer">
      <div className="chordsWrap">
        {chordList}
      </div>
    </div>
  )
}

export default Chords;

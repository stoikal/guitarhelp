import React from 'react';

function Fretboard (props) {

  const row1 = ["f","f♯","g","g♯","a","a♯","b","c","c♯","d","d♯","e"];
  const row2 = ["c","c♯","d","d♯","e","f","f♯","g","g♯","a","a♯","b"];
  const row3 = ["g♯","a","a♯","b","c","c♯","d","d♯","e","f","f♯","g"];
  const row4 = ["d♯","e","f","f♯","g","g♯","a","a♯","b","c","c♯","d"];
  const row5 = ["a♯","b","c","c♯","d","d♯","e","f","f♯","g","g♯","a"];
  const row6 = ["f","f♯","g","g♯","a","a♯","b","c","c♯","d","d♯","e"];

  const allrows = [row1, row2, row3, row4, row5, row6 ]




  const changeToFlat = (dot) => {
    let x = dot;

    if ( props.scale.mode.sharps.indexOf(props.scale.tonic) < 0  ) {
      x=props.eqvl[dot]
    }

    return x
  }



  const determineClassName = (dot) => {
    let x = changeToFlat(dot);
    let str = `dots ${x} show`
    switch (props.notes.indexOf(x)) {
      case -1:
        str  = `dots ${x}`
        break;
      case 0 :
        str += ` rootnote`
        break;
      case 2 :
        str += ` thirdnote`
        break;
      case 4 :
        str += ` fifthnote`
        break;
      case 6 :
        str += ` seventhnote`
        break;
      default: str = `dots ${x} show`
    }
    return str
  }


  const fretRows = allrows.map((arr, i) => {
    return (
      <div key={`row ${i+1}`}className="fretRows">
        {
          arr.map((dot, x) => {
            return (
              <div key={dot+x} className="rowDigit">
                <div className={determineClassName(dot)}>
                  {changeToFlat(dot).toUpperCase()}
                </div>
              </div>
            )
          })
        }
        <div className="strings"></div>
      </div>
    )
  });

  const openString = ["e","a","d","g","b","e"].map((dot, i) => {
    return (
      <div key={dot+i} className="openStringColumn">
        <div className={`${determineClassName(dot)} open`}>
          {dot.toUpperCase()}
        </div>
      </div>
    )
  })

/* ========================================================================= */

  return (
    <div id="fretboardContainer">
      <div id="fretboardWrap">
        <div id="openString">
            {openString}
        </div>
        <div id="fretboard">
            {fretRows}
        </div>
      </div>
      <div className="fretLegend">
        <div className="utafFiller0"></div>
        <div id="underTheActualFretboard">

          <div className="utafFiller2"></div>
          <div className="fretNum">3</div>
          <div className="utafFiller1"></div>
          <div className="fretNum">5</div>
          <div className="utafFiller1"></div>
          <div className="fretNum">7</div>
          <div className="utafFiller1"></div>
          <div className="fretNum">9</div>
          <div className="utafFiller2"></div>
          <div className="fretNum">12</div>
        </div>

      </div>
      <div className="fretLegend">
        <div id="colorLegend">
          <div className="singleColor"><div className="dots show sym rootnote"></div> <span className="colorLegend">= root</span></div>
          <div className="singleColor"><div className="dots show sym thirdnote"></div> <span className="colorLegend">= third</span></div>
          <div className="singleColor"><div className="dots show sym fifthnote"></div> <span className="colorLegend">= fifth</span></div>
          <div className="singleColor"><div className="dots show sym seventhnote"></div> <span className="colorLegend">= seventh</span></div>
        </div>
      </div>
    </div>
  )
}

export default Fretboard;

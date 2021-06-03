import React from 'react';


function Key (props) {

  const openModeModal = () => {
    document.getElementById("modeModal").style.display = "block";
  }

  const openTonicModal = () => {
    document.getElementById("tonicModal").style.display = "block";
  }

  const closeModal = () => {
    document.getElementById("modeModal").style.display = "none";
    document.getElementById("tonicModal").style.display = "none";
  }

  const changeKey = (t, m) => {
    let k      = t.toLowerCase();
    let abc    = props.notesArray.slice(props.notesArray.indexOf(t));
    let intv   = m.intervals;

    let arr    = [];


    for (var i = 0; i < 7; i++) {
      let p = abc[ intv.slice(0,i).reduce((a, b) => a + b, 0) ];
      if ( m.sharps.indexOf(k) < 0 ) {
        p = props.eqvl[p];
      }
      arr.push( p )
    }

    props.setChords(m.chords);
    props.setKey({tonic: t, mode: m});
    props.setNotes(arr);
    props.nameToNum(m.chords);
  }

  const handleModeChange = (num) => {
    let m = props.modes[num];
    changeKey(props.scale.tonic,m);
    closeModal();
  }

  const handleTonicChange = (t) => {
    let m = props.modes[props.scale.mode.num - 1];
    changeKey(t,m);
    closeModal();
  }

  const handleKeyRaise = () => {
    let t = props.notesArray[props.notesArray.indexOf(props.scale.tonic) + 1]
    handleTonicChange(t);
  }

  const handleKeyFlatten = () => {
    let t = props.notesArray[props.notesArray.lastIndexOf(props.scale.tonic) - 1]
    handleTonicChange(t);
  }




  const modeColumn1 = ["Ionian / major","Dorian","Phrygian","Lydian"].map((str, i) => {
    return (
      <div
        key={str}
        className="modeList"
        onClick={() => {handleModeChange(i,null)}}
      >
        {str}
      </div>
    )
  });

  const modeColumn2 = ["Myxolydian","Aeolian / natural minor","Locrian"].map((str, i) => {
    return (
      <div
        key={str}
        className="modeList"
        onClick={() => {handleModeChange(i+4,null)}}
      >
        {str}
      </div>
    )
  });

  return (
    <div className="keyWrap">
        <div className="key">
          <div className="raiseOrFlattenKey" onClick={handleKeyRaise}>
            ^
          </div>
          <div className="fillerDiv"></div>
        </div>

        <div className="key">
            <div className="console tonic" onClick={openTonicModal}>
              { props.modes[props.scale.mode.num - 1].sharps.indexOf(props.scale.tonic) < 0 ? props.eqvl[props.scale.tonic] : props.scale.tonic  }
            </div>
            <div className="console mode" onClick={openModeModal}>
              { props.modes[props.scale.mode.num - 1].name}
            </div>
        </div>

        <div className="key">
          <div className="raiseOrFlattenKey flatten" onClick={handleKeyFlatten}>
            ^
          </div>
          <div className="fillerDiv"></div>

        </div>

        {/* MODAL BOX */}
        <div className="modal" id="tonicModal">
          <div className="tonic-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <div className="blackKeys">
              <div className="keys blk" onClick={(e) => handleTonicChange("c♯",null)}>{props.modes[props.scale.mode.num - 1].sharps.indexOf("c♯") < 0 ? props.eqvl["c♯"].toUpperCase() : "C♯"}</div>
              <div className="keys blk" onClick={(e) => handleTonicChange("d♯",null)}>{props.modes[props.scale.mode.num - 1].sharps.indexOf("d♯") < 0 ? props.eqvl["d♯"].toUpperCase() : "D♯"}</div>
              <div className="keys blk filler"></div>
              <div className="keys blk" onClick={(e) => handleTonicChange("f♯",null)}>{props.modes[props.scale.mode.num - 1].sharps.indexOf("f♯") < 0 ? props.eqvl["f♯"].toUpperCase() : "F♯"}</div>
              <div className="keys blk" onClick={(e) => handleTonicChange("g♯",null)}>{props.modes[props.scale.mode.num - 1].sharps.indexOf("g♯") < 0 ? props.eqvl["g♯"].toUpperCase() : "G♯"}</div>
              <div className="keys blk" onClick={(e) => handleTonicChange("a♯",null)}>{props.modes[props.scale.mode.num - 1].sharps.indexOf("a♯") < 0 ? props.eqvl["a♯"].toUpperCase() : "A♯"}</div>
            </div>
            <div className="whiteKeys">
              <div className="keys wht" onClick={(e) => handleTonicChange("c",null)}>C</div>
              <div className="keys wht" onClick={(e) => handleTonicChange("d",null)}>D</div>
              <div className="keys wht" onClick={(e) => handleTonicChange("e",null)}>E</div>
              <div className="keys wht" onClick={(e) => handleTonicChange("f",null)}>F</div>
              <div className="keys wht" onClick={(e) => handleTonicChange("g",null)}>G</div>
              <div className="keys wht" onClick={(e) => handleTonicChange("a",null)}>A</div>
              <div className="keys wht" onClick={(e) => handleTonicChange("b",null)}>B</div>
            </div>
          </div>
        </div>

        <div className="modal" id="modeModal">
          <div className="mode-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <div id="modeColumn1">
              {modeColumn1}
            </div>
            <div id="modeColumn2">
              {modeColumn2}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Key;

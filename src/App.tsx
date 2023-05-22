import React, { useState, useEffect } from "react";
import { pickNote } from "./notes";

import "./App.css";

const App = () => {
  const [note, setNote] = useState(pickNote());
  const [bpm, setBPM] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setNote(pickNote());
    }, Math.floor((60 / bpm) * 1000));
    return () => clearInterval(interval);
  }, [bpm]);

  return (
    <div className="App">
      <header className="App-header">
        <label htmlFor="bpm">
          <input
            className="bpm"
            name="bpm"
            type="number"
            placeholder={bpm.toString()}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.preventDefault();
              if (e.target.value.trim() != "") {
                const beat = parseInt(e.target.value);
                if (beat > 0) {
                  setBPM(beat);
                }
              }
            }}
          />
        </label>

        <div className="App-link">{note}</div>
      </header>
    </div>
  );
};

export default App;

import { useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const [submited, setSubmited] = useState(false);

  function handleChange(event) {
    setSubmited(false);
    setEnteredPlayerName(event.target.value);
  }

  function handleClick() {
    setSubmited(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submited ? enteredPlayerName : "Unknown Entity"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

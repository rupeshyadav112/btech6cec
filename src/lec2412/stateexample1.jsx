import { useState } from "react";
function StateExample1() {
  const [name, setName] = useState("Rk University");
  const [age, setAge] = useState(45);
  const [color, setColor] = useState("Red");
  return (
    <div>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <p>Name of candidate is:{name}</p>
      <br />

      <input
        type="number"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <p style={{ background: color, height: 50 }}>Age of Candidate is:{age}</p>
      <input type="radio" name="C1" onChange={() => setColor("Blue")} />
      <label>Blue</label>
      <input type="radio" name="C1" onChange={() => setColor("Yellow")} />
      <label>Red</label>
      <input type="radio" name="C1" onChange={() => setColor("Green")} />
      <label>Green</label>
      {color}
    </div>
  );
}

export default StateExample1;

import './App.css';
import Axios from 'axios';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("");

  const [predictedAge, setPredictedAge] = useState(0);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      console.log(res.data);
    });
  }

  return (
    <div className="App">
      <input 
        placeholder='Ex. John...'
        onChange={(event) => {
          setName(event.target.value);
        }}
      >
      </input>
      <button onClick={fetchData}>Predict Age</button>
      <h1>Predicted Age: {predictedAge} </h1>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "./components/Form";
import { List } from "./components/List";


function App() {
  const [encuestas, setEncuestas] = useState([]);
  const addEncuesta = async (encuesta) => {
    setEncuestas([...encuestas, encuesta])
    try {
      const res = await axios.post("https://fsakd9q7kc.execute-api.us-east-2.amazonaws.com/test-tarea-www/encuesta", encuesta); 
    } catch (error) {
      console.log(error);
    } 
  }

  const getEncuestas = async () => {
    const encuestas = await axios.get("https://fsakd9q7kc.execute-api.us-east-2.amazonaws.com/test-tarea-www/encuesta");
    setEncuestas(JSON.parse(encuestas.data.body));
  }

  useEffect(getEncuestas, []) 


  return (
    <div className="App">
      <Form addEncuesta={addEncuesta}/>
      <List encuestas={encuestas}/>
    </div>
  );
}

export default App;

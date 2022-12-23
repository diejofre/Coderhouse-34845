import { useState } from "react";
import "./App.css";
import Form from "./Form";

function App() {
  const [name, setName] = useState("Pepe");
  return (
    <div className="App">
      <Form name={name} />
    </div>
  );
}

export default App;

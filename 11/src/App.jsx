import { useState } from "react";
import "./App.css";
import Loading from "./components/Loading/Loading";
import Navbar from "./components/Navbar/Navbar";
import TextComponent from "./components/TextComponent/TextComponent";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <Navbar />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>{inputValue}</h2>
      <Loading />
      {/* <TextComponent condition={true} /> */}
    </div>
  );
}

export default App;

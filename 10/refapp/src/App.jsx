import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [texto, setTexto] = useState("");
  const inputRef = useRef();
  const buttonRef = useRef();

  const handleChange = () => {
    setTexto(inputRef.current.value);
  };

  const handleClick = () => {
    buttonRef.current.style.backgroundColor = "red";
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="App">
      <button
        ref={buttonRef}
        onClick={handleClick}
        style={{ backgroundColor: "orange" }}
      >
        Click me
      </button>
      <input
        ref={inputRef}
        type="text"
        placeholder="nombre"
        onChange={handleChange}
      />
      <p>{texto}</p>
    </div>
  );
}

export default App;

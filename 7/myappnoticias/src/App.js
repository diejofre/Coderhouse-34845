import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Noticias from "./components/Noticias";

function App() {
  const [noticias, setNoticias] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const titulo = e.target.titulo.value;
    const cuerpo = e.target.cuerpo.value;
    const autor = e.target.autor.value;
    axios
      .post("http://localhost:3001/api/noticias", {
        titulo,
        cuerpo,
        autor,
      })
      .then((res) => {
        setNoticias([...noticias, res.data.data]);
      });
    e.target.titulo.value = "";
    e.target.cuerpo.value = "";
    e.target.autor.value = "";
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/api/noticias/${id}`).then(() => {
      setNoticias(noticias.filter((noticia) => noticia.id !== id));
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/noticias")
      .then((res) => setNoticias(res.data.data));
  }, []);

  return (
    <div className="App">
      <h1>Noticias</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="titulo" placeholder="Titulo" />
        <br />
        <input type="text" name="cuerpo" placeholder="Cuerpo" />
        <br />
        <input type="text" name="autor" placeholder="Autor" />
        <br />
        <button type="submit">Agregar</button>
      </form>
      {noticias.map((noticia) => (
        <Noticias
          noticia={noticia}
          key={noticia.id}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default App;

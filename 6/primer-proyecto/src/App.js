import { useEffect, useState } from "react";
import "./App.css";
import Post from "./components/Post/Post";

function App() {
  const [contador, setContador] = useState(1);
  // const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});

  const handleClick = () => {
    setContador(contador + 1);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${contador}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.log("ERR", err));
  }, [contador]); // [] es igual a ejecutarse la primera vez que se monta el componente
  // [contador] cada vez que cambie contador se ejecuta el efecto

  return (
    <div className="App">
      <h1>POST</h1>

      <button onClick={handleClick}>Post número: {contador}</button>

      <Post post={post} />

      {/* {posts.map((post, i) => {
        return <Post key={i} post={post} />;
      })} */}
    </div>
  );
}

export default App;

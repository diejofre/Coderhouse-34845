import {
  Box,
  Button,
  ChakraProvider,
  FormControl,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
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
    <ChakraProvider>
      <Box maxW="960px" mx="auto">
        <Stack spacing={5}>
          <div className="App">
            <Text fontSize="6xl">Noticias</Text>
            <FormControl
              border="1px"
              borderColor="gray.200"
              p={2}
              bgColor="green.50"
            >
              <form onSubmit={handleSubmit}>
                <Input type="text" name="titulo" placeholder="Titulo" />
                <Input type="text" name="cuerpo" placeholder="Cuerpo" />
                <Input type="text" name="autor" placeholder="Autor" />
                <Button colorScheme="blue" type="submit" mt={2}>
                  Agregar
                </Button>
              </form>
            </FormControl>
            {noticias.map((noticia) => (
              <Noticias
                noticia={noticia}
                key={noticia.id}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        </Stack>
      </Box>
    </ChakraProvider>
  );
}

export default App;

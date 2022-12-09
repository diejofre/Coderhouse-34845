import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Button,
} from "@chakra-ui/react";

const Noticias = ({ noticia, handleDelete }) => {
  return (
    <Card align="center">
      <CardHeader>
        <Text fontSize="3xl">{noticia.titulo}</Text>
      </CardHeader>
      <CardBody>
        <p>{noticia.cuerpo}</p>
        <p>{noticia.autor}</p>
      </CardBody>
      <CardFooter>
        <Button colorScheme="blue" onClick={() => handleDelete(noticia.id)}>
          Eliminar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Noticias;

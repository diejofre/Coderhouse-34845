import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { capitalize } from "../../utils/functions.js";

const ProductCard = ({
  image,
  title,
  price,
  description,
  category,
  id,
  getProduct,
}) => {
  const path = useLocation().pathname;

  return (
    <Card maxW="sm" mt={5} mx={5}>
      <CardBody>
        <Image
          src={image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Link to={`/products/${id}`}>
            <Heading size="md">{title}</Heading>
          </Link>
          <Text>{description}</Text>
          <Text color="gray.500" fontSize="sm" fontWeight="bold">
            {capitalize(category)}
          </Text>
          <Text color="green.700" fontSize="2xl">
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Link to={`/products/${id}`}>
            <Button
              variant="solid"
              colorScheme="green"
              onClick={() => getProduct(id)}
            >
              Ver producto
            </Button>
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

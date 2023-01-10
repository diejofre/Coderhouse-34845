import {
  Box,
  Flex,
  Menu,
  MenuButton,
  Button,
  MenuItem,
  MenuList,
  Tab,
  TabList,
  Image,
  Tabs,
} from "@chakra-ui/react";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { AiFillPlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import { capitalize } from "../../utils/functions";

const NavBar = ({ products, favorites, getFavorite, deleteFavorite }) => {
  const unique = [...new Set(products.map((item) => item.category))];

  return (
    <Flex justify="space-between" background="blackAlpha.900">
      <Link to="/">
        <Box bg="white" py={3} px={5}>
          <FaHome color="teal" />
        </Box>
      </Link>
      <Tabs colorScheme="green" background="blackAlpha.900">
        <TabList color="white">
          {unique.map((category) => {
            return <Tab key={category}>{capitalize(category)}</Tab>;
          })}
        </TabList>
      </Tabs>
      <Flex>
        <Link to="create">
          <Box bg="black" py={3} px={5}>
            <AiFillPlusSquare color="teal" />
          </Box>
        </Link>
        <Box bg="teal" py={3} px={5}>
          <FaShoppingCart color="white" />
        </Box>
      </Flex>
    </Flex>
  );
};

export default NavBar;

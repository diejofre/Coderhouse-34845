import { useEffect, useState } from "react";
import { Container } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import { Route, Routes } from "react-router-dom";
import Grid from "./components/Grid";
import { db } from "../db/firebase-config.js";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import Product from "./components/Product";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const productsCollectionRef = collection(db, "products");
  const [product, setProduct] = useState({});

  const getProducts = async () => {
    const data = await getDocs(productsCollectionRef);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false);
  };

  const getProduct = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setProduct(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  const update = async (id) => {
    // ir a firebase y actualizar el producto
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <NavBar products={products} />
      <Container maxW="container.lg">
        <Banner />
        <Routes>
          <Route
            path="/"
            element={
              <Grid
                loading={loading}
                products={products}
                getProduct={getProduct}
              />
            }
          />
          <Route path="/products/:id" element={<Product product={product} />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;

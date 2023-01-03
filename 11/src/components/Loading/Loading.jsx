import { useEffect, useState } from "react";
import TextComponent from "../TextComponent/TextComponent";
import styles from "./loading.module.css";

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <h2>Loading ...</h2>
      ) : (
        <h3 className={styles.container}>Loaded</h3>
      )}
      <TextComponent condition={loading} />
    </>
  );
};

export default Loading;

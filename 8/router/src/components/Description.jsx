import { useLocation, useParams } from "react-router-dom";

const Description = ({ data }) => {
  let { name } = useParams(); // name is the name of the movie or series
  const type = useLocation().pathname.split("/")[1]; // type is the type of the movie or series
  const items = data[type]; // items is the array of movies or series
  const item = items.find((item) => item.name === name); // item is the movie or series with the name
  return (
    <>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Score: {item.score}</p>
    </>
  );
};

export default Description;

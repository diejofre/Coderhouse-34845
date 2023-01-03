import "../TextComponent/text.css";

const TextComponent = ({ condition }) => {
  return (
    <div>
      <h2 className={condition ? "red" : "green"}>Hola</h2>
    </div>
  );
};

export default TextComponent;

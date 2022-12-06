const Noticias = ({ noticia, handleDelete }) => {
  return (
    <div>
      <h3>{noticia.titulo}</h3>
      <p>{noticia.cuerpo}</p>
      <p>{noticia.autor}</p>
      <button onClick={() => handleDelete(noticia.id)}>Eliminar</button>
    </div>
  );
};

export default Noticias;

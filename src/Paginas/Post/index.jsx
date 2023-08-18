import { Link, useParams } from "react-router-dom";
import postsJson from "../../json/posts.json";
import PostModelo from "Componentes/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./Post.css";
import NaoEncontrada from "Paginas/NaoEncontrada";
import PaginaPadrao from "Componentes/PaginaPadrao";
import PostCard from "Componentes/PostCard";

const quatroPosts = (tamanhoArray) => {
  let numeroRandomico = Math.floor(Math.random() * (tamanhoArray - 1));
  if (numeroRandomico >= tamanhoArray - 3) {
    numeroRandomico = 0;
  }
  return numeroRandomico;
};

export default function Post() {
  const { id } = useParams();
  let post = postsJson.find((post) => String(post.id) === id);

  if (!post) {
    return <NaoEncontrada />;
  }

  let postsRecomendados = postsJson.filter((post) => String(post.id) !== id);
  let indiceInicial = quatroPosts(postsRecomendados.length);
  let postsSugeridos = postsRecomendados.slice(
    indiceInicial,
    indiceInicial + 4
  );

  return (
    <PaginaPadrao>
      <PostModelo
        key={post.id}
        fotoCapa={require(`assets/posts/${post.id}/capa.png`)}
        titulo={post.titulo}
      >
        <div className="post-markdown-container">
          <ReactMarkdown>{post.texto}</ReactMarkdown>
        </div>
      </PostModelo>
      <div className="postsRecomendadosContainer">
        <h1>Outros posts que você pode gostar:</h1>
        <div className="postsRecomendados">
          {postsSugeridos.map((post) => (
            <Link to={`/posts/${post.id}`} key={post.id}>
              <PostCard key={post.id} post={post} />
            </Link>
          ))}
        </div>
      </div>
    </PaginaPadrao>
  );
}

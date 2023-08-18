import "./PostCard.css";
import BotaoPrincipal from "Componentes/BotaoPrincipal";

export default function PostCard({ post }) {
  return (
    <div className="post">
      <img
        className="capa"
        src={require(`assets/posts/${post.id}/capa.png`)}
        alt="Imagem da capa"
      />
      <h2 className="titulo">{post.titulo}</h2>
      <BotaoPrincipal>Ler</BotaoPrincipal>
    </div>
  );
}

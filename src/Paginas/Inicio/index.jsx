import PostCard from "Componentes/PostCard";
import posts from "json/posts.json";
import "./Inicio.css";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div>
      <ul className="posts">
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link to={`posts/${post.id}`}>
                <PostCard post={post} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Inicio;

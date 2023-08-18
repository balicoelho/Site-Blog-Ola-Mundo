import "./Banner.css";
import circuloColorido from "../../assets/circulo_colorido.png";
import minhafoto from "../../assets/minha_foto.png";

export default function Banner() {
  return (
    <div className="banner">
      <div className="apresentacao">
        <h1 className="titulo">Olá mundo</h1>
        <p className="paragrafo">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laudantium
          sunt laborum, inventore excepturi blanditiis, nulla ducimus sapiente
          nemo impedit nesciunt eos, quod molestiae maxime enim voluptates
          aperiam repellat officiis?
        </p>
      </div>
      <div className="imagens">
        <img
          src={circuloColorido}
          aria-hidden={true}
          className="circuloColorido"
          alt="circulos"
        />
        <img src={minhafoto} alt="minha foto" className="minhaFoto" />
      </div>
    </div>
  );
}

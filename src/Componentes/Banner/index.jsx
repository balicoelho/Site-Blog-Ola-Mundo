import "./Banner.css";
import circuloColorido from "../../assets/circulo_colorido.png";

export default function Banner() {
  return (
    <div className="banner">
      <div className="apresentacao">
        <h1 className="titulo">Olá mundo</h1>
        <p className="paragrafo">
          Boas vindas ao meu espaço pessoal! Eu sou Barbara Coelho, aluna de
          Front-end da Alura. Aqui compartilho várias informações obtidas no
          curso de React, espero que aprenda algo novo :)
        </p>
      </div>
      <div className="imagens">
        <img
          src={circuloColorido}
          aria-hidden={true}
          className="circuloColorido"
          alt="circulos"
        />
        <img
          src={"https://github.com/balicoelho.png"}
          alt="minha foto"
          className="minhaFoto"
        />
      </div>
    </div>
  );
}

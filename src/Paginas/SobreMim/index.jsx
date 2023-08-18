import "./SobreMim.css";
import PostModelo from "Componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className="subtitulo">Olá, eu sou a Barbara!</h3>

      <img
        src={"https://github.com/balicoelho.png"}
        alt="Foto do Antônio Evaldo sorrindo"
        className="fotoSobreMim"
      />

      <p className="paragrafo">
        Oi, tudo bem? Eu sou aluna de Front-end na Alura e estou feliz de te ver
        por aqui.
      </p>
      <p className="paragrafo">
        Com quase 20 anos de experiência profissional, minha dedicação sempre
        esteve voltada para trazer melhorias inteligentes e simplificar
        processos em todas as empresas por onde passei. Esse propósito me levou
        a fazer uma transição de carreira de Engenheira de Produção para o
        Desenvolvimento Web, encontrando na tecnologia e no desenvolvimento de
        software os aliados fundamentais para alcançar meus objetivos.
      </p>
      <p className="paragrafo">
        Ao longo do tempo, adquiri ampla vivência em gestão empresarial,
        liderança de equipes e recrutamento de executivos, enquanto trabalhava
        em grandes empresas nacionais e multinacionais. Em 2023, tive meu
        primeiro contato com a programação, e desde então, minha paixão por essa
        área só cresceu. Iniciei minha jornada de estudos, mergulhando tanto em
        tecnologias front-end (ReactJS, Typescript) quanto back-end (NodeJS,
        TypeScript e SQL).
      </p>
      <p className="paragrafo">
        Atualmente, meu interesse está direcionado para atuar como
        Desenvolvedora Web, seja no back-end, front-end ou em uma abordagem full
        stack. Minha ampla experiência em processos empresariais, combinada com
        minha paixão pela tecnologia, me proporciona uma visão abrangente e
        estratégica para desenvolver soluções inovadoras.
      </p>
    </PostModelo>
  );
}

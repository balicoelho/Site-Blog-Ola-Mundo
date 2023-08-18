import MenuLink from "../MenuLink";
import "./Menu.css";

export default function Menu() {
  return (
    <header>
      <nav className="navegacao">
        <MenuLink to={"/"}>Inicio</MenuLink>
        <MenuLink to={"/sobremim"}>Sobre mim</MenuLink>
      </nav>
    </header>
  );
}

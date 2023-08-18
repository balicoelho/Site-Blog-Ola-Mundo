import "./BotaoPrincipal.css";

export default function BotaoPrincipal({ children, tamanho }) {
  return <button className={`botaoPrincipal ${tamanho}`}>{children}</button>;
}

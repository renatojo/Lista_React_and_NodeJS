import './Main.css';
import MeuObjetivoComReact from "./components/MeuObjeticoComReact";

const Main = () => {
    return(
    <main>
      <p>
        React é uma biblioteca JavaScript para construir interfaces de usuário em páginas web.
        Atualmente, a biblioteca está em desenvolvimento e pode ser encontrada em <a href="https://reactjs.org/">https://reactjs.org/</a>.
      </p>
      <MeuObjetivoComReact/>
    </main>
    )
  }

  export default Main;
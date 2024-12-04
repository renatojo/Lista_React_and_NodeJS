import './Main.css';
import MeuObjetivoComReact from "./components/MeuObjeticoComReact";
import CoreConcept from './components/Core-concepts/Core-concepts';


const Main = () => {
    return(
    <main>
      <p>
        React é uma biblioteca JavaScript para construir interfaces de usuário em páginas web.
        Atualmente, a biblioteca está em desenvolvimento e pode ser encontrada em <a href="https://reactjs.org/">https://reactjs.org/</a>.
      </p>
      <MeuObjetivoComReact/>

      <CoreConcept />
    </main>
    )
  }

  export default Main;
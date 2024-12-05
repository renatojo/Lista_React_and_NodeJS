import './Header.css';
import imagem from "../../assets/chips-cat.gif";


const PalavrasAleatorias = () => {
  const palavras = ['conceitos', 'teorias', 'fundamentos'];
  const randomIndex = Math.floor(Math.random() * palavras.length);
  return palavras[randomIndex];
}


const Header = () => {
    return(
        <>
      <header>
        <img src={imagem} alt=""/>
          <h1>Fundamentos do React</h1>
          <p>Iremos aplicar aqui {PalavrasAleatorias()} praticos do react</p>
        </header>
        </>
    );
  };

  export default Header;
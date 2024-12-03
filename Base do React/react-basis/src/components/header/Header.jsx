import './Header.css';

const PalavrasAleatorias = () => {
  const palavras = ['conceitos', 'teorias', 'fundamentos'];
  const randomIndex = Math.floor(Math.random() * palavras.length);
  return palavras[randomIndex];
}


const Header = () => {
    return(
        <>
      <header>
          <h1>Fundamentos do React</h1>
          <p>Iremos aplicar aqui {PalavrasAleatorias()} praticos do react</p>
        </header>
        </>
    );
  };

  export default Header;
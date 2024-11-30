import './Header.css';

const RandomWords = () => {
    const words = ["conceitos", "fundamentos", "definição"]
    const indice = Math.floor(Math.random() * words.length)
    return words[indicie]
}
 
const Header = () => {
    return(
        <>
      <header>
          <h1>Fundamentos do React</h1>
          <p>Iremos aplicar aqui {RandomWords()} praticos do react</p>
        </header>
        </>
    )
  }

  export default Header;
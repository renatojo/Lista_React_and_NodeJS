import './App.css'
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { useState } from "react";

function App() {
  const [Imagemaparece, setImagemaparece] = useState(false);

  const apertarbotao = () => {
    setImagemaparece(true);
    alert("Voce logou!");

  }

  return (
    <>
    {Imagemaparece ? (
      <>
        <Header />
        <Main />
      </>
    ) : (
      <>
      <h2>Clique no botão abaixo para ver o conteúdo</h2>
          <button onClick={apertarbotao}>Clique aqui</button>
      </>
    )}
    </>
  );
}

export default App
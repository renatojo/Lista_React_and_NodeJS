import './Core-concepts.css'


const conceitosChaves = [
    {
      id: 1,
      titulo: 'Componentes',
      conceitos: [
        'Componentes são pequenos blocos de código que podem ser reutilizados em vários lugares da interface.',
        'Os componentes são imutáveis, ou seja, não podem ser alterados diretamente.',
        'Os componentes podem ser passados props para outros componentes.',
        'Os componentes podem ser estilizados usando CSS ou CSS-in-JS.',
      ]
    },
    {
      id: 2,
      titulo: 'Estados e eventos',
      conceitos: [
        'Os estados são as variáveis que armazenam dados do componente.',
        'Os estados são mutáveis e precisam ser atualizados usando o método `setState()`.',
        'Os estados são imutáveis, ou seja, não podem ser alterados diretamente.',
        'Os componentes podem receber props e passar estados como props para outros componentes.',
      ]
    },
    {
      id: 3,
      titulo: 'Componentes de estado e função',
      conceitos: [
        'Os componentes de estado são componentes que armazenam dados do componente.',
        'Os componentes de estado são imutáveis e precisam ser atualizados usando o método `setState()`.',
        'Os componentes de estado podem ser passados como props para outros componentes.',
        'Os componentes de função são componentes que não possuem estados.',
        'Os componentes de função podem receber props e renderizar conteúdo.',
      ]
    }

  ];

  const CoreConcept = ({titulo, conceitos}) => {
    return (
      <>
      <h2>{titulo}</h2>
      <ul>
        {conceitos.map(conceito => (
          <li class="lista" key={conceito}>{conceito}</li>
        ))}
      </ul>
      </>
    )
   }

const ResultadoMain = () => {

  return(
    <>
      <section id="core-concepts">
    {conceitosChaves.map((conceitos) => {
      return <CoreConcept titulo={conceitos.titulo} conceitos={conceitos.conceitos}></CoreConcept>
    })}
    </section> 
    </>
  )
}

export default ResultadoMain;
 
const MeuObjetivoComReact = () => {
    const objetivos = [
        "Criar interfaces dinâmicas", 
        "Componentizar e reutilizar código", 
        "Criar aplicações de página única (SPAs).",
    ];

    return(
        <>
            <h3 class="lista">Meus objetivos com react são:</h3>
        <div>
            <ul>
                {objetivos.map((index) => (
                    <li key={index}>{objetivos}</li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default MeuObjetivoComReact;
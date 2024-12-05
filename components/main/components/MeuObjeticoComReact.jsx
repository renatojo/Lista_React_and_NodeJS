import "./MeuObjeticoComReact.css";
const MeuObjetivoComReact = () => {
    const objetivos = [
        "Criar interfaces dinâmicas", 
        "Componentizar e reutilizar código", 
        "Criar aplicações de página única (SPAs).",
    ];

    return(
        <>
        <h3 class="lista">Meus objetivos com react são:</h3>
        <div class="goal-card">
            <ul>
                {objetivos.map((objetivo, index) => (
                    <li key={index}>{objetivo}</li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default MeuObjetivoComReact;
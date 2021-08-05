export const List = ({ encuestas }) => {
    return (
        <div className="list">
            <ul>
            <h1>Encuestas ingresadas</h1>
            {encuestas.map((encuesta) => (
                <li>
                    <strong>{encuesta.titulo}:</strong>
                    <span>{encuesta.descripcion}</span>
                </li>
            ))}
            </ul>
        </div>
    )
}

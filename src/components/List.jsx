export const List = ({ encuestas }) => {
    return (
        <div>
            <ul>
            {encuestas.map((encuesta) => (
                <li>
                    <strong>{encuesta.title}:</strong>
                    <span>{encuesta.description}</span>
                </li>
            ))}
            </ul>
        </div>
    )
}

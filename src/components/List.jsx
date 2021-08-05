import { motion } from 'framer-motion';

export const List = ({ encuestas }) => {
    return (
        <div className="list">
            <motion.ul layout>
                <h1>Encuestas ingresadas</h1>
                {encuestas.map((encuesta) => (
                    <li>
                        <strong>{encuesta.titulo}:</strong>
                        <span>{encuesta.descripcion}</span>
                    </li>
                ))}
            </motion.ul>
        </div>
    )
}

import { useRef } from "react";

export const Form = ({ addEncuesta }) => {
    const title = useRef("");
    const desc = useRef("");
    const handleOnSubmit = (e) => {
        e.preventDefault();
        addEncuesta({title: title.current.value, description: desc.current.value});
    }
    return (
        <div>
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <input type="text" name="" id="" placeholder="Título" ref={title}/>
                <textarea name="" id="" cols="30" rows="10" placeholder="Descripción" ref={desc}></textarea>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}

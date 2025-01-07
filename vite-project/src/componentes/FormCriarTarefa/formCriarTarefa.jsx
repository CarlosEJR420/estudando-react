import { CampoTexto } from "../CampoTexto"
import { Botao } from "../Botao/Botao"

const FormCriarTarefa = () => {
    return (
        <form >
            <CampoTexto />
            <Botao texto="+"/>
        </form>

    )

}

export { FormCriarTarefa }
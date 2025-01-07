const Botao = (props) => {
    const { texto, tipo = "primario", ...outrasprops } = props
    return(
        <button tipo={tipo} {...outrasprops} >
            {texto}
        </button>

    )

}

export { Botao }
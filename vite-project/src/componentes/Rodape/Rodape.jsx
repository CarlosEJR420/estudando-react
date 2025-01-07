import style from './Rodape.module.css'

const Rodape = (props) => {
    const { criador } = props;

    const anoAtual = (new Date()).getFullYear();

    return(
        <div className={style.Rodape}>
            <span>
                React Basico -  { anoAtual } - {criador}
            </span>
        </div>
    )
}

export { Rodape };
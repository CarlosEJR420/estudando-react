import style from './cabecalho.module.css';
const Cabecalho = (props) => {
   
    return (
        <div className={style.Cabecalho}>
            <h1>
                <span>ToDo </span> 
                List
            </h1>
        </div>
    );
};

export {Cabecalho};
import { Link } from 'react-router-dom';
import style from './cabecalho.module.css';
const Cabecalho = (props) => {
   
    return (
        <div className={style.Cabecalho}>
            <Link to="/">
                <h1>
                    <span>ToDo </span> 
                    List
                </h1>
            </Link>

            <Link to="Sobre-nos"> Sobre Nós</Link>
        </div>
    );
};

export {Cabecalho};
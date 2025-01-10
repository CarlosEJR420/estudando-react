import { Outlet } from "react-router-dom";
import { Cabecalho, Conteudo, Rodape } from "../../componentes";

const LayoutPadrao = () => {
    return (
        <>
            <Cabecalho nomeUsuario="Junior" />
            <Conteudo>
                <Outlet />
            </Conteudo >
            <Rodape criador="JuniorX" />
        </>

    );

};

export { LayoutPadrao };
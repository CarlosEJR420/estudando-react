import { children } from "react";

const Conteudo = (props) => {
    const { children }= props
    return (
        <div>
            {children}
        </div>
    );
};

export { Conteudo };
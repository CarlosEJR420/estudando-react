import {  Cabecalho, Conteudo} from './componentes';
import './App.css';
import { Rodape } from './componentes/Rodape/Rodape';
import { Inicial } from './pages';

const App = () => {
  return (
    <>
      <Cabecalho noneUsuario="Junior" />
      <Conteudo >
        <Inicial />
      </ Conteudo >

      <Rodape criador="JuniorX" />
        
      
    </> 
  )
}

export { App }

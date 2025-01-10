import {  Cabecalho, Conteudo} from './componentes';
import './App.css';
import { Rodape } from './componentes/Rodape/Rodape';
import { Inicial } from './pages';
import { BrowserRouter} from 'react-router-dom';
import { Router } from './Router'

const App = () => {
  return (
    <BrowserRouter>
      < Router />
    </BrowserRouter> 
  )
}

export { App }

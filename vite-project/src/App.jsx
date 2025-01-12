import {  Cabecalho, Conteudo} from './componentes';
import './App.css';
import { Rodape } from './componentes/Rodape/Rodape';
import { Inicial } from './pages';
import { BrowserRouter} from 'react-router-dom';
import { Router } from './Router'
import { AppContextProvider } from './contexts';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        < Router />
      </BrowserRouter> 
    </AppContextProvider>
  )
}

export { App }

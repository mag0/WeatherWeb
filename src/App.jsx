import Header from './layouts/Header.jsx'
import Clima from './layouts/Clima.jsx'
import './App.css'
import { LanguageProvider} from './context/LanguageContext.jsx'

function App() {

  return (
    <LanguageProvider>
      <Header ></Header>
      <Clima ></Clima>
    </LanguageProvider>
  )
}

export default App

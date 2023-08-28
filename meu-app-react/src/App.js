import './App.css'
import Modal from './Modal/Modal';
import Router from './Routes/Router'
import { GlobalState } from './contexts/GlobalState'


function App() {
  return (
    
      <GlobalState>

      <Modal/>
      <Router />
      
      
      </GlobalState>
    )
}

export default App;

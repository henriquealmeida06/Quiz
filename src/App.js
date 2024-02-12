import './App.css';
import Home from './pages/Home'
import Menu from './pages/Menu';
import Configuracoes from './pages/Configuracoes';
import Ranking from './pages/Ranking';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
         <Routes>
           <Route path='/' element={<Menu/>}/>
           <Route path='/home' element={<Home/>}/>
           <Route path='/ranking' element={<Ranking/>}/>
           <Route path='/configuracoes' element={<Configuracoes/>}/>
           
           
         </Routes>
      </BrowserRouter>

    
     
    </div>
  );
}

export default App;

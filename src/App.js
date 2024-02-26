import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landingpage from './Components/Mainpage/Landingpage';
import Expertise from './Components/Mainpage/Expertise';

function App() {
  return (
     <>
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Landingpage/>}></Route>
           <Route path='/expertise' element={<Expertise/>}></Route>
         </Routes>
       </BrowserRouter>

     </>
  );
}

export default App;

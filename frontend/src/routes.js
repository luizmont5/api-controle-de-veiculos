import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Cadastro from "./pages/cadastro";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/"element={<Home />}></Route>
                <Route path="/cadastro"element={<Cadastro />}></Route>
            </Routes>
        
        </BrowserRouter>
    )
}

export default AppRoutes;
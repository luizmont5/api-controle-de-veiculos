import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Cadastro_veiculo from "./pages/cadastro_veic";
import Login from "./pages/login";
import Cadastro_mot from "./pages/cadastro_mot";
import Registro_in from "./pages/registro_in";
import Registro_out from "./pages/registro_out";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/Home"element={<Home />}></Route>
                <Route path="/cadastro/veic"element={<Cadastro_veiculo />}></Route>
                <Route path="/cadastro/mot"element={<Cadastro_mot />}></Route>
                <Route path="/registro/in"element={<Registro_in />}></Route>
                <Route path="/registro/out"element={<Registro_out />}></Route>
                <Route path="/"element={<Login />}></Route>
            </Routes>
        
        </BrowserRouter>
    )
}

export default AppRoutes;
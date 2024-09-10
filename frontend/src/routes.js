import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Cadastro_veiculo from "./pages/cadastro_veic";
import Login from "./pages/login";
import Cadastro_mot from "./pages/cadastro_mot";
import Registro_in from "./pages/registro_in";
import Registro_out from "./pages/registro_out";
import Alterar_veiculo from "./pages/alterar_veic";
import Alterar_motorista from "./pages/alterar_mot";
import Alterar_entrada from "./pages/alterar_ent";
import Alterar_saida from "./pages/alterar_out";
import Exibir_veic from "./pages/exibir_veiculo";


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
                <Route path="/alterar/carro"element={<Alterar_veiculo />}></Route>
                <Route path="/alterar/mot"element={<Alterar_motorista />}></Route>
                <Route path="/alterar/entr"element={<Alterar_entrada />}></Route>
                <Route path="/alterar/said"element={<Alterar_saida />}></Route>
                <Route path="/exibir"element={<Exibir_veic/>}></Route>
            </Routes>
        
        </BrowserRouter>
    )
}

export default AppRoutes;
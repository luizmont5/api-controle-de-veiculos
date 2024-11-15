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
import Exibir_moto from "./pages/exibir_motorista";
import Exibir_entr from "./pages/exibir_entrada";
import Exibir_said from "./pages/exibir_saida";
import Remover_veiculo from "./pages/remover_carro";
import Remover_entri from "./pages/remover_entrada";
import Remover_motor from "./pages/remover_motorista";
import Remover_Said from "./pages/remover_saida";


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
                <Route path="/exibir/motoristas"element={<Exibir_moto/>}></Route>
                <Route path="/exibir/entradas"element={<Exibir_entr/>}></Route>
                <Route path="/exibir/saidas"element={<Exibir_said/>}></Route>
                <Route path="/remover/carro"element={<Remover_veiculo/>}></Route>
                <Route path="/remover/entrada"element={<Remover_entri/>}></Route>
                <Route path="/remover/saida"element={<Remover_Said/>}></Route>
                <Route path="/remover/motorista"element={<Remover_motor/>}></Route>
            </Routes>
        
        </BrowserRouter>
    )
}

export default AppRoutes;
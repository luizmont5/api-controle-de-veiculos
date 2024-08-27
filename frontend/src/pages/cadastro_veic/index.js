import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Formulario_carro from "../../Forms/Formulario_carro";



function Cadastro_veiculo() {
  return (
  <> 
    
    <h1> Cadastro</h1>
   <Header />
    <Container>
    <Formulario_carro />
    </Container>
    <Footer />
    </>
  );
  
}

export default Cadastro_veiculo;

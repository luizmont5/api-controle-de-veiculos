import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Alterar_carro from "../../Forms/Alterar/Alterar_carro";



function Alterar_veiculo() {
  return (
  <> 
   <Header />
    <Container>
    <Alterar_carro />
    </Container>
    <Footer />
    </>
  );
  
}

export default Alterar_veiculo;

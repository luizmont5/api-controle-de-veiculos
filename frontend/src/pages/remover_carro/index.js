import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Remover_carro from "../../components/remove/remove_carro";


function Remover_veiculo() {
  return (
  <> 
   <Header />
    <Container>
    <Remover_carro/>
    </Container>
    <Footer />
    </>
  );
  
}

export default Remover_veiculo;

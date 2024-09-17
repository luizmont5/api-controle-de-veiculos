import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Remover_motorista from "../../components/remove/remove_motorista";


function Remover_motor(){
  return (
  <> 
   <Header />
    <Container>
    <Remover_motorista/>
    </Container>
    <Footer />
    </>
  );
  
}

export default Remover_motor;

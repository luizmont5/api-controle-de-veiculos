import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Remover_Entrada from "../../components/remove/remove_entradas";


function Remover_entri() {
  return (
  <> 
   <Header />
    <Container>
    <Remover_Entrada/>
    </Container>
    <Footer />
    </>
  );
  
}

export default Remover_entri;

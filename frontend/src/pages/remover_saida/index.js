import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Remover_Saida from "../../components/remove/remove_saidas";


function Remover_Said() {
  return (
  <> 
   <Header />
    <Container>
    <Remover_Saida/>
    </Container>
    <Footer />
    </>
  );
  
}

export default Remover_Said;

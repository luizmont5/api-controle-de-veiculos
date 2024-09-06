import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Alterar_mot from "../../Forms/Alterar/Alterar_mot";




function Alterar_motorista() {
  return (
  <> 
   <Header />
    <Container>
    <Alterar_mot />
    </Container>
    <Footer />
    </>
  );
  
}

export default Alterar_motorista;

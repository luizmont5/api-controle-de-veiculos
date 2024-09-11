import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import MotoristasList from "../../components/show_screen/exibir_motoristas_todos";





function Exibir_moto() {
  return (
  <> 
    
    
   <Header />
    <Container>
    <MotoristasList/>
    </Container>
    <Footer />
    </>
  );
  
}

export default Exibir_moto;

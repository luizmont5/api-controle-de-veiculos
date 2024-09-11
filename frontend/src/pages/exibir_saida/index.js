import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import SaidasList from "../../components/show_screen/exibir_saidas_todos";





function Exibir_said() {
  return (
  <> 
    
    
   <Header />
    <Container>
    <SaidasList/>
    </Container>
    <Footer />
    </>
  );
  
}

export default Exibir_said;

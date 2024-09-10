import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import VeiculosList from "../../components/show_screen";




function Exibir_veic() {
  return (
  <> 
    
    
   <Header />
    <Container>
    <VeiculosList/>
    </Container>
    <Footer />
    </>
  );
  
}

export default Exibir_veic;

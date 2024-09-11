import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import EntradasList from "../../components/show_screen/exibir_entradas_todos";





function Exibir_entr() {
  return (
  <> 
    
    
   <Header />
    <Container>
    <EntradasList/>
    </Container>
    <Footer />
    </>
  );
  
}

export default Exibir_entr;

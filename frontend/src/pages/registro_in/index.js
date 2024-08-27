import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Formulario_entrada from "../../Forms/Formulario_entrada";


function Registro_in() {
  return (
  <> 
    
    <h1> Login</h1>
   <Header />
    <Container>
    <Formulario_entrada />
    </Container>
    <Footer />
    </>
  );
  
}

export default Registro_in;

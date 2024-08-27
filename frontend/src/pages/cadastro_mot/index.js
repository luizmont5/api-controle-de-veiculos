import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Formulario_mot from "../../Forms/Formulario_mot";




function Cadastro_mot() {
  return (
  <> 
    
    <h1> Cadastro</h1>
   <Header />
    <Container>
    <Formulario_mot/>
    </Container>
    <Footer />
    </>
  );
  
}

export default Cadastro_mot;

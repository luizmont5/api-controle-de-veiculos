import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Formulario_usuario from "../../Forms/Cadastro/Formulario_usuario";





function Login() {
  return (
  <> 
    
    
   <Header />
    <Container>
    <Formulario_usuario />
    </Container>
    <Footer />
    </>
  );
  
}

export default Login;

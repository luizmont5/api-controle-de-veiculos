import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Display from "../../components/Display";
import Footer from "../../components/Footer";
import Header from "../../components/Header";


function Home() {
  return (
  <> 
    <Header />
    <Banner/>
    <Container>
    <Display/>
    </Container>
    <Footer/>
    </>
  );
  
}

export default Home;

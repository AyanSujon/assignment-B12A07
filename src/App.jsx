
import './App.css'
import Container from './components/container/Container'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import MainSection from './components/mainSection/MainSection'
import Navbar from './components/navbar/Navbar'





function App() {

  return (
    <>
<header>
  <nav className='shadow-sm'>
      <Navbar></Navbar>
  </nav>
    <Hero></Hero>
</header>

<main>
  <Container>
    <MainSection></MainSection>
  </Container>
</main>








<footer>
  <Container>
    <Footer></Footer>
  </Container>
</footer>
    </>
  )
}

export default App

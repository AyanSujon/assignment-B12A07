
import './App.css'
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

          <section className='bg-[#F5F5F5]'>
          <Hero></Hero>
          </section>
      </header>

      <main className='bg-[#F5F5F5]'>
          <MainSection></MainSection>
      </main>
          <Footer></Footer>
    </>
  )
}

export default App

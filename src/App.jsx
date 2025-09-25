
import { useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import MainSection from './components/mainSection/MainSection'
import Navbar from './components/navbar/Navbar'
  import { ToastContainer, toast } from 'react-toastify';




  //  const ticketPromise = fetch("/customerTicketsData.json") // path is relative to public folder
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.error("Error loading JSON:", err));

const fetchTicket = async () => {
  const res = await fetch("/customerTicketsData.json");
  return res.json()
}


function App() {
 
const fetchPromise = fetchTicket();
// console.log(fetchPromise);

  const [tasks, setTasks] = useState([]);// keep track of selected tasks

  // function to add task
  const onAddTask = (ticket) => {
    setTasks((prev) => [...prev, ticket]);
    toast(`Added "${ticket.title}" to Task Status!!`);
  };



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
          <MainSection tasks={tasks} onAddTask={onAddTask} fetchPromise={fetchPromise} ></MainSection>
      </main>
          <Footer></Footer>
          
          <ToastContainer />

    </>
  )
}

export default App

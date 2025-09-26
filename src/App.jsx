
// import { useState } from 'react'
import { useState, useEffect } from 'react'

import './App.css'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import MainSection from './components/mainSection/MainSection'
import Navbar from './components/navbar/Navbar'
import { ToastContainer, toast } from 'react-toastify';




const fetchTicket = async () => {
  const res = await fetch("/customerTicketsData.json");
  return res.json()
}


function App() {
 
const fetchPromise = fetchTicket();
// console.log(fetchPromise);

  // const [tasks, setTasks] = useState([]);// keep track of selected tasks

    const [tickets, setTickets] = useState([]); // All available tickets
  const [tasks, setTasks] = useState([]);     // Selected tasks


  // fetch data once
  useEffect(() => {
    const fetchTicket = async () => {
      const res = await fetch("/customerTicketsData.json");
      const data = await res.json();
      setTickets(data); // save tickets into state
    };
    fetchTicket();
  }, []);


console.log(tickets)



  // function to add task
  const onAddTask = (ticket) => {
    setTasks((prev) => [...prev, ticket]);
    toast(`Added "${ticket.title}" to Task Status!!`);
    // console.log(tasks);

  };
  // Complete task (remove from tickets + tasks)
  const onCompleteTask = (completedTask) => {
    setTasks((prev) => prev.filter((t) => t.id !== completedTask.id));
    setTickets((prev) => prev.filter((t) => t.id !== completedTask.id));
    toast.success(`Completed "${completedTask.title}" ✅`);
    console.log(completedTask)
  };


  return (
    <>
      <header>
        <nav className='shadow-sm'>
            <Navbar></Navbar>
        </nav>

          <section className='bg-[#F5F5F5]'>
          <Hero tasks={tasks}></Hero>
          </section>
      </header>

      <main className='bg-[#F5F5F5]'>
          <MainSection  onCompleteTask={onCompleteTask} tasks={tasks} onAddTask={onAddTask} fetchPromise={fetchPromise} ></MainSection>
      </main>
          <Footer></Footer>
          
          <ToastContainer />

    </>
  )
}

export default App

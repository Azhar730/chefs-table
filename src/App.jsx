import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Header from './components/Header'
import Nav from './components/Nav'
import Carts from './components/Carts'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [carts,setCarts] = useState([])
  const [cook,setCook] = useState([])
  const [totalTime,setTotalTime]=useState(0)
  const [totalCalories,setTotalCalories]= useState(0)
  const handleCarts = item => {
    const isExist = carts.find(crt=> crt.id == item.id)
    if(!isExist){
      const newCarts= [...carts,item]
      setCarts(newCarts)
    }
    else{
      toast('cart already exist')
    }
  }
  const handleDelete = (id,cart,time,calories) => {
    const newCarts= carts.filter(item=>item.id !==id);
    setCarts(newCarts)
    const newCook= [...cook,cart]
    setCook(newCook)
    const newTotalTime = totalTime+time
    setTotalTime(newTotalTime)
    const newTotalCalories = totalCalories+calories
    setTotalCalories(newTotalCalories)
    console.log(time,calories);
  }
  return (
    <>
    <Nav></Nav>
    <Header></Header>
    <main className='flex flex-col lg:flex-row'>
      <Cards handleCarts={handleCarts}></Cards>
      <Carts totalTime={totalTime} totalCalories={totalCalories} cook={cook} handleDelete={handleDelete} carts={carts}></Carts>
    </main>
    </>
  )
}

export default App

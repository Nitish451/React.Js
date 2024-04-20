import LudoBoard from './LudoBoard'
import TodoList from './TodoList'
import Lottery from '../Lottery'
import Ticket from './Ticket'
import { sum } from '../Helper'
import './App.css'

function App() {
 let winCondition = (ticket)=>{
  return sum(ticket)===15;
 }

  return (
    <>
  <Lottery n={3} winCondition={winCondition}/>
  
    </>
  );
}

export default App

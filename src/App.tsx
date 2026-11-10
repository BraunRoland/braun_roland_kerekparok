import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Title from './components/Title'
import { useEffect, useState } from 'react'
import type { Kerekpar } from './types/kerekparok'

function App() {
  const [kerekparLista,setKerekparLista] = useState<Kerekpar[]>([]);
  useEffect(() => {
    async function adatBetoltes() {
      const response = await fetch('../public/kerekparok.json');
      const data = await response.json();
      setKerekparLista(data);
    }
    adatBetoltes();
  },[])

  return (
    <>
    <Title/>
    <div className="container">
      
    </div>
    </>
  )
}

export default App

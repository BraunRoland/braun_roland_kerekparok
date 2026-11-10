import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Title from './components/Title'
import { useEffect, useState } from 'react'
import type { Kerekpar } from './types/kerekparok'
import Kerekparok from './components/Kerekparok'
import Statisztika from './components/Statisztika'

function App() {
  const [kerekparLista,setKerekparLista] = useState<Kerekpar[]>([]);
  useEffect(() => {
    async function adatBetoltes() {
      const response = await fetch('../public/kerekparok.json');
      const data = await response.json();
      setKerekparLista(data);
    }
    document.title = 'Kiadó kerékpárok'
    adatBetoltes();
  },[])

  return (
    <>
    <Title/>
    {kerekparLista.length > 0 && (
      <div className="container">
        <Statisztika
          kerekparLista={kerekparLista}
        />
        {kerekparLista.map(k => (
          <Kerekparok
            kerekpar={k}
            key={k.id}
          />
        ))}
      </div>
    )}
    </>
  )
}

export default App

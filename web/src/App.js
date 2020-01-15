import React, { useEffect, useState } from 'react';
import api from './services/api'
import DevItem from "./components/DevItem";
import DevForm from "./components/DevForm";
import './global.css'
import './App.css'
import  './Sidebar.css'
import  './Main.css'



function App() {
    const [davs, setDavs] = useState([])


    useEffect(() => {
        async function loadDavs() {
            const reponse = await api.get('/devs')
            setDavs(reponse.data)
        }
        loadDavs()
    }, [])

    async function handleAddDev(data) {
        const response = await api.post('/devs', data)

        setDavs([...davs, response.data])
    }
  return (
    <div id="app">
      <aside>
          <strong>Cadastrar</strong>
          <DevForm onSubmit={handleAddDev}/>
      </aside>

      <main>
          <ul>
              {davs.map( dev =>(
                  <DevItem key={dev._id} dev={dev} />
              ))}
          </ul>
      </main>
    </div>
  );
}

export default App;

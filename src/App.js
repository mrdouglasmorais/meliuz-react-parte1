import { useState, useEffect } from 'react';
import Hello from './Hello';
import Content from './Content';

import api from './service/api';

export default function App(){
  const [ name, setName ] = useState('')
  const [ joke, setJoke ] = useState({})
  const [ isLoad, setIsLoad ] = useState(false)
  const [ newJoke, setNewJoke ] = useState(false)

  const handleSetName = (nameFunction) => {
    setName(nameFunction)
  }

  useEffect( () => {
    setIsLoad(true)
    api.get('random').then(
      response => {
        setJoke(response.data)
        setIsLoad(false)
      }
    )
  }, [newJoke])

  return (
    <>
      <Hello name={name} />
      <button onClick={() => handleSetName('Meliuz')}>Clique aqui</button>
      <Content/>
      <hr/>
      <button onClick={ () => setNewJoke(!newJoke)}> Mudar </button>
      { isLoad && (
        <div>
          <p>Carregando...</p>
        </div>
      )}

      { 
      <>
          <img src={joke?.icon_url} alt={joke?.value} />
          <h1 style={{ textAlign: 'center' }}>
            {joke?.value}
          </h1>
        </>
      }
    </>
  )
}
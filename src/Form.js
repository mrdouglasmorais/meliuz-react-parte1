import { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { webhook } from './service/api'

function Form(){
  const [ data, setData ] = useState({});

  const history = useHistory()

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      webhook.post('', data).then(
        () => history.push('/')
      ).catch( () => alert('deu ruim'))
    }, [data, history]
  )

  return(
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}> 
        <input 
          type="text" 
          placeholder="nome"
          onChange={ e => setData({...data, nome: e.target.value })}
        />
        <input 
          type="text"
          placeholder="email"
          onChange={ e => setData({...data, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="apelido"
          onChange={ e => setData({...data, apelido: e.target.value })}
        />
        <input 
          type="submit" 
          value="cadastrar" 
        />
      </form>
    </div>
  )
}

export default Form
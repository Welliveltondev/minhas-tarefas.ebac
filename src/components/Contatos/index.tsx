import React, { useState } from 'react'
import { Centraliza, Container, CtnButton, Titulo, Ul } from './styles'

const Contato = () => {
  const [contato, setContato] = useState({ nome: '', telefone: '', email: '' })
  const [listaContato, setListaDeContato] = useState([])
  const [editando, setEditando] = useState(false)

  function definirNome(event: { target: { value: any } }) {
    setContato({ ...contato, nome: event.target.value })
  }

  function definirTelefone(event: { target: { value: any } }) {
    setContato({ ...contato, telefone: event.target.value })
  }

  function definirEmail(event: { target: { value: any } }) {
    setContato({ ...contato, email: event.target.value })
  }

  function adicionarContato() {
    setListaDeContato([...listaContato])
  }

  return (
    <Container>
      <Titulo>
        <h1>Minha lista de contatos</h1>
      </Titulo>

      <Centraliza>
        <div>
          <label htmlFor="">Nome:</label>
          <input type="text" onChange={definirNome} value={contato.nome} />
        </div>

        <div>
          <label htmlFor="">Telefone:</label>
          <input
            type="number"
            value={contato.telefone}
            onChange={definirTelefone}
          />
        </div>

        <div>
          <label htmlFor="">E-mail:</label>
          <input type="email" onChange={definirEmail} value={contato.email} />
        </div>

        <CtnButton>
          <button onClick={adicionarContato}>Cadastrar</button>
          {editando ? (
            <>
              <button onClick={() => setEditando(false)}>Salvar</button>
            </>
          ) : (
            <>
              <button onClick={() => setEditando(true)}>Editar</button>
            </>
          )}
        </CtnButton>
      </Centraliza>

      <Ul>
        <li>
          <p>{`${contato.nome} ${contato.telefone} ${contato.email}`}</p>
        </li>
      </Ul>
    </Container>
  )
}

export default Contato

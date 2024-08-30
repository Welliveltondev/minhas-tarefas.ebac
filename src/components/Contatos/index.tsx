import React, { useEffect, useRef, useState } from 'react'
import { Centraliza, Container, CtnButton, Titulo, Ul } from './styles'
import ListaDeContatos from '../ListaDeContatos'
import { v4 as chave } from 'uuid'
import Usuario from './Usuario'

type Props = {
  nome: string
  telefone: number
  email: string
}
const Contato = () => {
  const [contato, setContato] = useState({
    id: '',
    nome: '',
    telefone: '',
    email: ''
  })
  const [listaContato, setListaDeContato] = useState([])
  const [editando, setEditando] = useState(false)

  //definir nome
  function definirNome(event: { target: { value: any } }) {
    setContato({ ...contato, nome: event.target.value })
  }
  //definir contato
  function definirTelefone(event: { target: { value: any } }) {
    setContato({ ...contato, telefone: event.target.value })
  }
  //definir email
  function definirEmail(event: { target: { value: any } }) {
    setContato({ ...contato, email: event.target.value })
  }
  //adicionar contato
  function adicionarContato() {
    if (contato.nome === '' || contato.telefone === '' || contato.email === '')
      return

    const duplicate = listaContato.find(
      (ct) =>
        ct.nome === contato.nome &&
        ct.telefone === contato.telefone &&
        ct.email === contato.email
    )

    if (typeof duplicate !== 'undefined') return
    setListaDeContato([...listaContato])
    //zerar valor dos inputs
    setContato({ nome: '', telefone: '', email: '' })
  }

  function addComEnter(event: { code: string }) {
    if (event.code === 'Enter') {
      adicionarContato()
    }
  }
  //limpar lista
  function limparLista() {
    setListaDeContato([])
  }
  //atualizar lista de conato
  useEffect(() => {
    if (localStorage.getItem('meus_contatos') !== null) {
      setListaDeContato(JSON.parse(localStorage.getItem('meus_contatos')))
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('meus_contatos', JSON.stringify(listaContato))
  }, [listaContato])

  function removerContato(id: any) {
    const tmp = listaContato.filter((ct) => ct.id !== id)
    setListaDeContato(tmp)
  }
  //Return
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
            onKeyUp={addComEnter}
          />
        </div>

        <div>
          <label htmlFor="">E-mail:</label>
          <input type="email" onChange={definirEmail} value={contato.email} />
        </div>

        <CtnButton>
          <button onClick={limparLista}>Limpar</button>
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
          <p>{contato.nome}</p>
          <p>{contato.telefone}</p>
          <p>{contato.email}</p>
        </li>
      </Ul>
    </Container>
  )
}

export default Contato

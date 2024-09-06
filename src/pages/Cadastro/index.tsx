import { useDispatch } from 'react-redux'
import * as S from './styles'
import { FormEvent, useState } from 'react'
import Tarefa from '../../models/Tarefa'
import { cadastrar } from '../../store/reducers/tarefas'

const Cadastro = () => {
  const dispatch = useDispatch()
  const [titulo, setTitulo] = useState('')
  const cadastraContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoPadd = new Tarefa('nome', 'prioridade', 'email', 123445, 23455)
    dispatch(cadastrar(contatoPadd))
  }
  return (
    <S.ContainerNewCas>
      <S.Title>Cadastro de novo contato</S.Title>
      <div>
        <form onSubmit={cadastraContato}>
          <input
            value={titulo}
            onChange={(evento) => setTitulo(evento.target.value)}
            type="text"
            placeholder="Nome"
          />
          <input type="email" placeholder="E-mail" />
          <input type="number" placeholder="Telefone" />
          <div>
            <span>Futebol</span>
            <span>Familia</span>
            <span>Trabalho</span>
            <span>Outros</span>
          </div>
          <div>
            <button>Cadastra +</button>
          </div>
        </form>
      </div>
    </S.ContainerNewCas>
  )
}

export default Cadastro

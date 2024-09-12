import { useDispatch } from 'react-redux'
import * as S from './styles'
import { FormEvent, useState } from 'react'
import Tarefa from '../../models/Tarefa'
import { cadastrar } from '../../store/reducers/tarefas'

const Cadastro = () => {
  const dispatch = useDispatch()
  const [nome, setTitulo] = useState('')
  const [email, setPrior] = useState('')
  const [tell, settell] = useState('')
  const cadastraContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoPadd = new Tarefa(nome, email, tell, 111, 1)
    dispatch(cadastrar(contatoPadd))
  }
  return (
    <S.ContainerNewCas className="/novo">
      <S.Title>Cadastro de novo contato</S.Title>
      <S.ConTnew>
        <form onSubmit={cadastraContato}>
          <S.Campo
            value={nome}
            onChange={(evento) => setTitulo(evento.target.value)}
            type="text"
            placeholder="Nome"
          />
          <S.Campo
            value={email}
            onChange={(evento) => setPrior(evento.target.value)}
            type="email"
            placeholder="E-mail"
          />
          <input
            value={tell}
            onChange={(evento) => settell(evento.target.value)}
            type="number"
            placeholder="Telefone"
          />
          <div>
            <button>Cadastrar +</button>
          </div>
        </form>
      </S.ConTnew>
    </S.ContainerNewCas>
  )
}

export default Cadastro

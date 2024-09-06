import { useSelector } from 'react-redux'
import Contato from '../../components/contato'
import { ContainerMain, Ul } from './styles'
import { RootReducer } from '../../store'
import { Key } from 'react'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  return (
    <ContainerMain>
      <p>
        2 contatos como <span>principal</span>
      </p>
      <Ul>
        {itens.map((t) => (
          <li key={t.nome}>
            <Contato
              id={t.id}
              prioridade={t.prioridade}
              email={t.email}
              nome={t.nome}
              telefone={t.telefone}
            />
          </li>
        ))}
      </Ul>
    </ContainerMain>
  )
}

export default ListaDeContatos

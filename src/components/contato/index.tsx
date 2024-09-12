import { useEffect, useState } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'

import { remover, editar } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
export type Props = TarefaClass

const Contato = ({
  prioridade: prioriOrigin,
  nome,
  email,
  telefone,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [editando, setEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (prioriOrigin.length > 0) {
      setDescricao(prioriOrigin)
    }
  }, [prioriOrigin])
  return (
    <S.Ct>
      <S.Titulo>{nome}</S.Titulo>
      <S.Descri>
        <input
          type="text"
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)}
        />
        <span>{email}</span>
        <S.SpanContato>{telefone}</S.SpanContato>
      </S.Descri>
      <div>
        <S.BarraOpcoes>
          <S.Opcoes>familia</S.Opcoes>
          <S.Opcoes>futebol</S.Opcoes>
          <S.Opcoes>outros</S.Opcoes>
        </S.BarraOpcoes>
      </div>
      <S.BarraAction>
        {editando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    prioridade: '',
                    telefone,
                    nome,
                    id,
                    email
                  })
                )
                setEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancel onClick={() => setEditando(false)}>
              Cancelar
            </S.BotaoCancel>
          </>
        ) : (
          <>
            <S.BotaoEditar onClick={() => setEditando(true)}>
              Editar
            </S.BotaoEditar>
            <S.BotaoRemove onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoRemove>
          </>
        )}
      </S.BarraAction>
    </S.Ct>
  )
}

export default Contato

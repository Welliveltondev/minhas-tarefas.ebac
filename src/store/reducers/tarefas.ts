import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'

type ContatoSlice = {
  itens: Tarefa[]
}

const initialState: ContatoSlice = {
  itens: [
    {
      id: 1,
      nome: 'akenato',
      telefone: 1234345,
      email: 'aken@g.com',
      prioridade: 'familia'
    },

    {
      id: 2,
      nome: 'xerxes',
      telefone: 1234345,
      email: 'xerxes@g.com',
      prioridade: 'amigo'
    }
  ]
}

const tarefaSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Tarefa>) => {
      const contatoJaExite = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoJaExite) {
        alert('Contao já existe')
      } else {
        return
      }
    }
  }
})

export const { remover, editar, cadastrar } = tarefaSlice.actions

export default tarefaSlice.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import CtnCons from '../../models/Contato'

const contatosSlice = createSlice({
  name: 'ctn',
  initialState: [new CtnCons('well', 217, 'welli@.com', 2)],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((ctn) => ctn.id !== action.payload)
    }
  }
})

export const { remover } = contatosSlice.actions
export default contatosSlice.reducer

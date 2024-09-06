import styled from 'styled-components'
import { Props } from '.'

type ProSeMLeg = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<ProSeMLeg>`
  padding: 6px;
  margin-top: 10px;
  border: 1px solid ${(props) => (props.ativo ? '#b666' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#999999')};
  color: ${(props) => (props.ativo ? '#787878' : 'black')};
  border-radius: 8px;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.label`
  font-size: 14px;
`

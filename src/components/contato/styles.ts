import styled from 'styled-components'

export const Ct = styled.div`
  background-color: #fcfcfc
  padding: 16px;
  margin-bottom: 32px;
  margin-left: 10px;

`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 5px;
`

export const Descri = styled.div`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  display: block;
  margin-top: 16px;
  resize: none;
  width: 50vh;
  border: none;
  padding: 20px 0;
  input {
    border: none;
  }
`
export const BarraOpcoes = styled.div`
  display: inline-block;
  margin: 10px 2px;
`

export const SpanContato = styled.span`
  margin-left: 10px;
`

export const Opcoes = styled.span`
  padding: 5px;
  color: #fff;
  background-color: #ccc;
  border-radius: 10px 10px 5px;
  cursor: POINTER;
  margin-left: 8px;
  display: none;
`

export const BarraAction = styled.span``

export const Botao = styled.button`
  padding: 4px;
  margin-left: 8px;
  color: white;
  background-color: #000;
  border-radius: 5px 5px 10px 0;
  cursor: POINTER;
`
export const BotaoSalvar = styled(Botao)`
  background-color: green;
  border: none;
`
export const BotaoCancel = styled(Botao)`
  background-color: red;
  border: none;
`
export const BotaoEditar = styled(Botao)`
  background-color: #ff885b;
  border: none;
`
export const BotaoRemove = styled(Botao)`
  background-color: #3795bd;
  border: none;
`

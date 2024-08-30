import styled from 'styled-components'

export const Container = styled.div`
  * {
    margin: 0;
    paddind: 0;
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
    list-style: none;
  }
`

export const Titulo = styled.div`
  text-align: center;
  background-color: #125b9a;
  margin-bottom: 30px;
  h1 {
    padding: 20px 0;
    color: white;
  }
`
export const Centraliza = styled.div`
  max-width: 960px;
  width: 100%;
  heigth: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 80px;

  input {
    border: none;
    border-bottom: 2px solid #125b9a;
    border-radius: 0 0 10px 10px;
    margin-left: 5px;
  }
`
export const CtnButton = styled.div`
  button {
    background-color: #125b9a;
    color: #fff;
    padding: 8px;
    border: none;
    border-radius: 0 0 10px 10px;
    cursor: pointer;
    margin-left: 10px;
  }
`
export const Ul = styled.ul`
  max-width: 700px;
  width: 100%;
  align-itens: center;
  margin: 0 auto;
  margin-top: 50px;
  li {
    display: flex;

    p {
      margin-left: 10px;
    }
  }
`

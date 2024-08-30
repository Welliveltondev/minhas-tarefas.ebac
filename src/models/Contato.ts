class CtnCons {
  nome: string
  telefone: number
  email: string
  id: number

  constructor(nome: string, telefone: number, email: string, id: number) {
    this.email = email
    this.nome = nome
    this.telefone = telefone
    this.id = id
  }
}

export default CtnCons

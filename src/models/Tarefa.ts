class Tarefa {
  nome: string
  prioridade: string
  email: string
  telefone: number
  id: number

  constructor(
    nome: string,
    prioridade: string,
    email: string,
    telefone: number,
    id: number
  ) {
    this.nome = nome
    this.prioridade = prioridade
    this.email = email
    this.telefone = telefone
    this.id = id
  }
}
export default Tarefa

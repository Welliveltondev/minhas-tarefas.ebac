import React from 'react'

export default function Usuario(props: {
  remover(arg0: {
    nome:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactPortal
      | Iterable<React.ReactNode>
      | null
      | undefined
    telefone:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactPortal
      | Iterable<React.ReactNode>
      | null
      | undefined
  }): unknown
  nome:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined
  telefone:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined
}) {
  return (
    <div>
      {props.nome} {props.telefone}
      <button
        onClick={() => {
          props.remover(props.id)
        }}
      >
        Remover
      </button>
    </div>
  )
}

import { useState } from 'react'

type Props = {
  initial?: number
}

export default function Somador({ initial = 0 }: Props) {
  const [valor, setValor] = useState<number>(initial)

  return (
    <div>
      <span data-testid="valor">{valor}</span>
      <button onClick={() => setValor((v) => v + 1)}>Somar</button>
    </div>
  )
}

import { render, screen, fireEvent } from '@testing-library/react'
import Somador from '../components/Somador'

test('Somador increments when button is clicked', () => {
  render(<Somador initial={1} />)

  const valor = screen.getByTestId('valor')
  expect(valor).toHaveTextContent('1')

  const botao = screen.getByRole('button', { name: /somar/i })
  fireEvent.click(botao)

  expect(valor).toHaveTextContent('2')
})

import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$md',
  padding: '$4',
  height: '$40',
  width: '$40',
})

export function app() {
  return <Button>olá mundo</Button>
}

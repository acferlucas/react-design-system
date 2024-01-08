import { ComponentProps } from 'react'
import { TextContainer, Prefix, Input } from './styles'

export type TextInputProps = ComponentProps<typeof Input> & {
  prefix?: string
}

export function TextInput({ prefix, ...rest }: TextInputProps) {
  return (
    <TextContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...rest} />
    </TextContainer>
  )
}

TextInput.displayName = 'TextInput'

import { ComponentProps, forwardRef, ElementRef } from 'react'
import { TextContainer, Prefix, Input } from './styles'

export type TextInputProps = ComponentProps<typeof Input> & {
  prefix?: string
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, ...rest }: TextInputProps, ref) => {
    return (
      <TextContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...rest} />
      </TextContainer>
    )
  },
)

TextInput.displayName = 'TextInput'

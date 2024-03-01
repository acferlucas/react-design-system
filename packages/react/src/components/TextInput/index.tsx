import { VariantProps } from '@stitches/react'
import { ComponentProps, forwardRef, ElementRef } from 'react'
import { TextContainer, Prefix, Input } from './styles'

export interface TextInputProps
  extends Omit<ComponentProps<typeof Input>, 'size'> {
  prefix?: string
  size?: VariantProps<typeof TextContainer>['size']
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, size, ...rest }: TextInputProps, ref) => {
    return (
      <TextContainer size={size}>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...rest} />
      </TextContainer>
    )
  },
)

TextInput.displayName = 'TextInput'

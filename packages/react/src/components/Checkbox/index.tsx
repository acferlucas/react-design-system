import { CheckboxIndicator } from '@radix-ui/react-checkbox'
import { CheckBoxContainer } from './styles'
import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'

export type CheckBoxProps = ComponentProps<typeof CheckBoxContainer>

export function CheckBox({ ...props }: CheckBoxProps) {
  return (
    <CheckBoxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckBoxContainer>
  )
}

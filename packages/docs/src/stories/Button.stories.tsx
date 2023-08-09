import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Button',
  component: Button,

  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
}

export const Bigger: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}

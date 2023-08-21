import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  fontFamily: '$default',
  fontWeight: 'bold',
  backgroundColor: '$ignite500',
  borderRadius: '$sm',
  padding: '$2 $4',
  color: '$white',
  border: 0,

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

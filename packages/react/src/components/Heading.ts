import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$shorter',
  margin: 0,
  color: '$gray100',

  variants: {
    size: {
      sm: { fontFamily: '$xl' },
      md: { fontFamily: '$2xl' },
      lg: { fontFamily: '$4xl' },
      '2xl': { fontFamily: '$5xl' },
      '3xl': { fontFamily: '$6xl' },
      '4xl': { fontFamily: '$7xl' },
      '5xl': { fontFamily: '$8xl' },
      '6xl': { fontFamily: '$9xl' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}

Heading.displayName = 'Heading'

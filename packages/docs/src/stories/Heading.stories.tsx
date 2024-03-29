import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@acfer-ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  argTypes: {
    size: {
      options: ['xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adip proident sed do eiusmod tempor incididunt ut labore et dol DOM. Ut enim ad minim veniam,',
  },
}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adip proident sed do eiusmod tempor incididunt ut labore et dol DOM. Ut enim ad minim veniam,',
    as: 'h1',
  },
}

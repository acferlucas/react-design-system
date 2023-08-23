import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
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

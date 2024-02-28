import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@acfer-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
  args: {
    src: 'https://github.com/acferlucas.png',
    alt: 'lucas silva',
  },
}

export const WithFallBack: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}

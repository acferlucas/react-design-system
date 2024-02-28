import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@acfer-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
  args: {
    children: 'Text example',
  },
}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'strong text example',
    as: 'strong',
  },
}

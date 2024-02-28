import { StoryObj, Meta } from '@storybook/react'
import { Box, TextInput, TextInputProps, Text } from '@acfer-ignite-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  decorators: [
    (story) => {
      return (
        <Box
          as={'label'}
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text>Email Address</Text>
          {story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'type your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
}

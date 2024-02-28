import { StoryObj, Meta } from '@storybook/react'
import { Box, TextArea, TextAreaProps, Text } from '@acfer-ignite-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  decorators: [
    (story) => {
      return (
        <Box
          as={'label'}
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text>Observations</Text>
          {story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'type your observations',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}

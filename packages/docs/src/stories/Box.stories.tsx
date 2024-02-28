import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@acfer-ignite-ui/react'

export default {
  title: 'Surfaces/box',
  component: Box,
  args: {
    children: (
      <>
        <Text>testando elemento box</Text>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

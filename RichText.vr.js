import React from 'react'
import { View, Text } from 'react-vr'
import redraft from 'redraft'

const BLOCK_SPACING = 0.07

// Define callbacks for block and entity rendering.
// See: https://github.com/lokiuz/redraft
const renderers = {
  inline: {},
  blocks: {
    unstyled: (children) => {
      return (
        <View style={{ flexDirection: 'column' }}>
          {children.map(child => (
            <Text
              style={{
                marginTop: BLOCK_SPACING / 2,
                marginBottom: BLOCK_SPACING / 2,
              }}
            >
              {child}
            </Text>
          ))}
        </View>
      )
    },
  },
  entities: {
    // We don't actually want to render links in VR, but this code is here as an
    // example for DOM rendering that will be implemented at some point.
    LINK: (children) => <Text style={{ color: '#3af' }}>{children}</Text>
  }
}

const RichText = ({ text }) => {
  return (
    <View
      style={{
        flexDirection: 'column',
      }}
    >
      {redraft(text, renderers, { cleanup: false })}
    </View>
  )
}

export default RichText

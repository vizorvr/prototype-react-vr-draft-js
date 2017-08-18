import React from 'react'
import { View, Text } from 'react-vr'
import redraft from 'redraft'

const BLOCK_SPACING = 0.07

const renderers = {
  inline: {},
  blocks: {
    unstyled: (children) => {
      console.log(children)
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
    atomic: (children) => (
      <View
        style={{
          height: 0.005,
          backgroundColor: '#fff',
          marginTop: BLOCK_SPACING / 2,
          marginBottom: BLOCK_SPACING / 2,
        }}
      />
    ),
  },
  entities: {
    SEPARATOR: () => null,
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
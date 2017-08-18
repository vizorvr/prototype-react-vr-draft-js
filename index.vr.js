import React from 'react'
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr'
import text from './text'
import RichText from './RichText'

export default class ReactVRDraftJS extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <View
          style={{
            backgroundColor: '#222',
            layoutOrigin: [0.5, 0.5],
            padding: 0.1,
            transform: [{translate: [0, 0, -3]}],
            width: 2,
          }}
        >
          <RichText text={text} />
        </View>
      </View>
    )
  }
}

AppRegistry.registerComponent('ReactVRDraftJS', () => ReactVRDraftJS)

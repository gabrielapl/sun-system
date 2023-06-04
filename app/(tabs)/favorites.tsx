import { ImageBackground, View } from 'react-native'

import starsBg from '../../src/assets/stars.png'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { MiniHeader } from '../../src/components/miniHeader'

export default function Favorites() {
  const { bottom, top } = useSafeAreaInsets()

  return (
    <ImageBackground
      className="flex-1 bg-black"
      source={starsBg}
      resizeMode="cover"
    >
      <View className="px-5" style={{ paddingBottom: bottom, paddingTop: top }}>
        <MiniHeader title="Favoritos" />
      </View>
    </ImageBackground>
  )
}

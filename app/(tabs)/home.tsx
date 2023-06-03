import { ImageBackground, View } from 'react-native'

import starsBg from '../../src/assets/stars.png'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Header } from '../../src/pages/home/header'

export default function Home() {
  const { bottom, top } = useSafeAreaInsets()

  return (
    <ImageBackground
      className="flex-1 bg-black"
      source={starsBg}
      resizeMode="cover"
    >
      <View style={{ paddingBottom: bottom, paddingTop: top }}>
        <Header />
      </View>
    </ImageBackground>
  )
}

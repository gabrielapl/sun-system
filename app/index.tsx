import { View, ImageBackground } from 'react-native'

import { Heading } from '../src/pages/signIn/heading'
import { LoginWrapper } from '../src/pages/signIn/loginWrapper'

import background from '../src/assets/background.png'

export default function App() {
  return (
    <ImageBackground
      source={background}
      className="flex-1 items-center justify-between bg-black"
      resizeMode="cover"
    >
      <View />
      <Heading />
      <LoginWrapper />
    </ImageBackground>
  )
}

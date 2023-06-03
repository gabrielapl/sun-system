import { ImageBackground } from 'react-native'

import starsBg from '../../src/assets/stars.png'

export default function Favorites() {
  return (
    <ImageBackground
      className="flex-1 bg-black"
      source={starsBg}
      resizeMode="cover"
    ></ImageBackground>
  )
}

import { ImageBackground } from 'react-native'

import background from '../assets/splash.png'

export default function App() {
  return (
    <ImageBackground
      source={background}
      className="flex-1  bg-brand_background"
    />
  )
}

import { ImageBackground } from 'react-native'

import starsBg from '../../src/assets/stars.png'
import React from 'react'

export default function Search() {
  return (
    <ImageBackground
      className="flex-1 bg-black"
      source={starsBg}
      resizeMode="cover"
    ></ImageBackground>
  )
}

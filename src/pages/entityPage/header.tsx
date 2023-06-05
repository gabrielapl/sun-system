import { ImageBackground, TouchableOpacity } from 'react-native'
import Icon from '@expo/vector-icons/Feather'

import starBg from '../../assets/stars.png'
import { useRouter } from 'expo-router'

export function Header() {
  const { back } = useRouter()

  return (
    <ImageBackground
      className="h-72 flex-1 rounded-b-[32px] bg-black px-5 py-2"
      source={starBg}
      resizeMode="cover"
    >
      <TouchableOpacity className="mt-8" onPress={back}>
        <Icon name="arrow-left" size={24} color={'#FFF'} />
      </TouchableOpacity>
    </ImageBackground>
  )
}

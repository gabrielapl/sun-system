import { Text, TouchableOpacity, View } from 'react-native'
import Icon from '@expo/vector-icons/Feather'
import { useAuth } from '../../hooks/auth'

export function Header() {
  const { user, signOut } = useAuth()

  return (
    <View className="mt-8 px-5">
      <View className="mb-1 flex-row items-center justify-between">
        <Text className="font-title text-3xl leading-tight text-white">
          Olá, <Text className="text-pink-600">{user?.name}</Text>
        </Text>
        <TouchableOpacity onPress={signOut}>
          <Icon name="log-out" color="#FFF" size={24} />
        </TouchableOpacity>
      </View>

      <Text className="font-body text-base leading-relaxed text-white">
        O que você vai aprender hoje?
      </Text>
    </View>
  )
}

import { LinearGradient } from 'expo-linear-gradient'
import { Text, View, TouchableOpacity } from 'react-native'
import Icon from '@expo/vector-icons/Feather'
import { useAuth } from '../../hooks/auth'

export function LoginWrapper() {
  const { signInWithGoogle } = useAuth()

  return (
    <View className="mb-28">
      <Text className="mb-4 text-center font-body text-sm leading-tight text-white">
        Pronto para a decolagem?
      </Text>
      <TouchableOpacity activeOpacity={0.6} onPress={signInWithGoogle}>
        <LinearGradient
          className="flex-row items-center justify-center rounded-lg px-8 py-4"
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={['#EF5f53', '#Fa8F70']}
        >
          <Text className="mr-4 font-title text-sm text-white">
            Começar agora
          </Text>
          <Icon name="arrow-right" color="#FFF" size={16} />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

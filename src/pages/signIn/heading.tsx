import { View, Text } from 'react-native'

export function Heading() {
  return (
    <View>
      <Text className="mb-2 text-center font-body text-base leading-relaxed text-white opacity-[0.65]">
        Aperte o cinto
      </Text>
      <Text className="text-center font-title text-3xl leading-tight text-white">
        Comece sua jornada{'\n'} pelo sistema solar.
      </Text>
    </View>
  )
}

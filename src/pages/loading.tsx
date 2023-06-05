import { View, ActivityIndicator } from 'react-native'

export function Loading() {
  return (
    <View className="flex-1 items-center justify-center bg-brand_background">
      <ActivityIndicator size={48} color="#FFF" />
    </View>
  )
}

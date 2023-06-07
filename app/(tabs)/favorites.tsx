import { FlatList, ImageBackground, View } from 'react-native'

import starsBg from '../../src/assets/stars.png'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { MiniHeader } from '../../src/components/miniHeader'
import { useCallback, useState } from 'react'
import { getFavoritesBasedUser } from '../../src/services/firebase'
import { useFocusEffect } from 'expo-router'
import { MiniCardNavigation } from '../../src/components/miniCardNavigation'
import { EntityDTO } from '../../src/dtos/entityDTO'
import { useAuth } from '../../src/hooks/auth'

export default function Favorites() {
  const { user } = useAuth()
  const { bottom } = useSafeAreaInsets()
  const [favorites, setFavorites] = useState<EntityDTO[]>([])

  async function fetchFavorites() {
    const favoritesData = await getFavoritesBasedUser(user.id)

    setFavorites(favoritesData)
  }

  useFocusEffect(
    useCallback(() => {
      fetchFavorites()
    }, []),
  )

  return (
    <ImageBackground
      className="flex-1 bg-black"
      source={starsBg}
      resizeMode="cover"
    >
      <View className="px-5">
        <MiniHeader title="Favoritos" />

        <FlatList
          data={favorites}
          contentContainerStyle={{ paddingBottom: bottom + 250 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <MiniCardNavigation
              name={item.name}
              icon={item.icon}
              id={item.id}
              isLargeCard
            />
          )}
        />
      </View>
    </ImageBackground>
  )
}

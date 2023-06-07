import { FlatList, ImageBackground, View } from 'react-native'

import starsBg from '../../src/assets/stars.png'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { MiniHeader } from '../../src/components/miniHeader'
import { useCallback, useState } from 'react'
import { getFavoritesBasedUser } from '../../src/services/firebase'
import { SmallEntityDTO } from '../../src/dtos/entityDTO'
import { useFocusEffect } from 'expo-router'
import { MiniCardNavigation } from '../../src/components/miniCardNavigation'

export default function Favorites() {
  const { bottom, top } = useSafeAreaInsets()
  const [favorites, setFavorites] = useState<SmallEntityDTO[]>([])

  async function fetchFavorites() {
    const favoritesData = await getFavoritesBasedUser()

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
      <View className="px-5" style={{ paddingBottom: bottom, paddingTop: top }}>
        <MiniHeader title="Favoritos" />

        <FlatList
          data={favorites}
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

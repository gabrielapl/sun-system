import { FlatList, ImageBackground, Keyboard, View } from 'react-native'

import starsBg from '../../../src/assets/stars.png'
import React, { useState, useCallback } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { MiniHeader } from '../../../src/components/miniHeader'
import { Input } from '../../../src/components/input'
import { useFocusEffect, useLocalSearchParams } from 'expo-router'
import { getEntityByName } from '../../../src/services/firebase'
import { LargeCardEntity } from '../../../src/components/LargeCardEntity'
import { EntityProps } from '../../../src/dtos/entityDTO'
import { useAuth } from '../../../src/hooks/auth'

type RouteParams = {
  search?: string
}

export default function Search() {
  const { user } = useAuth()
  const [entities, setEntities] = useState<EntityProps[]>([])
  const { bottom, top } = useSafeAreaInsets()
  const [searchValue, setSearchValue] = useState('')

  const params = useLocalSearchParams<RouteParams>()
  const { search } = params

  async function fetchEntity(search?: string) {
    const data = await getEntityByName(search, user.id)

    setEntities(data)
    Keyboard.dismiss()
  }

  useFocusEffect(
    useCallback(() => {
      if (search) {
        setSearchValue(search)
        fetchEntity(search)
      }
    }, []),
  )

  return (
    <ImageBackground
      className="flex-1 bg-black"
      source={starsBg}
      resizeMode="cover"
    >
      <View className="px-5" style={{ paddingTop: top }}>
        <MiniHeader title="Resultados da busca" />

        <Input
          placeholder="Procure planetas, asteroides, estrelas..."
          onPress={() => fetchEntity(searchValue)}
          onChangeText={(text) => setSearchValue(text)}
          value={searchValue}
        />

        <FlatList
          data={entities}
          className="mt-10"
          contentContainerStyle={{ paddingBottom: bottom + 300 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <LargeCardEntity data={item} />}
        />
      </View>
    </ImageBackground>
  )
}

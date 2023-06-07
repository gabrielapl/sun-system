import { FlatList, ImageBackground, Keyboard, View } from 'react-native'

import starsBg from '../../../src/assets/stars.png'
import React, { useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { MiniHeader } from '../../../src/components/miniHeader'
import { Input } from '../../../src/components/input'
import { useLocalSearchParams } from 'expo-router'
import { getEntityByName } from '../../../src/services/firebase'
import { LargeCardEntity } from '../../../src/components/LargeCardEntity'
import { EntityProps } from '../../../src/dtos/entityDTO'

type RouteParams = {
  search?: string
}

export default function Search() {
  const [entities, setEntities] = useState<EntityProps[]>([])
  const { bottom, top } = useSafeAreaInsets()
  const [searchValue, setSearchValue] = useState('')

  const params = useLocalSearchParams<RouteParams>()
  const { search } = params

  async function fetchEntity(search?: string) {
    const data = await getEntityByName(search)

    setEntities(data)
    Keyboard.dismiss()
  }

  useEffect(() => {
    if (search) {
      setSearchValue(search)
      fetchEntity(search)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  return (
    <ImageBackground
      className="flex-1 bg-black"
      source={starsBg}
      resizeMode="cover"
    >
      <View className="px-5" style={{ paddingBottom: bottom, paddingTop: top }}>
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
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <LargeCardEntity data={item} />}
        />
      </View>
    </ImageBackground>
  )
}

import { ImageBackground, View } from 'react-native'

import starsBg from '../../../src/assets/stars.png'
import React, { useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { MiniHeader } from '../../../src/components/miniHeader'
import { Input } from '../../../src/components/input'
import { useLocalSearchParams } from 'expo-router'

type RouteParams = {
  search?: string
}

export default function Search() {
  const { bottom, top } = useSafeAreaInsets()
  const [searchValue, setSearchValue] = useState('')

  const params = useLocalSearchParams<RouteParams>()
  const { search } = params

  useEffect(() => {
    if (search) {
      setSearchValue(search)
    }
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
          onPress={() => {}}
          onChangeText={(text) => setSearchValue(text)}
          value={searchValue}
        />
      </View>
    </ImageBackground>
  )
}

import { BackHandler, ImageBackground, ScrollView, View } from 'react-native'

import starsBg from '../../src/assets/stars.png'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Header } from '../../src/pages/home/header'
import { Categories } from '../../src/pages/home/categories'
import { HomeContextProvider } from '../../src/context/homeContext'
import { Input } from '../../src/components/input'
import { useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { EntitiesList } from '../../src/pages/home/entitiesList'

export default function Home() {
  const router = useRouter()
  const { bottom, top } = useSafeAreaInsets()
  const [searchValue, setSearchValue] = useState('')

  function handleSearch() {
    setSearchValue('')
    router.push(`/search/${searchValue}`)
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true
    })
  }, [])

  return (
    <HomeContextProvider>
      <ImageBackground
        className="flex-1 bg-black"
        source={starsBg}
        resizeMode="cover"
      >
        <ScrollView
          style={{ paddingTop: top }}
          contentContainerStyle={{ paddingBottom: bottom + 200 }}
        >
          <Header />

          <View className="mt-14 px-5">
            <Input
              onPress={handleSearch}
              placeholder="Procure planetas, asteroides, estrelas..."
              onChangeText={(text) => setSearchValue(text)}
              value={searchValue}
              needDisabledInput
            />
          </View>

          <Categories />

          <EntitiesList />
        </ScrollView>
      </ImageBackground>
    </HomeContextProvider>
  )
}

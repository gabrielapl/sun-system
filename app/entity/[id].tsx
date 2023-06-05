/* eslint-disable jsx-a11y/alt-text */
import { useLocalSearchParams } from 'expo-router'
import { ScrollView, Text, View } from 'react-native'

import React from 'react'
import EntityPage from '../../src/pages/entityPage'
import { Accordion } from '../../src/components/accordion'

type RouteParams = {
  id: string
}

export default function Entity() {
  const params = useLocalSearchParams<RouteParams>()
  const { id } = params

  return (
    <ScrollView className="flex-1 bg-white">
      <EntityPage.Header />

      <View className="mt-6 flex-1 bg-white px-5">
        <EntityPage.Heading entity_id={id} />

        <Text className="mb-5 mt-10 font-body text-base leading-relaxed text-brand_background opacity-[0.75]">
          Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema
          Solar. Batizado em homenagem ao deus romano da guerra, muitas vezes é
          descrito como o Planeta Vermelho, porque o óxido de ferro predominante
          em sua superfície lhe dá uma aparência avermelhada.
        </Text>

        <Accordion />
        <Accordion />
        <Accordion needNotDivision />
      </View>
    </ScrollView>
  )
}

/*  
 <ImageBackground
        className="relative h-72 rounded-b-[32] bg-black px-5 py-2"
        source={starsBg}
        resizeMode="cover"
      >
        <TouchableOpacity className="relative top-8 z-10" onPress={() => {}}>
          <Icon name="arrow-left" size={24} color={'#FFF'} />
        </TouchableOpacity>
      </ImageBackground>

      <Image
        className="-mt-[220] h-[280] w-[280] self-center"
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/6543/6543593.png',
        }}
      />

      <Carrousel />

*/

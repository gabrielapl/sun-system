/* eslint-disable jsx-a11y/alt-text */
import { useLocalSearchParams } from 'expo-router'
import { ScrollView, Text, View } from 'react-native'

import React, { useEffect, useState } from 'react'
import EntityPage from '../../src/pages/entityPage'
import { Accordion } from '../../src/components/accordion'
import firestore from '@react-native-firebase/firestore'
import { CompleteEntityDTO, EntityProps } from '../../src/dtos/entityDTO'
import { FavoritesDTO } from '../../src/dtos/favoritesDTO'

type RouteParams = {
  id: string
}

export default function Entity() {
  const params = useLocalSearchParams<RouteParams>()
  const { id } = params

  const [entity, setEntity] = useState<EntityProps>({} as EntityProps)

  async function getEntity() {
    const db = firestore()

    const entityCollection = db.collection<CompleteEntityDTO>('space-entities')

    const entityDocRef = entityCollection.doc(id)

    const entityDocData = await entityDocRef.get()

    if (entityDocData.exists) {
      const favoriteDocData = await db
        .collection<FavoritesDTO>('favorites')
        .doc('1')
        .get()

      const { name, resume } = entityDocData.data()

      let hasFavorite = false

      if (favoriteDocData.exists) {
        const { entity_ids } = favoriteDocData.data()

        hasFavorite = entity_ids.includes(id)
      }

      setEntity({
        id: entityDocData.id,
        name,
        resume,
        hasFavorite,
      })
    }
  }

  useEffect(() => {
    getEntity()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <ScrollView className="flex-1 bg-white">
      <EntityPage.Header />

      <View className="mt-6 flex-1 bg-white px-5">
        <EntityPage.Heading
          entity_id={id}
          name={entity.name}
          isFavorite={entity.hasFavorite}
        />

        <Text className="mb-5 mt-10 font-body text-base leading-relaxed text-brand_background opacity-[0.75]">
          {entity.resume}
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

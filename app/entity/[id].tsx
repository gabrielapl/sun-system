/* eslint-disable jsx-a11y/alt-text */
import { useLocalSearchParams } from 'expo-router'
import { ScrollView, Text, View } from 'react-native'

import React, { useEffect, useState } from 'react'
import EntityPage from '../../src/pages/entityPage'
import { Accordion } from '../../src/components/accordion'
import firestore from '@react-native-firebase/firestore'
import { EntityDTO, EntityProps } from '../../src/dtos/entityDTO'
import { FavoritesDTO } from '../../src/dtos/favoritesDTO'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useAuth } from '../../src/hooks/auth'

type RouteParams = {
  id: string
}

export default function Entity() {
  const { user } = useAuth()
  const { bottom } = useSafeAreaInsets()
  const params = useLocalSearchParams<RouteParams>()
  const { id } = params

  const [entity, setEntity] = useState<EntityProps>({} as EntityProps)

  async function getEntity() {
    const db = firestore()

    const entityCollection = db.collection<EntityDTO>('space-entities')

    const entityDocRef = entityCollection.doc(id)

    const entityDocData = await entityDocRef.get()

    if (entityDocData.exists) {
      const favoriteDocData = await db
        .collection<FavoritesDTO>('favorites')
        .doc(user.id)
        .get()

      const { name, resume, icon } = entityDocData.data()

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
        icon,
      })
    }
  }

  useEffect(() => {
    getEntity()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerStyle={{ paddingBottom: bottom + 50 }}
      showsVerticalScrollIndicator={false}
    >
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

        <Accordion
          title="Introdução"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officia possimus voluptatibus ex. Dicta reiciendis iure, dolore voluptates exercitationem sint repellat dignissimos pariatur sit, iste nobis voluptate eum cumque molestiae?"
        />
        <Accordion
          title="Características Físicas"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officia possimus voluptatibus ex. Dicta reiciendis iure, dolore voluptates exercitationem sint repellat dignissimos pariatur sit, iste nobis voluptate eum cumque molestiae?"
        />
        <Accordion
          title="Hidrologia"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officia possimus voluptatibus ex. Dicta reiciendis iure, dolore voluptates exercitationem sint repellat dignissimos pariatur sit, iste nobis voluptate eum cumque molestiae?"
        />
        <Accordion
          title="Geografia"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officia possimus voluptatibus ex. Dicta reiciendis iure, dolore voluptates exercitationem sint repellat dignissimos pariatur sit, iste nobis voluptate eum cumque molestiae?"
          needNotDivision
        />
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

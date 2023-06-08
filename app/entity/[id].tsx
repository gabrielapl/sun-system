/* eslint-disable jsx-a11y/alt-text */
import { useLocalSearchParams } from 'expo-router'
import { ActivityIndicator, ScrollView, Text, View, Image } from 'react-native'

import React, { useEffect, useState } from 'react'
import EntityPage from '../../src/pages/entityPage'
import { Accordion } from '../../src/components/accordion'
import firestore from '@react-native-firebase/firestore'
import { FavoritesDTO } from '../../src/dtos/favoritesDTO'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useAuth } from '../../src/hooks/auth'
import { AccordionRow } from '../../src/pages/entityPage/accordionRow'

type RouteParams = {
  id: string
}

interface EntityProps {
  id: string
  name: string
  type: string
  resume: string
  introduction: string
  icon: string
  image: string
  features: {
    orbitalPeriod: string
    orbitalSpeed: string
    rotationDuration: string
    radius: string
    diameter: string
    sunDistance: string
    oneWayLightToTheSun: string
    temperature: string
    gravity: string
  }
  composition: string
  curiosities: string[]
  hasFavorite: boolean
}

export default function Entity() {
  const { user } = useAuth()
  const { bottom } = useSafeAreaInsets()
  const params = useLocalSearchParams<RouteParams>()
  const { id } = params
  const [isLoading, setIsLoading] = useState(true)

  const [entity, setEntity] = useState<EntityProps>({} as EntityProps)

  async function getEntity() {
    setIsLoading(true)
    const db = firestore()

    const entityCollection = db.collection<EntityProps>('space-entities')

    const entityDocRef = entityCollection.doc(id)

    const entityDocData = await entityDocRef.get()

    if (entityDocData.exists) {
      const favoriteDocData = await db
        .collection<FavoritesDTO>('favorites')
        .doc(user.id)
        .get()

      const {
        name,
        resume,
        icon,
        composition,
        curiosities,
        features,
        introduction,
        type,
        image,
      } = entityDocData.data()

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
        composition,
        curiosities,
        features,
        introduction,
        type,
        image,
      })

      setIsLoading(false)
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

      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size={48} color="#000" />
        </View>
      ) : (
        <>
          <Image
            source={{ uri: entity.image }}
            className="-mt-[220] h-[280] w-[280] self-center"
          />
          <View className="mt-6 flex-1 bg-white px-5">
            <EntityPage.Heading
              entity_id={id}
              name={entity.name}
              isFavorite={entity.hasFavorite}
            />

            <Text className="mb-5 mt-10 font-body text-base leading-relaxed text-brand_background opacity-[0.75]">
              {entity.resume}
            </Text>

            <Accordion title="Introdução" text={entity.resume} />
            <Accordion title="Características Físicas">
              <AccordionRow text={entity.features.diameter} title="Diâmetro" />
              <AccordionRow text={entity.features.gravity} title="Gravidade" />
              <AccordionRow
                text={entity.features.oneWayLightToTheSun}
                title="voo de ida para o sol"
              />
              <AccordionRow
                text={entity.features.orbitalPeriod}
                title="Período orbital"
              />
              <AccordionRow
                text={entity.features.orbitalSpeed}
                title="Velocidade orbital"
              />
              <AccordionRow text={entity.features.radius} title="Raio" />
              <AccordionRow
                text={entity.features.rotationDuration}
                title="Duração da rotação"
              />
              <AccordionRow
                text={entity.features.sunDistance}
                title="Distância do sol"
              />
              <AccordionRow
                text={entity.features.temperature}
                title="Temperatura"
              />
            </Accordion>
            <Accordion
              title="Curiosidades"
              text={entity.curiosities}
              needNotDivision
            />
          </View>
        </>
      )}
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

import { View, Text, TouchableOpacity } from 'react-native'
import { EntityProps } from '../dtos/entityDTO'
import { SvgUri } from 'react-native-svg'
import { FavoriteButton } from './favoriteButton'
import Icon from '@expo/vector-icons/Feather'
import React from 'react'

interface LargeCardEntityProps {
  data: EntityProps
}

export function LargeCardEntity({ data }: LargeCardEntityProps) {
  return (
    <View className="w-full flex-row overflow-hidden rounded-lg bg-brand_background">
      <SvgUri width={150} height={150} uri={data.icon} />

      <View className="ml-4 mt-4 pb-4">
        <View className="flex-row items-center justify-between">
          <Text className="font-title text-3xl leading-tight text-white">
            {data.name}
          </Text>
          <FavoriteButton
            color="white"
            entity_id={data.id}
            hasFavorite={data.hasFavorite}
          />
        </View>

        <Text className="mt-2 max-w-[172] font-body leading-relaxed text-white opacity-[0.65]">
          {data.resume.substring(0, 100).concat('...')}
        </Text>

        <TouchableOpacity className="flex-row items-center pb-4  pt-5">
          <Text className="mr-2 font-title text-sm text-white">
            Continue lendo
          </Text>
          <Icon name="arrow-right" color="#EF5F53" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

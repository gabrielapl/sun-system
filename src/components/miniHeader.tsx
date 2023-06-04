import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from '@expo/vector-icons/Feather'
import { useRouter } from 'expo-router'

interface MiniHeaderProps {
  title: string
}

export function MiniHeader({ title }: MiniHeaderProps) {
  const { back } = useRouter()

  return (
    <View>
      <TouchableOpacity className="mt-8" onPress={back}>
        <Icon name="arrow-left" size={24} color={'#FFF'} />
      </TouchableOpacity>

      <Text className="mb-10 mt-8 font-title text-3xl leading-tight text-white">
        {title}
      </Text>
    </View>
  )
}

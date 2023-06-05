import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from '@expo/vector-icons/Feather'

interface FavoriteButtonProps {
  // entity_id: string
  color: 'white' | 'dark'
  // hasFavorite: boolean
}

export function FavoriteButton({ color }: FavoriteButtonProps) {
  const [isFavorite] = useState(false)

  const colors = {
    white: '#FFF',
    dark: '#151515',
  }

  return (
    <TouchableOpacity onPress={() => {}}>
      <Icon
        name="bookmark"
        size={24}
        color={isFavorite ? '#EF5f53' : colors[color]}
      />
    </TouchableOpacity>
  )
}

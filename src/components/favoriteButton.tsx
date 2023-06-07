import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from '@expo/vector-icons/Feather'
import { toggleFavoriteFirebase } from '../services/firebase'
import { useAuth } from '../hooks/auth'

interface FavoriteButtonProps {
  entity_id: string
  color: 'white' | 'dark'
  hasFavorite: boolean
}

export function FavoriteButton({
  color,
  hasFavorite,
  entity_id,
}: FavoriteButtonProps) {
  const { user } = useAuth()
  const [isFavorite, setFavorite] = useState(false)

  const colors = {
    white: '#FFF',
    dark: '#151515',
  }

  async function handleFavorite() {
    const isFavorite = await toggleFavoriteFirebase(entity_id, user.id)
    setFavorite(isFavorite)
  }

  useEffect(() => {
    setFavorite(hasFavorite)
  }, [hasFavorite])

  return (
    <TouchableOpacity onPress={handleFavorite}>
      <Icon
        name="bookmark"
        size={24}
        color={isFavorite ? '#EF5f53' : colors[color]}
      />
    </TouchableOpacity>
  )
}

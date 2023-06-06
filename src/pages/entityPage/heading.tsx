import { View, Text, TouchableOpacity, Share } from 'react-native'
import Icon from '@expo/vector-icons/Feather'
import { FavoriteButton } from '../../components/favoriteButton'

interface HeadingProps {
  name: string
  entity_id: string
  isFavorite: boolean
}

export function Heading({ name, entity_id, isFavorite }: HeadingProps) {
  async function handleSharing() {
    Share.share({
      message: 'sun-system://',
    })
  }

  return (
    <View className="w-full flex-row items-center justify-between">
      <Text className="font-title text-3xl leading-tight text-brand_background">
        {name}
      </Text>

      <View className="flex-row">
        <FavoriteButton
          color="dark"
          entity_id={entity_id}
          hasFavorite={isFavorite}
        />
        <TouchableOpacity className="ml-5" onPress={handleSharing}>
          <Icon name="share-2" size={24} color={'#151515'} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

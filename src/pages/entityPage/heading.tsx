import { View, Text, TouchableOpacity } from 'react-native'
import Icon from '@expo/vector-icons/Feather'
import { FavoriteButton } from '../../components/favoriteButton'

interface HeadingProps {
  entity_id: string
}

export function Heading({ entity_id }: HeadingProps) {
  /*  function handleSharing() {
    Sharing.shareAsync('entity_id')
  } */

  return (
    <View className="w-full flex-row items-center justify-between">
      <Text className="font-title text-3xl leading-tight text-brand_background">
        Sol
      </Text>

      <View className="flex-row">
        <FavoriteButton color="dark" />
        <TouchableOpacity className="ml-5" onPress={() => {}}>
          <Icon name="share-2" size={24} color={'#151515'} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

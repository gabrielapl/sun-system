import { Text, TouchableOpacity, View } from 'react-native'
import Icon from '@expo/vector-icons/Feather'
import { SvgUri } from 'react-native-svg'
import { Link } from 'expo-router'

interface MiniCardNavigationProps {
  name: string
  icon: string
  id: string
  isLargeCard?: boolean
}

export function MiniCardNavigation({
  name,
  icon,
  id,
  isLargeCard = false,
}: MiniCardNavigationProps) {
  return (
    <Link
      href={`/entity/${id}`}
      asChild
      style={{ marginBottom: isLargeCard ? 24 : 0 }}
    >
      <TouchableOpacity
        style={{ width: isLargeCard ? '100%' : 140 }}
        className="mr-4 w-[140] overflow-hidden rounded-lg bg-brand_background py-4"
      >
        <SvgUri
          uri={icon}
          height={80}
          width={80}
          style={{
            alignSelf: isLargeCard ? 'flex-start' : 'center',
            marginLeft: isLargeCard ? 16 : 0,
          }}
        />

        <View className="mx-4  mt-6 flex-row items-center justify-between">
          <Text className="font-title text-base text-white">{name}</Text>
          <Icon name="arrow-right" color="#EF5F53" size={20} />
        </View>
      </TouchableOpacity>
    </Link>
  )
}

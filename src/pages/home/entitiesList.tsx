import { View, Text } from 'react-native'
import { useHome } from '../../hooks/useHome'
import { FlatList } from 'react-native-gesture-handler'
import { MiniCardNavigation } from '../../components/miniCardNavigation'

export function EntitiesList() {
  const { categorySelected, categories, entities } = useHome()

  return (
    <View className="ml-5">
      <Text className="font-body text-base leading-relaxed text-white">
        {
          categories?.find((category) => category.id === categorySelected)
            ?.title
        }
      </Text>

      <FlatList
        className="mt-6"
        data={entities}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <MiniCardNavigation name={item.name} icon={item.icon} id={item.id} />
        )}
      />
    </View>
  )
}

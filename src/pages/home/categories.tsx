import { View, Text } from 'react-native'
import { CategoryCard } from '../../components/categoryCard'
import { useHome } from '../../hooks/useHome'

export function Categories() {
  const { categories, categorySelected } = useHome()

  return (
    <View className="mx-5 my-12">
      <Text className="mb-6 font-body text-base leading-relaxed text-white">
        Categorias
      </Text>

      <View className="w-full flex-row justify-between">
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            data={category}
            isActive={category.id === categorySelected}
          />
        ))}
      </View>
    </View>
  )
}

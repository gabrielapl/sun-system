import { LinearGradient } from 'expo-linear-gradient'
import { TouchableOpacity, Text } from 'react-native'
import { CategoryDTO } from '../dtos/categoryDTO'
import { SvgUri } from 'react-native-svg'
import { useHome } from '../hooks/useHome'

interface CategoryCardProps {
  isActive: boolean
  data: CategoryDTO
}

export function CategoryCard({ isActive, data }: CategoryCardProps) {
  const { handleSelectCategory } = useHome()

  return (
    <TouchableOpacity
      className={isActive ? 'opacity-100' : 'opacity-50'}
      onPress={() => handleSelectCategory(data.id)}
    >
      <LinearGradient
        className="h-20 w-20 items-center justify-center rounded-lg"
        colors={data.colors}
      >
        <SvgUri className="mb-2 h-8 w-8" uri={data.icon} />
        <Text className="font-body text-sm text-white">{data.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

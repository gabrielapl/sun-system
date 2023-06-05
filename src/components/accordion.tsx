import {
  TouchableOpacity,
  View,
  Text,
  UIManager,
  LayoutAnimation,
  Platform,
} from 'react-native'
import Icon from '@expo/vector-icons/Feather'
import { useEffect, useState } from 'react'

interface AccordionProps {
  needNotDivision?: boolean
}

export function Accordion({ needNotDivision = false }: AccordionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
  }, [])

  function handleExpandedAccording() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    setIsExpanded(!isExpanded)
  }

  return (
    <View className="mt-5">
      <TouchableOpacity
        onPress={handleExpandedAccording}
        className="w-full flex-row items-center"
      >
        <Icon name="chevron-down" size={24} color={'#151515'} />
        <Text className="ml-4 font-title text-base text-brand_background">
          Introdução
        </Text>
      </TouchableOpacity>

      {isExpanded && (
        <View>
          <Text className="mt-5 font-body text-base leading-relaxed text-brand_background opacity-[0.75]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            maxime. Commodi earum impedit molestias eos quos cum natus eius
            corrupti aut libero vero sequi minus illum magnam at, fugit
            dignissimos.
          </Text>
        </View>
      )}

      {!needNotDivision && (
        <View className="mt-5 h-[1] w-full bg-brand_background opacity-[0.4]" />
      )}
    </View>
  )
}

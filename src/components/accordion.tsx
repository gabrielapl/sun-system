import {
  TouchableOpacity,
  View,
  Text,
  UIManager,
  LayoutAnimation,
  Platform,
} from 'react-native'
import Icon from '@expo/vector-icons/Feather'
import { ReactNode, useEffect, useState } from 'react'

interface AccordionProps {
  title: string
  text?: string | string[]
  needNotDivision?: boolean
  children?: ReactNode
}

export function Accordion({
  text,
  title,
  needNotDivision = false,
  children,
}: AccordionProps) {
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
    <View className="mt-5 pr-3">
      <TouchableOpacity
        onPress={handleExpandedAccording}
        className="w-full flex-row items-center"
      >
        <Icon name="chevron-down" size={24} color={'#151515'} />
        <Text className="ml-4 font-title text-base text-brand_background">
          {title}
        </Text>
      </TouchableOpacity>

      {isExpanded && (
        <View className="ml-2 mt-5">
          {children ||
            (typeof text === 'string' ? (
              <Text className="font-body text-base leading-relaxed text-brand_background opacity-[0.75]">
                {text}
              </Text>
            ) : (
              text.map((text) => (
                <View key={text} className="mt-5 flex-row items-center">
                  <View className="mr-4 h-2 w-2 rounded-full bg-black " />
                  <Text className="font-body text-base leading-relaxed text-brand_background opacity-[0.75]">
                    {text}
                  </Text>
                </View>
              ))
            ))}
        </View>
      )}

      {!needNotDivision && (
        <View className="mt-5 h-[1] w-full bg-brand_background opacity-[0.4]" />
      )}
    </View>
  )
}
/* 
{children ? (
            children || (typeof text === 'string' ? (
              <Text className="mt-5 font-body text-base leading-relaxed text-brand_background opacity-[0.75]">
                {text}
              </Text>
            ) : (
              text.map((text) => (
                <View key={text} className="flex-row items-center">
                  <View className="mr-4 h-2 w-2 rounded-full bg-black " />
                  <Text className="mt-5 font-body text-base leading-relaxed text-brand_background opacity-[0.75]">
                    {text}
                  </Text>
                </View>
              ))
          
         
          ))}

*/

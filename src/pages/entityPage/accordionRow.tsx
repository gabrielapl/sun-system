import { View, Text } from 'react-native'

interface AccordionRowProps {
  title: string
  text: string
}

export function AccordionRow({ text, title }: AccordionRowProps) {
  return (
    <View className="mb-2 flex-row items-center">
      <Text className="mr-4 font-title text-sm text-brand_background">
        {`${title}:`}
      </Text>
      <Text className="font-body text-base text-brand_background opacity-[0.75]">
        {text}
      </Text>
    </View>
  )
}

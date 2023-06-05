/* eslint-disable jsx-a11y/alt-text */
import { useRef, useState } from 'react'
import { FlatList, View, ViewToken, Image, Dimensions } from 'react-native'

const { width } = Dimensions.get('screen')

interface ChangeImageProps {
  viewableItems: ViewToken[]
  changed: ViewToken[]
}

export function Carrousel() {
  const imagensUrl = [
    'https://cdn-icons-png.flaticon.com/512/6543/6543593.png',
    'https://image.pngaaa.com/679/4333679-middle.png',
  ]

  const [imageIndex, setImageIndex] = useState(0)

  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!
    setImageIndex(index)
  })

  return (
    <View className="-mt-[232] w-full">
      <FlatList
        data={imagensUrl}
        horizontal
        keyExtractor={(key) => key}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        pagingEnabled
        onViewableItemsChanged={indexChanged.current}
        renderItem={({ item }) => (
          <View
            style={{ width }}
            className="h-[280] items-center justify-center px-2"
          >
            <Image source={{ uri: item }} className="h-[280] w-full" />
          </View>
        )}
      />

      <View className="flex-row self-center">
        {imagensUrl.map((_, index) => (
          <View
            key={String(index)}
            className={`mr-2 mt-2 h-3 w-3 rounded-full bg-black ${
              imageIndex === index ? 'bg-[#EF5f53]' : 'bg-gray-400'
            }`}
          />
        ))}
      </View>
    </View>
  )
}

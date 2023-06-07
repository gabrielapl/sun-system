import { TextInput, View, TextInputProps, TouchableOpacity } from 'react-native'
import Icon from '@expo/vector-icons/Feather'
import { LinearGradient } from 'expo-linear-gradient'

interface InputProps extends TextInputProps {
  onPress: () => void
  needDisabledInput?: boolean
}

export function Input({
  onPress,
  needDisabledInput = false,
  ...rest
}: InputProps) {
  return (
    <View className="relative h-14 w-full flex-row">
      <TextInput
        className="flex-1 rounded-l-lg bg-brand_background px-4 font-body text-sm text-white"
        placeholderTextColor="rgba(255,255,255,0.65)"
        {...rest}
      />

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        className={
          needDisabledInput
            ? rest.value.trim()
              ? 'opacity-100'
              : 'opacity-70'
            : 'opacity-100'
        }
        disabled={needDisabledInput ? !rest.value.trim() : false}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={['#EF5f53', '#Fa8F70']}
          className="h-14 items-center justify-center rounded-r-lg px-5"
        >
          <Icon name="send" size={16} color={'#FFF'} />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

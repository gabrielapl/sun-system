import animation from '../assets/solar-system-loading.json'
import Lottie from 'lottie-react-native'

export function LoadingAnimation() {
  return <Lottie source={animation} autoPlay loop />
}

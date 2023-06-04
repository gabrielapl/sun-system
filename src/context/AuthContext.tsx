import { ReactNode, createContext, useEffect, useState } from 'react'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import * as SecureStore from 'expo-secure-store'
import axios from 'axios'
import { useRouter } from 'expo-router'
import { LogBox } from 'react-native'

LogBox.ignoreLogs([
  'The useProxy option is deprecated and will be removed in a future release, for more information check https://expo.fyi/auth-proxy-migration.',
])

WebBrowser.maybeCompleteAuthSession()

interface AuthProviderProps {
  children: ReactNode
}

interface UserProps {
  name: string
  avatarUrl: string
}

interface IAuthContextData {
  signInWithGoogle: () => void
  signOut: () => void
  user: UserProps
  isAuthenticationLoading: boolean
}

export const AuthContext = createContext({} as IAuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter()

  const [user, setUser] = useState<UserProps | null>(null)
  const [isAuthenticationLoading, setIsAuthenticationLoading] = useState(false)

  const [, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      '966667347547-4us1eodvu4kffllvvq2if4qostl0n8hj.apps.googleusercontent.com',
    androidClientId:
      '966667347547-oaph9fmsndl0f5mgonpd8i442l3f8o2i.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
  })

  async function signInWithGoogle() {
    setIsAuthenticationLoading(true)
    await promptAsync()
  }

  async function signOut() {
    await SecureStore.deleteItemAsync('accessToken')

    router.push('/signIn')
    setUser(null)
  }

  async function handleGoogleOAccessToken(accessToken: string) {
    getUserInfo(accessToken)
    await SecureStore.setItemAsync('accessToken', accessToken)
    setIsAuthenticationLoading(false)

    router.push('/home')
  }

  async function getUserInfo(accessToken: string) {
    try {
      const response = await axios<UserProps>(
        'https://www.googleapis.com/userinfo/v2/me',
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      )

      setUser(response.data)
    } catch (error) {
      console.log(error)
      await SecureStore.deleteItemAsync('accessToken')
      router.push('/signIn')
      setUser(null)
    }
  }

  useEffect(() => {
    if (response?.type === 'success' && response.authentication?.accessToken) {
      handleGoogleOAccessToken(response.authentication.accessToken)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response])

  useEffect(() => {
    async function loadUserByAccessToken() {
      const accessToken = await SecureStore.getItemAsync('accessToken')

      if (accessToken) {
        getUserInfo(accessToken)

        router.push('/home')
      } else {
        router.push('/signIn')
      }
    }

    loadUserByAccessToken()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AuthContext.Provider
      value={{ user, signInWithGoogle, signOut, isAuthenticationLoading }}
    >
      {children}
    </AuthContext.Provider>
  )
}

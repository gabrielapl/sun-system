import { ReactNode, createContext, useEffect, useState } from 'react'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import * as SecureStore from 'expo-secure-store'
import axios from 'axios'
import { useRouter } from 'expo-router'
import { Loading } from '../pages/loading'

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
}

export const AuthContext = createContext({} as IAuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter()

  const [user, setUser] = useState<UserProps | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const [, response, promptAsync] = Google.useAuthRequest({
    clientId:
      '966667347547-4us1eodvu4kffllvvq2if4qostl0n8hj.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
  })

  async function signInWithGoogle() {
    await promptAsync()
  }

  async function signOut() {
    setUser({} as UserProps)
    await SecureStore.deleteItemAsync('accessToken')

    router.push('/')
  }

  async function handleGoogleOAccessToken(accessToken: string) {
    getUserInfo(accessToken)
    await SecureStore.setItemAsync('accessToken', accessToken)

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
      }
    }

    loadUserByAccessToken()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

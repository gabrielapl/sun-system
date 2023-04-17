import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import * as AuthSession from "expo-auth-session";
import AsyncStorage from "@react-native-async-storage/async-storage";

WebBrowser.maybeCompleteAuthSession();

interface AuthProviderProps {
  children: ReactNode;
}

interface UserProps {
  name: string;
  avatarUrl: string;
}

interface IAuthContextData {
  user: UserProps;
  singInWithGoogle: () => Promise<void>;
  signOut: () => void;
  isUserLoading: boolean;
  isFetchingToken: boolean;
}

export const AuthContext = createContext({} as IAuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [isUserLoading, setIsUserLoading] = useState(false);
  const [isFetchingToken, setIsFetchingToken] = useState(true);
  const [user, setUser] = useState<UserProps>({} as UserProps);
  const [accessToken, setAccessToken] = useState("");

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "966667347547-4us1eodvu4kffllvvq2if4qostl0n8hj.apps.googleusercontent.com",
    androidClientId:
      "966667347547-oaph9fmsndl0f5mgonpd8i442l3f8o2i.apps.googleusercontent.com",
    scopes: ["profile", "email"],
  });

  async function singInWithGoogle() {
    try {
      setIsUserLoading(true);
      await promptAsync({ useProxy: false, showInRecents: true });
    } catch (error) {
      console.log(error);
    } finally {
      setIsUserLoading(false);
    }
  }

  async function signOut() {
    setUser({} as UserProps);
    await AsyncStorage.removeItem("@sun-system:token");
  }

  async function getUserInfo(token: string) {
    try {
      setIsUserLoading(true);
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      setUser(user);
    } catch (error) {
      console.log(error);
    } finally {
      setIsUserLoading(false);
      setIsFetchingToken(false);
    }
  }

  useEffect(() => {
    async function saveToken(token: string) {
      await AsyncStorage.setItem("@sun-system:token", token);
    }

    if (response?.type === "success" && response.authentication?.accessToken) {
      const token = response?.authentication.accessToken;

      setAccessToken(token);
      getUserInfo(token);
      saveToken(token);
    }
  }, [response]);

  useEffect(() => {
    async function loadUserStorageDate() {
      setIsFetchingToken(true);
      const tokenStorage = await AsyncStorage.getItem("@sun-system:token");

      if (tokenStorage) {
        setAccessToken(tokenStorage);
        getUserInfo(tokenStorage);
      } else {
        setIsFetchingToken(false);
      }
    }

    loadUserStorageDate();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        singInWithGoogle,
        isUserLoading,
        user,
        isFetchingToken,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

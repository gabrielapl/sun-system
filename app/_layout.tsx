import { View } from 'react-native'
import { SplashScreen, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { AuthProvider } from '../src/context/AuthContext'
import { useAuth } from '../src/hooks/auth'

export default function Layout() {
  const { user } = useAuth()

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  if (!hasLoadedFonts) {
    return <SplashScreen />
  }

  return (
    <AuthProvider>
      <View className="flex-1">
        <StatusBar style="light" backgroundColor="transparent" translucent />
        <Stack
          screenOptions={{
            headerShown: false,
            // contentStyle: { backgroundColor: 'transparent' },
            animation: 'fade',
          }}
        >
          <Stack.Screen name="index" redirect={!!user} />
          <Stack.Screen name="(tabs)" />
        </Stack>
      </View>
    </AuthProvider>
  )
}

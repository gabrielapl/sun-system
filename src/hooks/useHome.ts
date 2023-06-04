import { useContext } from 'react'
import { HomeContextDataProps, HomeContext } from '../context/homeContext'

export function useHome(): HomeContextDataProps {
  const context = useContext(HomeContext)

  return context
}

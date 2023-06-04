import { ReactNode, createContext, useState } from 'react'
import { CategoryDTO } from '../dtos/categoryDTO'

export interface HomeContextDataProps {
  categories: Array<CategoryDTO>
  categorySelected: string
  handleSelectCategory: (id: string) => void
}

interface HomeProviderProps {
  children: ReactNode
}

export const HomeContext = createContext({} as HomeContextDataProps)

export function HomeContextProvider({ children }: HomeProviderProps) {
  const [categorySelected, setCategorySelected] = useState('planetas')

  const categories: CategoryDTO[] = [
    {
      id: 'planeta',
      name: 'Planetas',
      icon: 'https://firebasestorage.googleapis.com/v0/b/sun-system-9fbc2.appspot.com/o/categories%2FPlanets.svg?alt=media&token=b9eddb2d-f518-4ac6-a1d0-92e1bda84200',
      color: ['#5935FF', '#47408E'],
    },
    {
      id: 'asteróides',
      name: 'Asteróides',
      icon: 'https://firebasestorage.googleapis.com/v0/b/sun-system-9fbc2.appspot.com/o/categories%2FAsteroids.svg?alt=media&token=b1b91df2-e7e6-4af4-b899-bbe172373dcd',
      color: ['#ff6cd9', '#FF2184'],
    },
    {
      id: 'estrelas',
      name: 'Estrelas',
      icon: 'https://firebasestorage.googleapis.com/v0/b/sun-system-9fbc2.appspot.com/o/categories%2FStars.svg?alt=media&token=18cea578-3f52-409c-957a-659a7cb20ad2',
      color: ['#01d4e4', '#009de0'],
    },
    {
      id: 'galáxias',
      name: 'Galáxias',
      icon: 'https://firebasestorage.googleapis.com/v0/b/sun-system-9fbc2.appspot.com/o/categories%2FGalaxies.svg?alt=media&token=45aeaaaf-3a0e-4aa1-888d-93584e357c5f',
      color: ['#f9c270', '#FFAA2b'],
    },
  ]

  function handleSelectCategory(id: string) {
    setCategorySelected(id)
  }

  return (
    <HomeContext.Provider
      value={{ categories, categorySelected, handleSelectCategory }}
    >
      {children}
    </HomeContext.Provider>
  )
}

import { ReactNode, createContext, useEffect, useState } from 'react'
import { CategoryDTO } from '../dtos/categoryDTO'
import firestore from '@react-native-firebase/firestore'
import { EntityDTO } from '../dtos/entityDTO'

export interface HomeContextDataProps {
  categories: Array<CategoryDTO>
  entities: Array<EntityDTO>
  categorySelected: string
  handleSelectCategory: (id: string) => void
}

interface HomeProviderProps {
  children: ReactNode
}

export const HomeContext = createContext({} as HomeContextDataProps)

export function HomeContextProvider({ children }: HomeProviderProps) {
  const [categorySelected, setCategorySelected] = useState('planets')
  const [categories, setCategories] = useState<CategoryDTO[]>([])
  const [entities, setEntities] = useState<EntityDTO[]>([])

  function handleSelectCategory(id: string) {
    setCategorySelected(id)
  }

  useEffect(() => {
    const subscriber = firestore()
      .collection('space-entities')
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          const { name, icon } = doc.data()

          return {
            id: doc.id,
            name,
            icon,
          }
        })

        setEntities(data)
      })

    return subscriber
  }, [])

  useEffect(() => {
    const subscriber = firestore()
      .collection('categories')
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          const { colors, icon, title } = doc.data()

          return {
            id: doc.id,
            colors,
            icon,
            title,
          }
        })

        setCategories(data)
      })

    return subscriber
  }, [])

  return (
    <HomeContext.Provider
      value={{ categories, categorySelected, handleSelectCategory, entities }}
    >
      {children}
    </HomeContext.Provider>
  )
}

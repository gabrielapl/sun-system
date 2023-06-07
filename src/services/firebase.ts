import firestore from '@react-native-firebase/firestore'
import { FavoritesDTO } from '../dtos/favoritesDTO'
import { EntityDTO, EntityProps } from '../dtos/entityDTO'

export async function toggleFavoriteFirebase(
  entity_id: string,
  user_id: string,
): Promise<boolean> {
  const db = firestore()

  const docRef = db.collection<FavoritesDTO>('favorites').doc(user_id)

  const docData = await docRef.get()

  if (docData.exists) {
    const { entity_ids } = docData.data()

    const isFavorite = entity_ids.includes(entity_id)

    if (isFavorite) {
      const newEntity_ids = entity_ids.filter(
        (favoriteEntity_id) => favoriteEntity_id !== entity_id,
      )

      docRef.update({ entity_ids: newEntity_ids })

      return false
    } else {
      docRef.update({ entity_ids: [...entity_ids, entity_id] })
      return true
    }
  } else {
    docRef.set({ entity_ids: [entity_id] })
    return true
  }
}

export async function getFavoritesBasedUser(
  user_id: string,
): Promise<EntityDTO[]> {
  const data: EntityDTO[] = []
  const db = firestore()

  const docRef = db.collection<FavoritesDTO>('favorites').doc(user_id)

  const docData = await docRef.get()

  if (docData.exists) {
    const entity_ids = docData.data().entity_ids

    const favoritesData = await db.collection<EntityDTO>('space-entities').get()

    for await (const entity of favoritesData.docs) {
      if (entity_ids.includes(entity.id)) {
        data.push({
          id: entity.id,
          ...entity.data(),
        })
      }
    }

    return data
  }

  return []
}

export async function getEntityByName(
  valueSearch: string,
  user_id: string,
): Promise<EntityProps[]> {
  if (typeof valueSearch !== 'string') {
    return []
  }

  const db = firestore()

  const entityCollection = db.collection<EntityDTO>('space-entities')

  const entityDocRef = entityCollection.where('name', '==', valueSearch)

  const entityDocData = await entityDocRef.get()

  if (!entityDocData.empty) {
    const favoriteDocData = await db
      .collection<FavoritesDTO>('favorites')
      .doc(user_id)
      .get()

    const data = entityDocData.docs.map((entity) => {
      const { name, resume, icon } = entity.data()

      let hasFavorite = false

      if (favoriteDocData.exists) {
        const { entity_ids } = favoriteDocData.data()

        hasFavorite = entity_ids.includes(entity.id)
      }

      return {
        id: entity.id,
        name,
        resume,
        icon,
        hasFavorite,
      }
    })

    return data
  }
}

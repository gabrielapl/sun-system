import firestore from '@react-native-firebase/firestore'
import { FavoritesDTO } from '../dtos/favoritesDTO'

export async function toggleFavoriteFirebase(
  entity_id: string,
): Promise<boolean> {
  const db = firestore()

  const docRef = db.collection<FavoritesDTO>('favorites').doc('1')

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

export interface EntityDTO {
  id: string
  name: string
  resume: string
  icon: string
}

export interface EntityProps extends EntityDTO {
  hasFavorite: boolean
}

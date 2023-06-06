export interface EntityDTO {
  id: string
  name: string
}

export interface SmallEntityDTO extends EntityDTO {
  icon: string
}

export interface CompleteEntityDTO extends EntityDTO {
  resume: string
}

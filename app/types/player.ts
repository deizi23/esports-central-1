export interface Player {
  id: number
  teamId: number
  nickname: string
  fullName: string
  country: string
  role: 'AWPer' | 'IGL' | 'Rifler' | 'Support'
  avatar: string
  rating: number
  
}
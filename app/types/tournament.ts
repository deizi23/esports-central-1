export interface Tournament {
  id: number
  name: string
  location: string
  startDate: string
  endDate: string
  prizePool: string
  status: 'Upcoming' | 'Live' | 'Finished'
  logo:string
  cover:string
}
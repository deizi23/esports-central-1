export interface Match {
  id: number
  tournamentId: number
  teamAId: number
  teamBId: number
  date: string
  scoreA: number | null
  scoreB: number | null
  status: 'Upcoming' | 'Live' | 'Finished'
}
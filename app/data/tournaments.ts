import type { Tournament } from '~/types/tournament'

export const tournaments: Tournament[] = [
  {
    id: 1,
    name: 'BLAST Premier Fall',
    location: 'Copenhagen, Denmark',
    startDate: '2026-08-12',
    endDate: '2026-08-18',
    prizePool: '$500,000',
    status: 'Live',
    logo:'/tournaments/BLAST.png',
    cover:'/tournaments/BLAST-cover.jpg'
  },
  {
    id: 2,
    name: 'IEM Cologne',
    location: 'Cologne, Germany',
    startDate: '2026-07-20',
    endDate: '2026-07-28',
    prizePool: '$1,000,000',
    status: 'Finished',
    logo:'/tournaments/IEM.png',
    cover:'/tournaments/IEM-Cologne-cover.jpg'
  },
  {
    id: 3,
    name: 'ESL Pro League',
    location: 'Malta',
    startDate: '2026-09-05',
    endDate: '2026-09-22',
    prizePool: '$750,000',
    status: 'Upcoming',
    logo:'/tournaments/ESL-Pro-League.webp',
    cover:'/tournaments/ESL-Pro-League-cover.webp'
  },
  {
    id: 4,
    name: 'PGL Major',
    location: 'Belgrade, Serbia',
    startDate: '2026-10-10',
    endDate: '2026-10-25',
    prizePool: '$1,250,000',
    status: 'Upcoming',
    logo:'/tournaments/PGL-Major.png',
    cover:'/tournaments/PGL-Major-cover.jpg'
  },
  {
    id: 5,
    name: 'Thunderpick World Championship',
    location: 'Online',
    startDate: '2026-06-15',
    endDate: '2026-06-22',
    prizePool: '$850,000',
    status: 'Finished',
    logo:'/tournaments/Thunderpick-World-Championship.png',
    cover:'/tournaments/Thunderpick-World-Championship-cover.jpg'
  },
  {
    id: 6,
    name: 'IEM Dallas',
    location: 'Dallas, USA',
    startDate: '2026-05-26',
    endDate: '2026-06-01',
    prizePool: '$300,000',
    status: 'Finished',
    logo:'/tournaments/IEM-Dallas.png',
    cover:'/tournaments/IEM-Dallas-cover.jpg'
  }
]
import {ref} from 'vue'
import { tournaments as mockTournaments } from '~/data/tournaments'

export function useTournaments() {
    const tournaments = ref(mockTournaments)
    return{
        tournaments
    }
}
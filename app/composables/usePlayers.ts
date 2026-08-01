import {ref} from 'vue'
import { players as mockPlayers } from '~/data/players'

export function usePlayers() {
    const players = ref(mockPlayers)
    return{
        players
    }
}
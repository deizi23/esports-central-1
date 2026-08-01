import {ref} from 'vue'
import {matches as mockMatches} from '~/data/matches'
export function useMatches() {
    
        const matches = ref(mockMatches)
        return{
            matches
        }
    }

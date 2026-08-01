import { ref } from "vue"
import { teams as mockTeams } from "~/data/teams"
export function useTeams(){
    const teams= useState('teams', () => [...mockTeams])

    return{
        teams
    }
}
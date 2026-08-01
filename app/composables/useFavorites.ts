export function useFavorites(){
    const favorites = useState<number[]>('favorites', () => [])
    function toggleFavorite(teamId:number) {
        const index = favorites.value.indexOf(teamId)
        if (index === -1){
            favorites.value.push(teamId)
        }
        else{
            favorites.value.splice(index, 1)
        }
        }
        function isFavorite(teamId: number) {
            return favorites.value.includes(teamId)
        }
        return{favorites,
            toggleFavorite,
            isFavorite
        }
    }

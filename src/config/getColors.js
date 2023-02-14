const getColors = (colors) => {
    switch(colors){
        case 'IRON': return '#493c3aad'
        case 'BRONZE': return '#5c3d37b4'
        case 'SILVER': return '#8e9fa78a'
        case 'GOLD': return '#9e753fa9' 
        case 'PLATINUM': return '#358474b6'
        case 'DIAMOND': return '#4769c0b0'
        case 'MASTER': return '#d672f4be'
        case 'GRANDMASTER': return '#2b262fc0'
        case 'CHALLENGER': return '#b5904cc0'  
        default: return null
    }
}

export default getColors
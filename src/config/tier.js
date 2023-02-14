const getTier = (tier) => {
    switch(tier){
        case 'IRON': return '/static/media/IRON.d0863281ae44bb928d4a.png'
        case 'BRONZE': return '/static/media/BRONZE.dcca2f64b7d11771638b.png'
        case 'SILVER': return '/static/media/SILVER.5079e43bc1ae9285cc8d.png'
        case 'GOLD': return '/static/media/GOLD.6577ae94f5972d2984ae.png'  
        case 'PLATINUM': return '/static/media/PLATINUM.74198c32ef29a1f6a42e.png'
        case 'DIAMOND': return '/static/media/DIAMOND.4133c9b672b5daedb337.png'
        case 'MASTER': return '/static/media/MASTER.03f7cfc987f68d7dc136.png'
        case 'GRANDMASTER': return '/static/media/GRANDMASTER.86991b3a97ddf2c687fb.png'
        case 'CHALLENGER': return '/static/media/CHALLENGER.85d9a1053a4a3b593d50.png'  
        default: return null
    }
}

export default getTier;
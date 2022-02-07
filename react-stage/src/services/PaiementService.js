const PaiementService = {
    pay: async (panierId, cardId) => {
        const res = await fetch('http://localhost:9191/card/' + panierId + '/' + cardId)
        const data = await res.json()
        return data
    },

    getCard: async (cardNumber, titulairePrenom, titulaireNom, dateOfExpiry, cvv) => {
        const res = await fetch('http://localhost:9191/card/' + titulairePrenom + '/' + titulaireNom + '/' + cardNumber + '/' + dateOfExpiry + '/' + cvv)
        const data = await res.json()
        return data
    },

}

export default PaiementService
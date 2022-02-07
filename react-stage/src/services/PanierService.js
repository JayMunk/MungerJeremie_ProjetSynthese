const PanierService = {
    getPanier: async (email) => {
        const res = await fetch('http://localhost:9191/panier/' + email)
        const data = await res.json()
        return data
    },

    savePanier: async (newPanier) => {
        const res = await fetch('http://localhost:9191/panier/newPanier',
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newPanier)
        })
        const data = await res.json()
        return data
    }

}

export default PanierService
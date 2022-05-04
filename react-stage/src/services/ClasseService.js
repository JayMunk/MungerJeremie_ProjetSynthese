const urlBase = 'http://localhost:9191/classe'

const ClasseService = {
    saveAllerRetour: async (values, competitionId) => {
        const res = await fetch(urlBase + '/AllerRetour/' + competitionId,
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(values)
            }
        )
        const data = await res.json()
        return data
    },

    saveTour: async (values, competitionId) => {
        const res = await fetch(urlBase + '/Tour/' + competitionId,
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(values)
            }
        )
        const data = await res.json()
        return data
    },

    saveBaril: async (values, competitionId) => {
        const res = await fetch(urlBase + '/Baril/' + competitionId,
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(values)
            }
        )
        const data = await res.json()
        return data
    },

    sinscrireAllerRetour: async (chevalId, courriel, classeId) => {
        const res = await fetch(urlBase + "/inscrireAllerRetour/" + chevalId + "/" + courriel + "/" + classeId,
            {
                method: 'POST'
            })
        const data = await res.json()
        return data
    },

    sinscrireBaril: async (chevalId, courriel, classeId) => {
        const res = await fetch(urlBase + "/inscrireBaril/" + chevalId + "/" + courriel + "/" + classeId,
            {
                method: 'POST'
            })
        const data = await res.json()
        return data
    },

    sinscrireTour: async (chevalId, courriel, classeId) => {
        const res = await fetch(urlBase + "/inscrireTour/" + chevalId + "/" + courriel + "/" + classeId,
            {
                method: 'POST'
            })
        const data = await res.json()
        return data
    },

    genererOrdreAllerRetour: async (classeId) => {
        const res = await fetch(urlBase + "/genererOrdreAllerRetour/" + classeId,
            {
                method: 'POST'
            })
        const data = await res.json()
        return data
    },

    genererOrdreBaril: async (classeId) => {
        const res = await fetch(urlBase + "/genererOrdreBaril/" + classeId,
            {
                method: 'POST'
            })
        const data = await res.json()
        return data
    },

    genererOrdreTour: async (classeId) => {
        const res = await fetch(urlBase + "/genererOrdreTour/" + classeId,
            {
                method: 'POST'
            })
        const data = await res.json()
        return data
    },

    getEquipeActuelIdAllerRetour: async (classeId) => {
        const res = await fetch(urlBase + '/getEquipeActuelIdAllerRetour/' + classeId)
        const data = await res.json()
        return data
    },

    getEquipeActuelIdBaril: async (classeId) => {
        const res = await fetch(urlBase + '/getEquipeActuelIdBaril/' + classeId)
        const data = await res.json()
        return data
    },

    getEquipeActuelIdTour: async (classeId) => {
        const res = await fetch(urlBase + '/getEquipeActuelIdTour/' + classeId)
        const data = await res.json()
        return data
    },

    getResultatListAllerRetour: async (classeId) => {
        const res = await fetch(urlBase + '/getResultatListAllerRetour/' + classeId)
        const data = await res.json()
        return data
    },

    getResultatListBaril: async (classeId) => {
        const res = await fetch(urlBase + '/getResultatListBaril/' + classeId)
        const data = await res.json()
        return data
    },

    getResultatListTour: async (classeId) => {
        const res = await fetch(urlBase + '/getResultatListTour/' + classeId)
        const data = await res.json()
        return data
    },

    getOrdreListAllerRetour: async (classeId, equipeActuelId) => {
        const res = await fetch(urlBase + '/getOrdreListAllerRetour/' + classeId + '/' + equipeActuelId)
        const data = await res.json()
        return data
    },

    getOrdreListBaril: async (classeId, equipeActuelId) => {
        const res = await fetch(urlBase + '/getOrdreListBaril/' + classeId + '/' + equipeActuelId)
        const data = await res.json()
        return data
    },

    getOrdreListTour: async (classeId, equipeActuelId) => {
        const res = await fetch(urlBase + '/getOrdreListTour/' + classeId + '/' + equipeActuelId)
        const data = await res.json()
        return data
    },

    getEquipeActuelAllerRetour: async (classeId, equipeActuelId) => {
        const res = await fetch(urlBase + '/getEquipeActuelAllerRetour/' + classeId + '/' + equipeActuelId)
        const data = await res.json()
        return data
    },

    getEquipeActuelBaril: async (classeId, equipeActuelId) => {
        const res = await fetch(urlBase + '/getEquipeActuelBaril/' + classeId + '/' + equipeActuelId)
        const data = await res.json()
        return data
    },

    getEquipeActuelTour: async (classeId, equipeActuelId) => {
        const res = await fetch(urlBase + '/getEquipeActuelTour/' + classeId + '/' + equipeActuelId)
        const data = await res.json()
        return data
    },
}
export default ClasseService
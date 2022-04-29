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
        //console.log(data, "data")
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
        //console.log(data, "data")
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
        //console.log(data, "data")
        return data
    },

    sinscrireAllerRetour: async (chevalId, courriel, classeId) => {
        //console.log(chevalId, courriel, classeId, "Values to send")
        const res = await fetch(urlBase + "/inscrireAllerRetour/" + chevalId + "/" + courriel + "/" + classeId,
            {
                method: 'POST'
            })
        const data = await res.json()
        //console.log(data, "data")
        return data
    },

    sinscrireBaril: async (chevalId, courriel, classeId) => {
        //console.log(chevalId, courriel, classeId, "Values to send")
        const res = await fetch(urlBase + "/inscrireBaril/" + chevalId + "/" + courriel + "/" + classeId,
            {
                method: 'POST'
            })
        const data = await res.json()
        //console.log(data, "data")
        return data
    },

    sinscrireTour: async (chevalId, courriel, classeId) => {
        //console.log(chevalId, courriel, classeId, "Values to send")
        const res = await fetch(urlBase + "/inscrireTour/" + chevalId + "/" + courriel + "/" + classeId,
            {
                method: 'POST'
            })
        const data = await res.json()
        //console.log(data, "data")
        return data
    },

    genererOrdreAllerRetour: async (classeId) => {
        //console.log(classeId, "Values to send")
        const res = await fetch(urlBase + "/genererOrdreAllerRetour/" + classeId,
            {
                method: 'POST'
            })
        const data = await res.json()
        //console.log(data, "data")
        return data
    },

    genererOrdreBaril: async (classeId) => {
        //console.log(classeId, "Values to send")
        const res = await fetch(urlBase + "/genererOrdreBaril/" + classeId,
            {
                method: 'POST'
            })
        const data = await res.json()
        //console.log(data, "data")
        return data
    },

    genererOrdreTour: async (classeId) => {
        //console.log(classeId, "Values to send")
        const res = await fetch(urlBase + "/genererOrdreTour/" + classeId,
            {
                method: 'POST'
            })
        const data = await res.json()
        //console.log(data, "data")
        return data
    },

    getEquipeActuelIdAllerRetour: async (classeId) => {
        //console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getEquipeActuelIdAllerRetour/' + classeId)
        const data = await res.json()
        //console.log(data, "getEquipeActuelIdAllerRetour")
        return data
    },

    getEquipeActuelIdBaril: async (classeId) => {
        //console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getEquipeActuelIdBaril/' + classeId)
        const data = await res.json()
        //console.log(data, "getEquipeActuelIdBaril")
        return data
    },

    getEquipeActuelIdTour: async (classeId) => {
        //console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getEquipeActuelIdTour/' + classeId)
        const data = await res.json()
        //console.log(data, "getEquipeActuelIdTour")
        return data
    },

    getResultatListAllerRetour: async (classeId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getResultatListAllerRetour/' + classeId)
        const data = await res.json()
        console.log(data, "getResultatListAllerRetour")
        return data
    },

    getResultatListBaril: async (classeId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getResultatListBaril/' + classeId)
        const data = await res.json()
        console.log(data, "getResultatListBaril")
        return data
    },

    getResultatListTour: async (classeId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getResultatListTour/' + classeId)
        const data = await res.json()
        console.log(data, "getResultatListTour")
        return data
    },

    getOrdreListAllerRetour: async (classeId, equipeActuelId) => {
        //console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getOrdreListAllerRetour/' + classeId + '/' + equipeActuelId)
        const data = await res.json()
        //console.log(data, "getOrdreListAllerRetour")
        return data
    },

    getOrdreListBaril: async (classeId, equipeActuelId) => {
        //console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getOrdreListBaril/' + classeId + '/' + equipeActuelId)
        const data = await res.json()
        //console.log(data, "getOrdreListBaril")
        return data
    },

    getOrdreListTour: async (classeId, equipeActuelId) => {
        //console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getOrdreListTour/' + classeId + '/' + equipeActuelId)
        const data = await res.json()
        //console.log(data, "getOrdreListTour")
        return data
    },

    getEquipeActuelAllerRetour: async (classeId, equipeActuelId) => {
        //console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getEquipeActuelAllerRetour/' + classeId + '/' + equipeActuelId)
        const data = await res.json()
        //console.log(data, "getEquipeActuelAllerRetour")
        return data
    },

    getEquipeActuelBaril: async (classeId, equipeActuelId) => {
        //console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getEquipeActuelBaril/' + classeId + '/' + equipeActuelId)
        const data = await res.json()
        //console.log(data, "getEquipeActuelBaril")
        return data
    },

    getEquipeActuelTour: async (classeId, equipeActuelId) => {
        //console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getEquipeActuelTour/' + classeId + '/' + equipeActuelId)
        const data = await res.json()
        //console.log(data, "getEquipeActuelTour")
        return data
    },
}
export default ClasseService
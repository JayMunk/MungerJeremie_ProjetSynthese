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
        console.log(data, "data")
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
        console.log(data, "data")
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
        console.log(data, "data")
        return data
    },

    sinscrireAllerRetour: async (chevalId, courriel, classeId) => {
        console.log(chevalId, courriel, classeId, "Values to send")
        const res = await fetch(urlBase + "/inscrireAllerRetour/" + chevalId + "/" + courriel + "/" + classeId,
            {
                method: 'POST'
            })
        const data = await res.json()
        console.log(data, "data")
        return data
    },

    sinscrireBaril: async (chevalId, courriel, classeId) => {
        console.log(chevalId, courriel, classeId, "Values to send")
        const res = await fetch(urlBase + "/inscrireBaril/" + chevalId + "/" + courriel + "/" + classeId,
            {
                method: 'POST'
            })
        const data = await res.json()
        console.log(data, "data")
        return data
    },

    sinscrireTour: async (chevalId, courriel, classeId) => {
        console.log(chevalId, courriel, classeId, "Values to send")
        const res = await fetch(urlBase + "/inscrireTour/" + chevalId + "/" + courriel + "/" + classeId,
            {
                method: 'POST'
            })
        const data = await res.json()
        console.log(data, "data")
        return data
    },

    genererOrdreAllerRetour: async (classeId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + "/genererOrdreAllerRetour/" + classeId,
            {
                method: 'POST'
            })
        const data = await res.json()
        console.log(data, "data")
        return data
    },

    genererOrdreBaril: async (classeId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + "/genererOrdreBaril/" + classeId,
            {
                method: 'POST'
            })
        const data = await res.json()
        console.log(data, "data")
        return data
    },

    genererOrdreTour: async (classeId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + "/genererOrdreTour/" + classeId,
            {
                method: 'POST'
            })
        const data = await res.json()
        console.log(data, "data")
        return data
    },

    getOrdreAllerRetour: async (classeId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getOrdreAllerRetour/' + classeId)
        const data = await res.json()
        console.log(data, "data")
        return data
    },

    getOrdreBaril: async (classeId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getOrdreBaril/' + classeId)
        const data = await res.json()
        return data
    },

    getOrdreTour: async (classeId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getOrdreTour/' + classeId)
        const data = await res.json()
        return data
    },

    getResultatAllerRetour: async (classeId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getResultatAllerRetour/' + classeId)
        const data = await res.json()
        console.log(data, "data")
        return data
    },

    getEquipeActuelIdAllerRetour: async (classeId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getEquipeActuelIdAllerRetour/' + classeId)
        const data = await res.json()
        console.log(data, "getEquipeActuelIdAllerRetour")
        return data
    },

    getEquipeActuelParticipantAllerRetour: async (classeId, equipeActuelId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getEquipeActuelParticipantAllerRetour/' + classeId + '/' + equipeActuelId)
        const data = await res.json()
        console.log(data, "getEquipeActuelParticipantAllerRetour")
        return data
    },

    getEquipeActuelChevalAllerRetour: async (classeId, equipeActuelId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getEquipeActuelChevalAllerRetour/' + classeId + '/' + equipeActuelId)
        const data = await res.json()
        console.log(data, "getEquipeActuelChevalAllerRetour")
        return data
    },

    getOrdreListParticipantAllerRetour: async (classeId, equipeActuelId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getOrdreListParticipantAllerRetour/' + classeId + '/' + equipeActuelId)
        const data = await res.json()
        console.log(data, "getOrdreListParticipantAllerRetour")
        return data
    },

    getOrdreListChevalAllerRetour: async (classeId, equipeActuelId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getOrdreListChevalAllerRetour/' + classeId + '/' + equipeActuelId)
        const data = await res.json()
        console.log(data, "getOrdreListChevalAllerRetour")
        return data
    },
}
export default ClasseService
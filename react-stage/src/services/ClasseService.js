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

    getEquipeActuelIdBaril: async (classeId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getEquipeActuelIdBaril/' + classeId)
        const data = await res.json()
        console.log(data, "getEquipeActuelIdBaril")
        return data
    },

    getEquipeActuelIdTour: async (classeId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getEquipeActuelIdTour/' + classeId)
        const data = await res.json()
        console.log(data, "getEquipeActuelIdTour")
        return data
    },

    getEquipeActuelParticipantAllerRetour: async (classeId, equipeActuelId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getEquipeActuelParticipantAllerRetour/' + classeId + '/' + equipeActuelId)
        const data = await res.json()
        console.log(data, "getEquipeActuelParticipantAllerRetour")
        return data
    },
    getEquipeActuelParticipantBaril: async (classeId, equipeActuelId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getEquipeActuelParticipantBaril/' + classeId + '/' + equipeActuelId)
        const data = await res.json()
        console.log(data, "getEquipeActuelParticipantBaril")
        return data
    },
    getEquipeActuelParticipantTour: async (classeId, equipeActuelId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getEquipeActuelParticipantTour/' + classeId + '/' + equipeActuelId)
        const data = await res.json()
        console.log(data, "getEquipeActuelParticipantTour")
        return data
    },

    getEquipeActuelChevalAllerRetour: async (classeId, equipeActuelId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getEquipeActuelChevalAllerRetour/' + classeId + '/' + equipeActuelId)
        const data = await res.json()
        console.log(data, "getEquipeActuelChevalAllerRetour")
        return data
    },
    getEquipeActuelChevalBaril: async (classeId, equipeActuelId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getEquipeActuelChevalBaril/' + classeId + '/' + equipeActuelId)
        const data = await res.json()
        console.log(data, "getEquipeActuelChevalBaril")
        return data
    },
    getEquipeActuelChevalTour: async (classeId, equipeActuelId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getEquipeActuelChevalTour/' + classeId + '/' + equipeActuelId)
        const data = await res.json()
        console.log(data, "getEquipeActuelChevalTour")
        return data
    },

    getOrdreListParticipantAllerRetour: async (classeId, equipeActuelId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getOrdreListParticipantAllerRetour/' + classeId + '/' + equipeActuelId)
        const data = await res.json()
        console.log(data, "getOrdreListParticipantAllerRetour")
        return data
    },

    getOrdreListParticipantBaril: async (classeId, equipeActuelId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getOrdreListParticipantBaril/' + classeId + '/' + equipeActuelId)
        const data = await res.json()
        console.log(data, "getOrdreListParticipantBaril")
        return data
    },

    getOrdreListParticipantTour: async (classeId, equipeActuelId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getOrdreListParticipantTour/' + classeId + '/' + equipeActuelId)
        const data = await res.json()
        console.log(data, "getOrdreListParticipantTour")
        return data
    },

    getOrdreListChevalAllerRetour: async (classeId, equipeActuelId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getOrdreListChevalAllerRetour/' + classeId + '/' + equipeActuelId)
        const data = await res.json()
        console.log(data, "getOrdreListChevalAllerRetour")
        return data
    },

    getOrdreListChevalBaril: async (classeId, equipeActuelId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getOrdreListChevalBaril/' + classeId + '/' + equipeActuelId)
        const data = await res.json()
        console.log(data, "getOrdreListChevalBaril")
        return data
    },

    getOrdreListChevalTour: async (classeId, equipeActuelId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getOrdreListChevalTour/' + classeId + '/' + equipeActuelId)
        const data = await res.json()
        console.log(data, "getOrdreListChevalTour")
        return data
    },

    getResultatListParticipantAllerRetour: async (classeId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getResultatListParticipantAllerRetour/' + classeId)
        const data = await res.json()
        console.log(data, "getResultatListParticipantAllerRetour")
        return data
    },

    getResultatListParticipantBaril: async (classeId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getResultatListParticipantBaril/' + classeId)
        const data = await res.json()
        console.log(data, "getResultatListParticipantBaril")
        return data
    },

    getResultatListParticipantTour: async (classeId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getResultatListParticipantTour/' + classeId)
        const data = await res.json()
        console.log(data, "getResultatListParticipantTour")
        return data
    },

    getResultatListChevalAllerRetour: async (classeId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getResultatListChevalAllerRetour/' + classeId)
        const data = await res.json()
        console.log(data, "getResultatListChevalAllerRetour")
        return data
    },

    getResultatListChevalBaril: async (classeId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getResultatListChevalBaril/' + classeId)
        const data = await res.json()
        console.log(data, "getResultatListChevalBaril")
        return data
    },

    getResultatListChevalTour: async (classeId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getResultatListChevalTour/' + classeId)
        const data = await res.json()
        console.log(data, "getResultatListChevalTour")
        return data
    },

    getResultatListTempsAllerRetour: async (classeId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getResultatListTempsAllerRetour/' + classeId)
        const data = await res.json()
        console.log(data, "getResultatListTempsAllerRetour")
        return data
    },

    getResultatListTempsBaril: async (classeId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getResultatListTempsBaril/' + classeId)
        const data = await res.json()
        console.log(data, "getResultatListTempsBaril")
        return data
    },

    getResultatListTempsTour: async (classeId) => {
        console.log(classeId, "Values to send")
        const res = await fetch(urlBase + '/getResultatListTempsTour/' + classeId)
        const data = await res.json()
        console.log(data, "getResultatListTempsTour")
        return data
    },
}
export default ClasseService
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
        const res = await fetch(urlBase + "/inscrireAllerRetour/" + chevalId + "/" + courriel + "/" + classeId)
        const data = await res.json()
        console.log(data, "data")
        return data
    },

    sinscrireBaril: async (chevalId, courriel, classeId) => {
        console.log(chevalId, courriel, classeId, "Values to send")
        const res = await fetch(urlBase + "/inscrireBaril/" + chevalId + "/" + courriel + "/" + classeId)
        const data = await res.json()
        console.log(data, "data")
        return data
    },

    sinscrireTour: async (chevalId, courriel, classeId) => {
        console.log(chevalId, courriel, classeId, "Values to send")
        const res = await fetch(urlBase + "/inscrireTour/" + chevalId + "/" + courriel + "/" + classeId)
        const data = await res.json()
        console.log(data, "data")
        return data
    }
}
export default ClasseService
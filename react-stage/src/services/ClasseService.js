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
    }
}
export default ClasseService
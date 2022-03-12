const urlBase = 'http://localhost:9191/competition'

const CompetitionService = {
    saveCompetition: async (values, courriel) => {
        const res = await fetch(urlBase + '/' + courriel,
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(values)
            })
        const data = await res.json()
        console.log(data, "data")
        return data
    },

    getOrganisationCompetitions: async (organisationCourriel) => {
        const res = await fetch(urlBase + "/competitions/" + organisationCourriel)
        const data = await res.json()
        return data
    },

    getCompetitionsByDateWeek: async (dateDebut) => {
        const res = await fetch(urlBase + "/competitionsByDateWeek/" + dateDebut)
        const data = await res.json()
        console.log(data, "data")
        return data
    },

    getCompetitionsByDateMonth: async (dateDebut) => {
        const res = await fetch(urlBase + "/competitionsByDateMonth/" + dateDebut)
        const data = await res.json()
        console.log(data, "data")
        return data
    },

    getCompetitionsByDateYear: async (dateDebut) => {
        const res = await fetch(urlBase + "/competitionsByDateYear/" + dateDebut)
        const data = await res.json()
        console.log(data, "data")
        return data
    }
}
export default CompetitionService
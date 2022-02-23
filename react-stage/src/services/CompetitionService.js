const urlBase = 'http://localhost:9191/competition'

const CompetitionService = {
    saveCompetition: async (values, courriel) => {
        const res = await fetch(urlBase +'/' + courriel,
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(values)
            })
        const data = await res.json()
        console.log(data,"data")
        return data
    }
}
export default CompetitionService
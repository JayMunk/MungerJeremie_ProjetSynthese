const urlBase = 'http://localhost:9191/cheval'

const ChevalService = {
    saveCheval: async (values, courriel) => {
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
    },
    
    getHorsesByOwnerEmail: async (ownerCourriel) => {
        const res = await fetch(urlBase + "/horses/" + ownerCourriel)
        const data = await res.json()
        return data
    }
}
export default ChevalService
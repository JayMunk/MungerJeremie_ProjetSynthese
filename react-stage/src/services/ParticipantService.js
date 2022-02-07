const urlBase = 'http://localhost:9191/participant'

const ParticipantService = {
    saveParticipant: async (values) => {
        const res = await fetch(urlBase + '/participant',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(values)
            })
        const data = await res.json()
        return data
    }
}
export default ParticipantService
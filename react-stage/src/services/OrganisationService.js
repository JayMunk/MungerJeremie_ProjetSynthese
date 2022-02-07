const urlBase = 'http://localhost:9191/organisation'

const OrganisationService = {
    saveOrganisation: async (values) => {
        const res = await fetch(urlBase + '/organisation',
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
export default OrganisationService
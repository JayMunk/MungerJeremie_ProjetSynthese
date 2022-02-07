const ComputerService = {
    getAllComputers: async () => {
        const res = await fetch('http://localhost:9191/computers')
        const data = await res.json()
        return data
    },

    getAllComputersInStock: async () => {
        const res = await fetch('http://localhost:9191/computersInStock')
        const data = await res.json()
        return data
    },

    ajouterComputer: async (computer) => {
        const res = await fetch('http://localhost:9191/inventory/computer',
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(computer)
        })
        const data = await res.json()
        return data
    }

}

export default ComputerService
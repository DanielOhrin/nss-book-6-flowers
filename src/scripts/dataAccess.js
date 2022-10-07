const applicationState = {
    flowers: [],
    retailers: [],
    distributors: [],
    nurseries: [],
    nurseryFlowers: [],
    distributorNurseries: []
}

const mainContainer = document.querySelector(`#container`)
const API = `http://localhost:8088`

export const fetchFlowers = () => {
    return fetch(`${API}/flowers`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.flowers = [...data]
            }
        )
}

export const fetchRetailers = () => {
    return fetch(`${API}/retailers`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.retailers = [...data]
            }
        )
}

export const fetchDistributors = () => {
    return fetch(`${API}/distributors`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.distributors = [...data]
            }
        )
}

export const fetchNurseries = () => {
    return fetch(`${API}/nurseries`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.nurseries = [...data]
            }
        )
}

export const fetchNurseryFlowers = () => {
    return fetch(`${API}/nurseryFlowers`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.nurseryFlowers = [...data]
            }
        )
}

export const fetchDistributorNurseries = () => {
    return fetch(`${API}/distributorNurseries`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.distributorNurseries = [...data]
            }
        )
}

export const getFlowers = () => {
    return applicationState.flowers.map(flower => ({ ...flower }))
}

export const getRetailers = () => {
    return applicationState.retailers.map(retailer => ({ ...retailer }))
}

export const getDistributors = () => {
    return applicationState.distributors.map(distributor => ({ ...distributor }))
}
export const getNurseries = () => {
    return applicationState.nurseries.map(nursery => ({ ...nursery }))
}

export const getNurseryFlowers = () => {
    return applicationState.nurseryFlowers.map(nF => ({ ...nF }))

}
export const getDistributorNurseries = () => {
    return applicationState.distributorNurseries.map(dN => ({ ...dN }))
}
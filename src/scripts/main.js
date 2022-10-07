import { fetchFlowers, fetchRetailers, fetchDistributors, fetchNurseries, fetchNurseryFlowers, fetchDistributorNurseries } from "./dataAccess.js"
import { MainHTML } from "./MainHTML.js"

const mainContainer = document.querySelector(`#container`)

const renderHTML = () => {
    fetchFlowers()
        .then(() => fetchRetailers())
        .then(() => fetchDistributors())
        .then(() => fetchNurseries())
        .then(() => fetchNurseryFlowers())
        .then(() => fetchDistributorNurseries())
        .then(
            () => {
                mainContainer.innerHTML = MainHTML()
            }
        )
}

renderHTML()

mainContainer.addEventListener(
    "stateChanged",
    event => {
        renderHTML()
    }
)
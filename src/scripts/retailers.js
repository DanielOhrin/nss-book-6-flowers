import { getRetailers, getDistributors, getFlowers, getNurseries, getDistributorNurseries, getNurseryFlowers } from "./dataAccess.js"

export const Retailers = () => {
    const retailers = getRetailers()
    const distributors = getDistributors()
    const flowers = getFlowers()
    const nurseries = getNurseries()
    const distributorNurseries = getDistributorNurseries()
    const nurseryFlowers = getNurseryFlowers()

    return `<h2>Retailers</h2>
        ${retailers.map(retailer => {
        const distributor = distributors.find(distributor => distributor.id === retailer.distributorId)
        const nurseriesArr = distributorNurseries.filter(nursery => nursery.distributorId === distributor.id)
        let flowerNameArr = []
        
        return `<div class="retailer-div">
        <h4>${retailer.name}</h4> 
        <p class="distributor"><strong>Distributor:</strong> ${distributor.name}</p>
        <p class="nursery"><strong>Nurseries:</strong> ${distributorNurseries.map(dN => {
            if (dN.distributorId === distributor.id) {
                return nurseries.find(nursery => nursery.id === dN.nurseryId).name
            }
        }).filter(val => val).join(", ")}</p>
        
        ${nurseriesArr.map(nursery => {
                let flowersArr = nurseryFlowers.filter(flower => flower.nurseryId === nursery.id)
                let flowerNames = new Set()

                for (const nurseryFlower of flowersArr) {
                    flowerNames.add(flowers.find(flower => flower.id === nurseryFlower.flowerId).commonName)
                }
                
                flowerNameArr.push(...flowerNames)

                if (nursery === nurseriesArr.at(-1)) {
                    const flowers = [...flowerNameArr].join(" | ")
                    flowerNameArr = []
                    return flowers
                }
            }).filter(val => val)}
            <hr style="opacity: 0%">
            <p class="retailer">${retailer.address} [${retailer.city}, ${retailer.state}]</p>
            </div>`
    }).join("")}
    </div>`
}
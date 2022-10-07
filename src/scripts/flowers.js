import { getFlowers } from "./dataAccess.js"

export const Flowers = () => {
    const flowers = getFlowers()
    
    return `<h2>Flowers</h2>
    ${flowers.map(flower => {
        return `<h4 class="flower">${flower.color} ${flower.commonName}</h4>`
    }).join("")}`
}
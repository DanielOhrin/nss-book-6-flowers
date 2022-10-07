import { Flowers } from "./flowers.js"
import { Retailers } from "./retailers.js"

export const MainHTML = () => {
    return `<section id="flowers">
        ${ Flowers() }
    </section>
    <hr style="width: 40%">
    <section id="retailers">
        ${ Retailers() }
    </section>`
}
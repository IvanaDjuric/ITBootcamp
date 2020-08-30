import {getPastLaunches} from './source.js'
import {draw} from './draw.js'

export const pastLaunchesShow = () => {
    const div1 = document.createElement('div')
    div1.className = 'launch-list'

    getPastLaunches().then(res => {
        res.data.forEach(el => {
            div1.appendChild(draw(el))
        })
    })
    return div1
}
import {getPastLaunches} from './source.js'
import {draw} from './draw.js'

export const selectMenu = document.createElement('select')
document.getElementById('app1')

const option1 = document.createElement('option')
option1.textContent = '-'
selectMenu.appendChild(option1)

for (let i = 2006; i < 2021; i++) {
    const opt = document.createElement('option')
    opt.value = i
    opt.textContent = i
    selectMenu.append(opt)
}

const div2 = document.createElement('div')
div2.className = 'launch-list'

selectMenu.addEventListener('change', (e) => {
    e.preventDefault()

    div2.innerHTML = ''

    getPastLaunches().then(res => {
        res.data.forEach((el) => {
            if(selectMenu.value == el.launch_year){
                div2.appendChild(draw(el))
                document.getElementById('app1').append(div2)
            }
        })

        return div2
    })
})
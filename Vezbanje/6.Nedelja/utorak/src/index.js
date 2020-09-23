import { LaunchList } from './components/LaunchList'
import { getAllLaunches } from './service'

const app = document.querySelector('#app')

getAllLaunches().then(res => {
    app.appendChild(LaunchList(res.data))
})

import {pastLaunchesShow} from './components/pastLaunches.js'
import {selectMenu} from './components/select.js'
import{showHeader} from './components/header.js'

document.getElementById('header').appendChild(showHeader())
document.getElementById('app1').appendChild(selectMenu)
document.getElementById('app').appendChild(pastLaunchesShow())

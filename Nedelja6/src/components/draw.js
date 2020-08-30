export const draw = (launch) => {
    //launch.launch_year
    //launch.rocket.rocket_name
    //launch.links.mission_patch

    const launchCont = document.createElement('div')
    launchCont.className = 'launch'

    const inn0 = document.createElement('div')
    inn0.className = 'inner-div-0'
        const image = document.createElement('img')
        image.src = launch.links.mission_patch
    inn0.appendChild(image)

    const inn1 = document.createElement('div')
    inn1.className = 'inner-div-1'
        const rocketName = document.createElement('span')
        rocketName.textContent = launch.rocket.rocket_name
    inn1.appendChild(rocketName)

    const inn2 = document.createElement('div')
    inn2.className = 'inner-div-1'
        const yearLaunch = document.createElement('span')
        yearLaunch.textContent = launch.launch_year
    inn2.appendChild(yearLaunch)

    launchCont.append(inn0,inn1,inn2)

    return launchCont
}
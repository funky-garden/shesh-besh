import React from 'react'
import './Arrow.scss'

const positionToColor = (section, index) => {
    let name = ''
    if(section === 'top') {
        name =  (index % 2) ? 'home' : 'away'
    }
    else {
        name = (index % 2) ? 'away' : 'home'
    }
    return 'arrow-' + name
}

const Arrow = ({section, index}) => {
    const arrowSection = `arrow-${section} `
    const arrowColor = positionToColor(section, index)
    return <div className={arrowSection + arrowColor} />
}

export default Arrow


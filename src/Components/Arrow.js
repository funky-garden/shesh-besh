import React from 'react'
import './Arrow.scss'

const positionToColor = (section, index) => {
    let color = ''
    if(section === 'top') {
        color =  (index % 2) ? 'black' : 'white'
    }
    else {
        color = (index % 2) ? 'white' : 'black'
    }

    return 'arrow-' + color
}

const Arrow = ({section, index}) => {
    const arrowSection = `arrow-${section} `
    const arrowColor = positionToColor(section, index)
    return <div className={arrowSection + arrowColor} />
}

export default Arrow


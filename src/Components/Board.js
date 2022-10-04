import React from 'react'
import './Board.scss'

const arrowColor = (section, index) => {
    if(section === 'top') {
        return index % 2 ? 'black' : 'white'
    }
    else {
        return index % 2 ? 'white' : 'black'
    }
}

const Arrows = ({section}) => {
    const arrow = (name) => {
        return <div className={name}/>
    }

    let arrows = []
    for(let i = 0; i < 6; i++) {
        const name = `arrow-${arrowColor(section, i)} arrow-${section}`
        arrows.push(arrow(name))
    }
    return arrows
}

const Quarter = ({ section }) => {
    return (
            <div className='quarter'>
                <Arrows section={section}/>
            </div>
    )
}

const MiddleGap = () => {
    return (
        <div className='middleGap'/>
    )
}
const Half = () => {
    return (
        <div className='half'>
            <Quarter section='top'/>
            <MiddleGap/>
            <Quarter section='bottom'/>
        </div>
    )
}

export const Board = () => {
    return (
            <div className='board'>
                <Half />
                <Half />
            </div>
    )
}

export default Board


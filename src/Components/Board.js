import React from 'react'
import './Board.scss'

const Arrows = ({section}) => {
    const name = `arrow-${section}`
    const arrow = () => {
        return <div className={name}/>
    }

    let arrows = []
    for(let i = 0; i < 6; i++) {
        arrows.push(arrow())
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


import React from 'react'
import './Board.scss'
import Slot from './Slot.js'

const Quarter = ({ section }) => {
    let slots = []
    for(let i = 0; i < 6; i++) {
        slots.push(<Slot section={section} index={i}/>)
    }
    return (
        <div className='quarter'>
        {slots}
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


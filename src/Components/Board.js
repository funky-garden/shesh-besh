import React, { useState } from 'react'
import './Board.scss'
import Slot from './Slot.js'

const getSlotIndex = (quarterIndex, slotIndex) => {
    if(quarterIndex < 2) {
        return (6 * quarterIndex ) + ( 5 - slotIndex)
    }
    else {
        return (quarterIndex * 6) + slotIndex
    }
}

const Quarter = ({ index, pieces, click, updateLocation }) => {
    const section = index < 2 ? 'top' : 'bottom'

    const slots = [...Array(6).keys()].map(i => {
        const slotIndex = getSlotIndex(index, i)
        const whitePieces = pieces[0][slotIndex]
        const blackPieces = pieces[1][slotIndex]
        const key = `slot-${slotIndex}`
        return (
            <Slot
            section={section}
            index={slotIndex}
            numPieces={[whitePieces, blackPieces]}
            click={click}
            updateLocation={updateLocation}
            key={key}
            />
        )
    })

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
const Half = ({ index, pieces, click, updateLocation }) => {
    return (
        <div className='half'>
            <Quarter index={index[0]} pieces={pieces} click={click} updateLocation={updateLocation}/>
            <MiddleGap/>
            <Quarter index={index[1]} pieces={pieces} click={click} updateLocation={updateLocation}/>
        </div>
    )
}

export const Board = () => {

    const [ pieces, setPieces ] = useState()
    let gamePieces
    if(!pieces) {
        gamePieces =  [
            Array(24),
            Array(24)
        ]
        gamePieces.forEach(a => a.fill(0))
        gamePieces[0][0] = 3
        gamePieces[1][10] = 3
    } else {
        gamePieces = pieces
    }


    const onClick = (index, color) => {
        let newPieces = [...gamePieces]
        newPieces[color][index]--
        newPieces[color][(index + 1) % 24]++
        setPieces(newPieces)
    }

    const updateLocation = (startIndex, endIndex, colorIndex) => {
        let newPieces = [...gamePieces]
        newPieces[colorIndex][startIndex]--
        newPieces[colorIndex][endIndex]++
        setPieces(newPieces)
    }


    return (
        <div className='board'>
            <Half index={[1, 2]} pieces={gamePieces} click={onClick} key='half-1' updateLocation={updateLocation}/>
            <Half index={[0, 3]} pieces={gamePieces} click={onClick} key='half-2' updateLocation={updateLocation}/>
        </div>
    )
}

export default Board


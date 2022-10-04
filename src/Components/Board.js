import React, { useState } from 'react'
import './Board.scss'
import Slot from './Slot.js'

const Quarter = ({ index, pieces, click }) => {
    const section = index < 2 ? 'top' : 'bottom'

    const slots = [...Array(6).keys()].map(i => {
        const slotIndex = (index * 6 + 5) - i
        return <Slot section={section} index={slotIndex} numPieces={pieces[slotIndex]} click={click}/>
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
const Half = ({ index, pieces, click }) => {
    return (
        <div className='half'>
            <Quarter index={index} pieces={pieces} click={click} />
            <MiddleGap/>
            <Quarter index={index + 2} pieces={pieces} click={click}/>
        </div>
    )
}

export const Board = () => {

    const [ pieces, setPieces ] = useState()
    let gamePieces
    if(!pieces) {
        gamePieces = new Array(24)
        gamePieces.fill(0)
        gamePieces[4] = 1
    } else {
        gamePieces = pieces
    }


    const onClick = () => {
        let newIndex
        for(let i = 0; i < gamePieces.length; i++) {
            if(gamePieces[i]){
                newIndex = (i + 1) % 24
                break
            }
        }
        let newPieces = new Array(24)
        newPieces.fill(0)
        newPieces[newIndex] = 1
        setPieces(newPieces)
    }


    return (
        <div className='board'>
            <Half index={1} pieces={gamePieces} click={onClick}/>
            <Half index={0} pieces={gamePieces} click={onClick}/>
        </div>
    )
}

export default Board


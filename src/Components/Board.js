import React, { useState } from 'react'
import './Board.scss'
import Quarter from './Quarter'

const MiddleGap = () => {
    return (
        <div className='middleGap'/>
    )
}

const Half = ({ index, pieces, updateLocation }) => {
    return (
        <div className='half'>
            <Quarter index={index[0]} pieces={pieces} updateLocation={updateLocation}/>
            <MiddleGap/>
            <Quarter index={index[1]} pieces={pieces} updateLocation={updateLocation}/>
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

    const updateLocation = (startIndex, endIndex, colorIndex) => {
        endIndex = endIndex % 24
        if(gamePieces[(colorIndex + 1) % 2][endIndex] > 1 ) {
            // trying to move to a space with more than one enemy
            return
        }
        let newPieces = [...gamePieces]
        newPieces[colorIndex][startIndex]--
        newPieces[colorIndex][endIndex]++
        setPieces(newPieces)
    }


    return (
        <div className='board'>
            <Half index={[1, 2]} pieces={gamePieces} key='half-1' updateLocation={updateLocation}/>
            <Half index={[0, 3]} pieces={gamePieces} updateLocation={updateLocation}/>
        </div>
    )
}

export default Board


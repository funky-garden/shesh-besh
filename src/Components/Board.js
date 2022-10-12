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


const startingBoard = () => {
    let whitePieces = Array(24).fill(0)
    let blackPieces = Array(24).fill(0)
    whitePieces[1] = 4
    blackPieces[10] = 4
    return [ whitePieces, blackPieces ]
}

export const Board = () => {

    const [ pieces, setPieces ] = useState(startingBoard())

    const updateLocation = (piece, endIndex) => {
        const oppTeam = (Number(piece.team) + 1) % 2
        if(pieces[oppTeam][endIndex] > 1 ) {
            // trying to move to a space with more than one enemy
            return
        }
        let newPieces = [...pieces]
        newPieces[Number(piece.team)][piece.index]--
        newPieces[Number(piece.team)][endIndex]++
        setPieces(newPieces)
    }


    return (
        <div className='board'>
            <Half index={[1, 2]} pieces={pieces} key='half-1' updateLocation={updateLocation}/>
            <Half index={[0, 3]} pieces={pieces} updateLocation={updateLocation}/>
        </div>
    )
}

export default Board


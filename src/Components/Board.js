import { useState } from 'react'
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
    let team0 = Array(24).fill(0)
    let team1 = Array(24).fill(0)
    team0[23] = 2
    team0[12] = 5
    team0[7] = 3
    team0[5] = 5
    team1[0] = 2
    team1[11] = 5
    team1[16] = 3
    team1[18] = 5
    return [ team0, team1 ]
}

export const Board = ({ advanceTurn, turn }) => {

    const [ pieces, setPieces ] = useState(startingBoard())


    const updateLocation = (piece, endIndex) => {
        console.log(piece)
        if(piece.team !== turn ) {
            console.log('its not your turn')
            return
        }
        const oppTeam = (Number(piece.team) + 1) % 2
        if(pieces[oppTeam][endIndex] > 1 ) {
            // trying to move to a space with more than one enemy
            return
        }
        let newPieces = [...pieces]
        newPieces[Number(piece.team)][piece.index]--
        newPieces[Number(piece.team)][endIndex]++
        advanceTurn()
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


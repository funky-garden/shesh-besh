import { useState } from 'react'
import './SheshBesh.scss'
import Board from './Board'
import TopBar from './TopBar'


export const SheshBesh = () => {

    const [ dice, setDice ] = useState([ 0, 0 ])
    const [ moves, setMoves ] = useState( {
        avaliableMoves : [],
        pendingMoves : [],
    })
    const [ turn, setTurn ] = useState(0)

    const advanceTurn = () => {
        const nextTurn = (Number(turn) + 1) % 2
        setTurn(nextTurn)
    }
    return (
        <div className='background'>
            <div className='gameContainer'>
                <TopBar dice={dice} setDice={setDice} turn={turn} setMoves={setMoves} moves={moves} />
                <Board dice={dice} advanceTurn={advanceTurn} turn={turn}/>
            </div>
        </div>
    )
}

export default SheshBesh


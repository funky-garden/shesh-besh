import { useState } from 'react'
import './SheshBesh.scss'
import Board from './Board'
import TopBar from './TopBar'


export const SheshBesh = () => {

    const [ turn, setTurn ] = useState(0)
    const advanceTurn = () => {
        const nextTurn = (Number(turn) + 1) % 2
        console.log('Advancing turn to : ', nextTurn)
        setTurn(nextTurn)
    }
    return (
        <div className='background'>
            <div className='gameContainer'>
                <TopBar turn={turn} />
                <Board advanceTurn={advanceTurn} turn={turn}/>
            </div>
        </div>
    )
}

export default SheshBesh


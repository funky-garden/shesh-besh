import { useState } from 'react'
import './TopBar.scss'

const TurnIndicator = ({ turn }) => {
    const text = `Current Turn: Player ${turn} `
    return <div className='turnIndicator'> { text } </div>
}


const rollDice = () => {
    return Math.floor( Math.random() * 6 + 1 )
}


const Dice = ({ dice, setDice, moves }) => {

    const onClick = () => {
        const newDice = [ rollDice(),  rollDice()]
        setDice(newDice)
    }
    return (
        <div className='diceContainer'>
            <div>{ dice[0] }</div>
            <div>{ dice[1] }</div>
            <button onClick={onClick}> Roll </button>
        </div>
    )
}
export const TopBar = ({ turn, dice, moves, setMoves,  setDice }) => {
    return (
        <div className='topbar'>
            <TurnIndicator turn={turn}/>
            <Dice dice={dice} setDice={setDice} moves={moves} setMoves={setMoves}/>
        </div>
    )
}

export default TopBar

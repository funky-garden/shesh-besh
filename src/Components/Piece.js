import React from 'react'
import './Piece.scss'

const Piece = ({ click, color }) => {
    const style = { 'backgroundColor' : color}
    return <div className='piece' draggable onClick={click} style={style}/>
}

export default Piece


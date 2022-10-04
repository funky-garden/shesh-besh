import React from 'react'
import './Piece.scss'

const Piece = ({ click }) => {
    return <div className='piece' onClick={click}/>
}

export default Piece


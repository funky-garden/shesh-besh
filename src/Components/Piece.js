import React from 'react'
import './Piece.scss'

import { dragEnd, dragStart } from '../Dragger.js'
const Piece = ({ click, color, index }) => {
    const style = { 'backgroundColor' : color}

    const colorIndex = color === 'white' ? 0 : 1
    const newOnDrag = (e) => {
        dragStart(e, index, colorIndex)
    }

    return <div className='piece' onDragEnd={dragEnd} onDragStart={newOnDrag} draggable onClick={click} style={style}/>
}

export default Piece


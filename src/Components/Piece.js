import React from 'react'
import './Piece.scss'
import { dragEnd, dragStart } from '../Dragger.js'

const Piece = ({ team, index }) => {


    const onDragStart = (e) => {
        dragStart(e, { team : Number(team), index})
    }

    const className = `piece team${team}`

    return <div className={className} onDragEnd={dragEnd} onDragStart={onDragStart} draggable />
}

export default Piece

